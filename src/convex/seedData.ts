import { mutation } from "./_generated/server";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data
    const existingRoutes = await ctx.db.query("routes").collect();
    for (const route of existingRoutes) {
      await ctx.db.delete(route._id);
    }
    
    const existingStations = await ctx.db.query("stations").collect();
    for (const station of existingStations) {
      await ctx.db.delete(station._id);
    }

    // Create train routes
    const westernLine = await ctx.db.insert("routes", {
      name: "Western Line",
      code: "WR",
      color: "#8B0000",
      isActive: true,
    });

    const centralLine = await ctx.db.insert("routes", {
      name: "Central Line",
      code: "CR", 
      color: "#006400",
      isActive: true,
    });

    const harbourLine = await ctx.db.insert("routes", {
      name: "Harbour Line",
      code: "HR",
      color: "#000080",
      isActive: true,
    });

    // Western Line stations
    const westernStations = [
      {
        name: "Churchgate",
        code: "CCG",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 9, ladies: 3, firstClass: 12 },
        bridgeInfo: "Exit from coach 9 for quick access to Fort area and business district.",
        order: 1,
      },
      {
        name: "Marine Lines",
        code: "ML",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 7, ladies: 2, firstClass: 11 },
        bridgeInfo: "Coach 7 is closest to the main exit towards Oval Maidan.",
        order: 2,
      },
      {
        name: "Charni Road",
        code: "CRD",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 6, ladies: 1, firstClass: 10 },
        bridgeInfo: "Use coach 6 for direct access to Girgaon Chowpatty.",
        order: 3,
      },
      {
        name: "Grant Road",
        code: "GTR",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 8, ladies: 3, firstClass: 12 },
        bridgeInfo: "Coach 8 aligns with the foot overbridge to Grant Road station exit.",
        order: 4,
      },
      {
        name: "Mumbai Central",
        code: "BCT",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 5, ladies: 2, firstClass: 9 },
        bridgeInfo: "Coach 5 is perfect for connecting to long-distance trains at Mumbai Central railway station.",
        order: 5,
      },
      {
        name: "Mahalaxmi",
        code: "MX",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 7, ladies: 1, firstClass: 11 },
        bridgeInfo: "Exit from coach 7 for easy access to Mahalaxmi Temple and racecourse.",
        order: 6,
      },
      {
        name: "Lower Parel",
        code: "LPR",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 6, ladies: 3, firstClass: 10 },
        bridgeInfo: "Coach 6 is closest to the Phoenix Mills and corporate offices exit.",
        order: 7,
      },
      {
        name: "Elphinstone Road",
        code: "EPR",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 4, ladies: 1, firstClass: 8 },
        bridgeInfo: "Use coach 4 for quick connection to Prabhadevi station on Central Line.",
        order: 8,
      },
      {
        name: "Dadar",
        code: "DR",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 8, ladies: 2, firstClass: 12 },
        bridgeInfo: "Coach 8 provides fastest access to Central Line platforms and Dadar market.",
        order: 9,
      },
      {
        name: "Bandra",
        code: "BND",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 7, ladies: 3, firstClass: 11 },
        bridgeInfo: "Coach 7 aligns perfectly with the Metro station exit and Bandra-Kurla Complex.",
        order: 10,
      },
    ];

    // Central Line stations
    const centralStations = [
      {
        name: "CSMT",
        code: "CSMT",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 9, ladies: 3, firstClass: 12 },
        bridgeInfo: "Exit from coach 9 for heritage building and South Mumbai business district.",
        order: 1,
      },
      {
        name: "Masjid",
        code: "MSD",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 6, ladies: 2, firstClass: 10 },
        bridgeInfo: "Coach 6 is closest to Crawford Market and Mohammed Ali Road.",
        order: 2,
      },
      {
        name: "Sandhurst Road",
        code: "SRD",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 5, ladies: 1, firstClass: 9 },
        bridgeInfo: "Use coach 5 for access to Dongri and textile markets.",
        order: 3,
      },
      {
        name: "Byculla",
        code: "BY",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 7, ladies: 3, firstClass: 11 },
        bridgeInfo: "Coach 7 provides easy access to Byculla Zoo and East Indian community areas.",
        order: 4,
      },
      {
        name: "Chinchpokli",
        code: "CL",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 4, ladies: 2, firstClass: 8 },
        bridgeInfo: "Exit from coach 4 for Lalbaug and Parel industrial area.",
        order: 5,
      },
      {
        name: "Currey Road",
        code: "CRY",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 6, ladies: 1, firstClass: 10 },
        bridgeInfo: "Coach 6 is perfect for accessing Currey Road and nearby residential areas.",
        order: 6,
      },
      {
        name: "Parel",
        code: "PR",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 8, ladies: 3, firstClass: 12 },
        bridgeInfo: "Coach 8 aligns with exits to Parel industrial estate and hospitals.",
        order: 7,
      },
      {
        name: "Dadar",
        code: "DR",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 7, ladies: 2, firstClass: 11 },
        bridgeInfo: "Coach 7 provides fastest connection to Western Line and Shivaji Park.",
        order: 8,
      },
      {
        name: "Matunga Road",
        code: "MTR",
        platformInfo: "Platform 1 (Right Side)",
        exitCoaches: { general: 5, ladies: 1, firstClass: 9 },
        bridgeInfo: "Use coach 5 for King Circle and Matunga residential areas.",
        order: 9,
      },
      {
        name: "Sion",
        code: "SIN",
        platformInfo: "Platform 2 (Left Side)",
        exitCoaches: { general: 6, ladies: 3, firstClass: 10 },
        bridgeInfo: "Coach 6 is closest to Sion Hospital and Eastern Express Highway.",
        order: 10,
      },
    ];

    // Insert Western Line stations
    for (const station of westernStations) {
      await ctx.db.insert("stations", {
        routeId: westernLine,
        ...station,
        verifiedCount: Math.floor(Math.random() * 200) + 50, // Random verified count
      });
    }

    // Insert Central Line stations
    for (const station of centralStations) {
      await ctx.db.insert("stations", {
        routeId: centralLine,
        ...station,
        verifiedCount: Math.floor(Math.random() * 200) + 50, // Random verified count
      });
    }

    // Add a few Harbour Line stations
    const harbourStations = [
      {
        name: "CSMT",
        code: "CSMT",
        platformInfo: "Platform 3 (Right Side)",
        exitCoaches: { general: 8, ladies: 2, firstClass: 11 },
        bridgeInfo: "Coach 8 for Harbour Line connections and South Mumbai access.",
        order: 1,
      },
      {
        name: "Dockyard Road",
        code: "DYR",
        platformInfo: "Platform 1 (Left Side)",
        exitCoaches: { general: 6, ladies: 1, firstClass: 9 },
        bridgeInfo: "Use coach 6 for Mazagaon Dock and naval areas.",
        order: 2,
      },
      {
        name: "Reay Road",
        code: "RRD",
        platformInfo: "Platform 2 (Right Side)",
        exitCoaches: { general: 7, ladies: 3, firstClass: 10 },
        bridgeInfo: "Coach 7 provides access to Reay Road and Cotton Green areas.",
        order: 3,
      },
    ];

    // Insert Harbour Line stations
    for (const station of harbourStations) {
      await ctx.db.insert("stations", {
        routeId: harbourLine,
        ...station,
        verifiedCount: Math.floor(Math.random() * 150) + 30,
      });
    }

    return "Database seeded successfully!";
  },
});
