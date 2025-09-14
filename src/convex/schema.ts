import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // Train routes (Western, Central, Harbour lines)
    routes: defineTable({
      name: v.string(), // "Western Line", "Central Line", "Harbour Line"
      code: v.string(), // "WR", "CR", "HR"
      color: v.string(), // hex color for the line
      isActive: v.boolean(),
    }).index("by_isActive", ["isActive"]),

    // Stations for each route
    stations: defineTable({
      routeId: v.id("routes"),
      name: v.string(), // "Andheri", "Bandra", etc.
      code: v.string(), // "ADH", "BND", etc.
      platformInfo: v.string(), // "Platform 1 (Left Side)"
      exitCoaches: v.object({
        general: v.number(), // best coach for general
        ladies: v.number(), // best coach for ladies
        firstClass: v.number(), // best coach for first class
      }),
      bridgeInfo: v.string(), // pro tip about exits/connections
      verifiedCount: v.number(), // crowd-sourced verification count
      order: v.number(), // station order on the line
    }).index("by_route", ["routeId"]),

    // User feedback for stations
    stationFeedback: defineTable({
      stationId: v.id("stations"),
      userId: v.optional(v.id("users")),
      isHelpful: v.boolean(), // true for thumbs up, false for thumbs down
      timestamp: v.number(),
    }).index("by_station", ["stationId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;