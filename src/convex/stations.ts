import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getStationsByRoute = query({
  args: { routeId: v.id("routes") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("stations")
      .withIndex("by_route", (q) => q.eq("routeId", args.routeId))
      .order("asc")
      .collect();
  },
});

export const getStationById = query({
  args: { stationId: v.id("stations") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.stationId);
  },
});

export const incrementVerifiedCount = mutation({
  args: { stationId: v.id("stations") },
  handler: async (ctx, args) => {
    const station = await ctx.db.get(args.stationId);
    if (!station) throw new Error("Station not found");
    
    await ctx.db.patch(args.stationId, {
      verifiedCount: station.verifiedCount + 1,
    });
    
    return station.verifiedCount + 1;
  },
});

export const addStationFeedback = mutation({
  args: {
    stationId: v.id("stations"),
    isHelpful: v.boolean(),
  },
  handler: async (ctx, args) => {
    // Get current user (optional for anonymous users)
    const userId = await ctx.auth.getUserIdentity();
    
    await ctx.db.insert("stationFeedback", {
      stationId: args.stationId,
      userId: userId?.subject as any,
      isHelpful: args.isHelpful,
      timestamp: Date.now(),
    });
  },
});
