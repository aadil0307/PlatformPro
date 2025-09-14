import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { motion, AnimatePresence } from "framer-motion";
import { Train, MapPin, Users, Crown, ThumbsUp, ThumbsDown, Loader2, Sparkles, Navigation, Home, Menu } from "lucide-react";
import { useState } from "react";
import { useQuery, useMutation, useAction } from "convex/react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router";

type CoachType = "general" | "ladies" | "firstClass";

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedRouteId, setSelectedRouteId] = useState<Id<"routes"> | null>(null);
  const [selectedStationId, setSelectedStationId] = useState<Id<"stations"> | null>(null);
  const [coachType, setCoachType] = useState<CoachType>("general");
  const [showResults, setShowResults] = useState(false);
  const [aiStatus, setAiStatus] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const routes = useQuery(api.routes.getAllRoutes);
  const stations = useQuery(
    api.stations.getStationsByRoute,
    selectedRouteId ? { routeId: selectedRouteId } : "skip"
  );
  const selectedStation = useQuery(
    api.stations.getStationById,
    selectedStationId ? { stationId: selectedStationId } : "skip"
  );

  const incrementVerified = useMutation(api.stations.incrementVerifiedCount);
  const addFeedback = useMutation(api.stations.addStationFeedback);
  const checkLiveStatus = useAction(api.ai.checkLiveStatus);

  const handleFindSpot = () => {
    if (!selectedStationId) {
      toast.error("Please select a destination station");
      return;
    }
    setShowResults(true);
    setAiStatus(null);
    toast.success("Found your optimal spot!");
  };

  const handleVerifyHelpful = async () => {
    if (!selectedStationId) {
      toast.error("Please select a station before submitting feedback.");
      return;
    }
    
    try {
      await incrementVerified({ stationId: selectedStationId });
      await addFeedback({ stationId: selectedStationId, isHelpful: true });
      toast.success("Thanks for your feedback!");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to submit feedback";
      toast.error(message);
    }
  };

  const handleCheckLiveStatus = async () => {
    if (!selectedStation) {
      toast.error("Station details not loaded yet. Please wait a moment.");
      return;
    }
    if (!routes) {
      toast.error("Train lines are still loading. Please try again shortly.");
      return;
    }

    setIsLoadingAI(true);
    setAiStatus(null);

    try {
      const route = routes.find((r) => r._id === selectedStation.routeId);
      if (!route) {
        toast.error("Selected route not found. Please reselect your line.");
        return;
      }

      const result = await checkLiveStatus({
        routeName: route?.name ?? "Unknown Line",
        stationName: selectedStation.name,
        coachType,
      });
      setAiStatus(result);
      toast.success("AI status updated!");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to fetch AI status. Please try again.";
      toast.error(message);
      setAiStatus(null);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const getCoachTypeLabel = (type: CoachType) => {
    switch (type) {
      case "general": return "General";
      case "ladies": return "Ladies";
      case "firstClass": return "First Class";
    }
  };

  const getCoachTypeIcon = (type: CoachType) => {
    switch (type) {
      case "general": return <Users className="h-4 w-4" />;
      case "ladies": return <Users className="h-4 w-4 text-pink-500" />;
      case "firstClass": return <Crown className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl"></div>
      </div>

      {/* Responsive Navbar */}
      <div className="relative z-10">
        <div className="w-full px-4 pt-4">
          <div className="mx-auto max-w-sm md:max-w-md">
            <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-3 py-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-white hover:text-white/90"
              >
                <Train className="h-5 w-5" />
                <span className="font-semibold tracking-tight">Platform Pro</span>
              </button>

              {/* Desktop actions */}
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => navigate("/")}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Plan
                </Button>
              </div>

              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="backdrop-blur-xl bg-white/10 border-white/20">
                    <div className="mt-8 flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        className="justify-start text-white hover:bg-white/20"
                        onClick={() => navigate("/")}
                      >
                        <Home className="h-4 w-4 mr-2" />
                        Home
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-white hover:bg-white/20"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        Plan Journey
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-3 py-6 max-w-sm md:max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Platform Pro 🚂
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Your guide to winning the daily commute.
          </p>
        </motion.div>

        {/* Controls Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl mb-6">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Plan Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Train Line Selection */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium">Train Line</label>
                <Select
                  value={selectedRouteId || ""}
                  onValueChange={(value) => {
                    setSelectedRouteId(value as Id<"routes">);
                    setSelectedStationId(null);
                    setShowResults(false);
                  }}
                >
                  <SelectTrigger className="h-12 bg-white/20 border-white/30 text-white backdrop-blur-sm">
                    <SelectValue placeholder="Select train line" />
                  </SelectTrigger>
                  <SelectContent>
                    {routes?.map((route) => (
                      <SelectItem key={route._id} value={route._id}>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: route.color }}
                          />
                          {route.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Destination Station Selection */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium">Destination Station</label>
                <Select
                  value={selectedStationId || ""}
                  onValueChange={(value) => {
                    setSelectedStationId(value as Id<"stations">);
                    setShowResults(false);
                  }}
                  disabled={!selectedRouteId}
                >
                  <SelectTrigger className="h-12 bg-white/20 border-white/30 text-white backdrop-blur-sm">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {stations?.map((station) => (
                      <SelectItem key={station._id} value={station._id}>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {station.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Coach Type Selection */}
              <div className="space-y-3">
                <label className="text-white/90 text-sm font-medium">Coach Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {(["general", "ladies", "firstClass"] as CoachType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setCoachType(type)}
                      className={`py-3 px-2 rounded-lg border backdrop-blur-sm transition-all ${
                        coachType === type
                          ? "bg-white/30 border-white/50 text-white"
                          : "bg-white/10 border-white/20 text-white/80 hover:bg-white/20"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {getCoachTypeIcon(type)}
                        <span className="text-xs font-medium">
                          {getCoachTypeLabel(type)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Find My Spot Button */}
              <Button
                onClick={handleFindSpot}
                disabled={!selectedStationId}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 text-lg shadow-lg"
              >
                <Train className="mr-2 h-5 w-5" />
                Find My Spot
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Modal */}
        <Dialog open={showResults && !!selectedStation} onOpenChange={setShowResults}>
          <DialogContent className="max-w-md w-[95%] p-0 backdrop-blur-xl bg-white/10 border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl overflow-hidden"
            >
              <DialogHeader className="p-5 border-b border-white/15">
                <DialogTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Your Optimal Spot
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  Best coach and platform details tailored to your destination
                </DialogDescription>
              </DialogHeader>

              <div className="p-5 space-y-6">
                {/* Platform Info */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {selectedStation?.platformInfo}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                      Best Coach: {selectedStation?.exitCoaches[coachType]}
                    </Badge>
                  </motion.div>
                </div>

                <Separator className="bg-white/20" />

                {/* Pro Tip */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="bg-white/10 rounded-lg p-4 border border-white/20"
                >
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Pro Tip
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {selectedStation?.bridgeInfo}
                  </p>
                </motion.div>

                {/* Verification Section */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14 }}
                  className="bg-white/10 rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/90 text-sm">Was this info correct?</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleVerifyHelpful}
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-green-300 text-sm">
                      ✅ {selectedStation?.verifiedCount} commuters found this helpful
                    </span>
                  </div>
                </motion.div>

                {/* AI Live Status */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckLiveStatus}
                    disabled={isLoadingAI}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    {isLoadingAI ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Getting AI Update...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Check Live Status 🤖
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {isLoadingAI && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white/10 rounded-lg p-4 border border-white/20"
                      >
                        <div className="flex items-center gap-2 text-white/90">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Asking our AI for real-time updates...</span>
                        </div>
                      </motion.div>
                    )}

                    {aiStatus && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-300/30"
                      >
                        <p className="text-white text-sm leading-relaxed">
                          {aiStatus}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>

        {/* Initial State Message */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl">
              <CardContent className="py-8">
                <Train className="h-12 w-12 text-white/60 mx-auto mb-4" />
                <p className="text-white/80 text-lg">
                  Select your route to begin your journey
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}