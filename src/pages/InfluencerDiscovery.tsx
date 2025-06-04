import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Database, UserPlus, Mail, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GlobalHeader } from "@/components/GlobalHeader";
import { InfluencerDatabaseTable } from "@/components/InfluencerDatabaseTable";
import { NewInfluencersList } from "@/components/NewInfluencersList";
import { BulkEmailManager } from "@/components/BulkEmailManager";

const InfluencerDiscovery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("historical");
  const [selectedMarket, setSelectedMarket] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const [showBulkEmail, setShowBulkEmail] = useState(false);

  const handleBackToDashboard = () => {
    navigate("/");
  };

  const handleBulkEmail = () => {
    if (selectedInfluencers.length > 0) {
      setShowBulkEmail(true);
    }
  };

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case "historical":
        return "Historical Campaign Data";
      case "new":
        return "New Talent Database";
      case "bulk":
        return "Bulk Email Manager";
      default:
        return "";
    }
  };

  const getTabDescription = (tab: string) => {
    switch (tab) {
      case "historical":
        return "Talents we've worked with before - prioritizing those who can convert 20+ sales";
      case "new":
        return "New talents with basic information for rate calculation based on CPM";
      case "bulk":
        return "Cluster and email selected talents with campaign offers";
      default:
        return "";
    }
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
                <Database className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-semibold text-white">Influencer Discovery</h1>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search influencers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-[#2A2A2A] border-gray-700"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                  <SelectTrigger className="w-32 bg-[#2A2A2A] border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    <SelectItem value="all">All Markets</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="se">Sweden</SelectItem>
                    <SelectItem value="no">Norway</SelectItem>
                    <SelectItem value="dk">Denmark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-[#2A2A2A] border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="food">Food & Cooking</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="health">Health & Wellness</SelectItem>
                  <SelectItem value="family">Family & Parenting</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Selected Influencers Bar */}
          {selectedInfluencers.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                    {selectedInfluencers.length} selected
                  </Badge>
                  <span className="text-sm text-gray-400">
                    Ready for bulk email campaign
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleBulkEmail}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Campaign Offers
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedInfluencers([])}
                  >
                    Clear Selection
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tab Header with Descriptions */}
        <div className="bg-[#1A1A1A] rounded-xl p-4 border border-gray-800">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white mb-2">
              {getTabTitle(activeTab)}
            </h2>
            <p className="text-sm text-gray-400">
              {getTabDescription(activeTab)}
            </p>
          </div>

          {/* Tabbed Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-[#2A2A2A] border border-gray-700">
              <TabsTrigger value="historical" className="data-[state=active]:bg-[#3A3A3A]">
                <Database className="w-4 h-4 mr-2" />
                Historical Data
                <Badge className="ml-2 bg-blue-900 text-blue-300">247</Badge>
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-[#3A3A3A]">
                <UserPlus className="w-4 h-4 mr-2" />
                New Talent
                <Badge className="ml-2 bg-green-900 text-green-300">1,432</Badge>
              </TabsTrigger>
              <TabsTrigger value="bulk" className="data-[state=active]:bg-[#3A3A3A]">
                <Mail className="w-4 h-4 mr-2" />
                Bulk Email
                {selectedInfluencers.length > 0 && (
                  <Badge className="ml-2 bg-orange-900 text-orange-300">
                    {selectedInfluencers.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="historical" className="space-y-6">
              <InfluencerDatabaseTable
                type="historical"
                searchQuery={searchQuery}
                selectedMarket={selectedMarket}
                selectedCategory={selectedCategory}
                selectedInfluencers={selectedInfluencers}
                onSelectionChange={setSelectedInfluencers}
              />
            </TabsContent>

            <TabsContent value="new" className="space-y-6">
              <NewInfluencersList
                searchQuery={searchQuery}
                selectedMarket={selectedMarket}
                selectedCategory={selectedCategory}
                selectedInfluencers={selectedInfluencers}
                onSelectionChange={setSelectedInfluencers}
              />
            </TabsContent>

            <TabsContent value="bulk" className="space-y-6">
              <BulkEmailManager
                selectedInfluencers={selectedInfluencers}
                onClearSelection={() => setSelectedInfluencers([])}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDiscovery; 