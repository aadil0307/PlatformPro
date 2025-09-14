"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";

export const checkLiveStatus = action({
  args: {
    routeName: v.string(),
    stationName: v.string(),
    coachType: v.union(
      v.literal("general"),
      v.literal("ladies"),
      v.literal("firstClass"),
    ),
  },
  handler: async (ctx, { routeName, stationName, coachType }) => {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OpenRouter API key not configured. Please add OPENROUTER_API_KEY in Integrations.");
    }

    const model =
      process.env.OPENROUTER_MODEL || "google/gemini-2.0-flash-thinking-exp:free";

    const headers: Record<string, string> = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-Title": "Platform Pro",
    };
    if (process.env.SITE_URL) {
      headers["HTTP-Referer"] = process.env.SITE_URL;
    }

    const system =
      "You are an assistant providing concise, commuter-friendly live status updates for Mumbai local trains. " +
      "Be brief, actionable, and specific. If uncertain, state likelihoods and give practical guidance.";

    const userPrompt = `
Provide a short live status update for:
- Line: ${routeName}
- Destination station: ${stationName}
- Coach type: ${coachType}

Include:
- On-time vs delays (estimate minutes if applicable)
- Crowd level (light / moderate / heavy)
- Practical tip (e.g., boarding window or exit coach advantage)
Keep it to 1-2 sentences, friendly tone, no markdown.
`.trim();

    // Add robust error handling and timeout for the OpenRouter request
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000); // 12s timeout

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers,
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 180,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        // Try to extract meaningful error from body
        let detail = "";
        try {
          const errJson = await response.json();
          detail = errJson?.error?.message || JSON.stringify(errJson);
        } catch {
          try {
            detail = await response.text();
          } catch {
            detail = response.statusText;
          }
        }
        const prefix =
          response.status === 401
            ? "Authentication failed with OpenRouter."
            : response.status === 429
            ? "OpenRouter rate limit hit."
            : response.status === 400
            ? "Bad request to OpenRouter."
            : `OpenRouter request failed (${response.status}).`;
        throw new Error(`${prefix} ${detail || ""}`.trim());
      }

      // Parse JSON safely
      let data: any;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error("Failed to parse OpenRouter response JSON.");
      }

      const content =
        data?.choices?.[0]?.message?.content ||
        "AI Update: Unable to fetch live status at the moment. Try again shortly.";
      return content as string;
    } catch (err: any) {
      if (err?.name === "AbortError") {
        throw new Error("OpenRouter request timed out. Please try again.");
      }
      const msg =
        typeof err?.message === "string"
          ? err.message
          : "Unexpected error occurred while contacting OpenRouter.";
      throw new Error(msg);
    } finally {
      clearTimeout(timeout);
    }
  },
});