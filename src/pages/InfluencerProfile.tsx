import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, User, BarChart3, History } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalHeader } from "@/components/GlobalHeader";
import { InfluencerProfileOverview } from "@/components/InfluencerProfileOverview";
import { InfluencerPerformanceMetrics } from "@/components/InfluencerPerformanceMetrics";
import { InfluencerHistoricalData } from "@/components/InfluencerHistoricalData";

const InfluencerProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedInfluencer, setSelectedInfluencer] = useState(id || "emma-foodie");
  const [selectedBrand, setSelectedBrand] = useState("hellofresh");
  const [selectedMarket, setSelectedMarket] = useState("uk");

  const influencers = [
    { id: "emma-foodie", name: "Emma Foodie", handle: "@emmafoodie" },
    { id: "nordic-chef", name: "Nordic Chef", handle: "@nordicchef" },
    { id: "kitchen-stories", name: "Kitchen Stories", handle: "@kitchenstories_uk" },
    { id: "french-cuisine", name: "French Cuisine", handle: "@frenchcuisine" }
  ];

  const currentInfluencer = influencers.find(inf => inf.id === selectedInfluencer);

  const handleBackToDashboard = () => {
    navigate("/campaigns");
  };

  const handleInfluencerChange = (newInfluencerId: string) => {
    setSelectedInfluencer(newInfluencerId);
    navigate(`/influencers/${newInfluencerId}`);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Global Header */}
      <GlobalHeader />
      
      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Navigation & Filters */}
        <div className="bg-[#1A1A1A] rounded-xl p-4 border border-gray-800">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleBackToDashboard}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Influencer:</span>
                <Select value={selectedInfluencer} onValueChange={handleInfluencerChange}>
                  <SelectTrigger className="w-48 bg-[#2A2A2A] border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    {influencers.map((influencer) => (
                      <SelectItem key={influencer.id} value={influencer.id}>
                        {influencer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Brand:</span>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="w-40 bg-[#2A2A2A] border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    <SelectItem value="hellofresh">HelloFresh</SelectItem>
                    <SelectItem value="blue-apron">Blue Apron</SelectItem>
                    <SelectItem value="gousto">Gousto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Market:</span>
                <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                  <SelectTrigger className="w-32 bg-[#2A2A2A] border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="se">Sweden</SelectItem>
                    <SelectItem value="no">Norway</SelectItem>
                    <SelectItem value="dk">Denmark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Current Influencer Info */}
          {currentInfluencer && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {currentInfluencer.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">{currentInfluencer.name}</h1>
                  <p className="text-gray-400">{currentInfluencer.handle}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-[#1A1A1A] border border-gray-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#2A2A2A]">
              <User className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-[#2A2A2A]">
              <BarChart3 className="w-4 h-4 mr-2" />
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger value="historical" className="data-[state=active]:bg-[#2A2A2A]">
              <History className="w-4 h-4 mr-2" />
              Historical Data
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <InfluencerProfileOverview />
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <InfluencerPerformanceMetrics />
          </TabsContent>

          <TabsContent value="historical" className="space-y-6">
            <InfluencerHistoricalData />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InfluencerProfile; 