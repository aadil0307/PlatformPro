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

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Choose a solid, general model; can be changed later from UI/config
        model: "google/gemini-2.0-flash-thinking-exp:free",
        messages: [
          { role: "system", content: system },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 180,
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`OpenRouter request failed (${response.status}): ${text || response.statusText}`);
    }

    const data = await response.json();
    const content =
      data?.choices?.[0]?.message?.content ||
      "AI Update: Unable to fetch live status at the moment. Try again shortly.";
    return content as string;
  },
});
