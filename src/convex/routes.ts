import { query } from "./_generated/server";

export const getAllRoutes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("routes")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});
