import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import { GlobalHeader } from "@/components/GlobalHeader";
import { CampaignOverview } from "@/components/CampaignOverview";
import { BudgetOverview } from "@/components/BudgetOverview";
import { InfluencerTable } from "@/components/InfluencerTable";

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState("brand-influence");
  const [selectedMarkets, setSelectedMarkets] = useState("all");
  const [dateRange, setDateRange] = useState("month");

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Global Header */}
      <GlobalHeader />
      
      {/* Main Dashboard Content */}
      <div className="p-6 space-y-6">
        {/* Global Filters Bar */}
        <div className="bg-[#1A1A1A] rounded-xl p-4 border border-gray-800">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Brand:</span>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40 bg-[#2A2A2A] border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="brand-influence">Brand Influence Int.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Markets:</span>
              <Select value={selectedMarkets} onValueChange={setSelectedMarkets}>
                <SelectTrigger className="w-48 bg-[#2A2A2A] border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="all">All Markets</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="nordic">Nordic Group</SelectItem>
                  <SelectItem value="se">Sweden</SelectItem>
                  <SelectItem value="no">Norway</SelectItem>
                  <SelectItem value="dk">Denmark</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Period:</span>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32 bg-[#2A2A2A] border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="ytd">YTD</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 gap-6">
          {/* Campaign Overview */}
          <div>
            <CampaignOverview />
          </div>
          
          {/* Budget Overview */}
          <div>
            <BudgetOverview />
          </div>
          
          {/* Influencer Table */}
          <div>
            <InfluencerTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
