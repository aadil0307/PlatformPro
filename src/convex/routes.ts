import { query } from "./_generated/server";

export const getAllRoutes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("routes")
      .withIndex("by_isActive", (q) => q.eq("isActive", true))
      .collect();
  },
});