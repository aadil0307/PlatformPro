import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Train, MapPin, Clock, Users, Sparkles, Navigation, ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router";

export default function Landing() {
  const { isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 py-8 md:py-12 max-w-4xl">
        {/* Navbar */}
        <div className="mb-6 md:mb-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-3 py-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-white hover:text-white/90"
                aria-label="Go to home"
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
                  Home
                </Button>
                {isAuthenticated ? (
                  <Button
                    variant="secondary"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started
                  </Button>
                )}
              </div>

              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      aria-label="Open menu"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="backdrop-blur-xl bg-white/10 border-white/20"
                  >
                    <div className="mt-8 flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        className="justify-start text-white hover:bg-white/20"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </Button>
                      {isAuthenticated ? (
                        <Button
                          variant="ghost"
                          className="justify-start text-white hover:bg-white/20"
                          onClick={() => navigate("/dashboard")}
                        >
                          Dashboard
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          className="justify-start text-white hover:bg-white/20"
                          onClick={() => navigate("/auth")}
                        >
                          Get Started
                        </Button>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                <Train className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-yellow-800" />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Platform Pro 🚂
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Your guide to winning the daily commute.<br />
            <span className="text-lg text-white/80">Navigate Mumbai's local trains like a pro</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              {isAuthenticated ? (
                <>
                  <Navigation className="mr-2 h-5 w-5" />
                  Go to Dashboard
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16"
        >
          {[
            {
              icon: <MapPin className="h-8 w-8 text-blue-400" />,
              title: "Smart Platform Guide",
              description: "Find the exact platform and coach for your destination"
            },
            {
              icon: <Clock className="h-8 w-8 text-green-400" />,
              title: "Real-time Updates",
              description: "AI-powered live status and delay information"
            },
            {
              icon: <Users className="h-8 w-8 text-purple-400" />,
              title: "Crowd-sourced Tips",
              description: "Verified by thousands of daily commuters"
            },
            {
              icon: <Sparkles className="h-8 w-8 text-yellow-400" />,
              title: "Pro Tips",
              description: "Insider knowledge for faster exits and connections"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-5 md:p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Route",
                description: "Choose your train line and destination station"
              },
              {
                step: "2", 
                title: "Get Your Spot",
                description: "Find the optimal coach and platform position"
              },
              {
                step: "3",
                title: "Travel Smart",
                description: "Use AI updates and pro tips for the best journey"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.2 }}
                className="relative"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <span className="text-xl md:text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-white/40 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Master Your Commute?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Join thousands of smart commuters who never miss their stop
              </p>
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 text-lg shadow-xl"
              >
                {isAuthenticated ? (
                  <>
                    <Navigation className="mr-2 h-5 w-5" />
                    Go to Dashboard
                  </>
                ) : (
                  <>
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}