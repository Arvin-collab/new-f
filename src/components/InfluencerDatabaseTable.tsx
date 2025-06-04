import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingUp, TrendingDown, Mail, Eye, Star, DollarSign } from "lucide-react";

interface InfluencerDatabaseTableProps {
  type: "historical" | "new";
  searchQuery: string;
  selectedMarket: string;
  selectedCategory: string;
  selectedInfluencers: string[];
  onSelectionChange: (selected: string[]) => void;
}

export const InfluencerDatabaseTable = ({
  type,
  searchQuery,
  selectedMarket,
  selectedCategory,
  selectedInfluencers,
  onSelectionChange
}: InfluencerDatabaseTableProps) => {

  const historicalInfluencers = [
    {
      id: "emma-foodie-hist",
      name: "Emma Foodie",
      handle: "@emmafoodie",
      email: "emma@management.com",
      avatar: "/placeholder.svg",
      category: "food",
      market: "uk",
      totalCampaigns: 8,
      totalConversions: 3247,
      averageConversions: 405,
      bestConversions: 892,
      averageCac: 11.24,
      totalSpend: 36450,
      averageViews: 145000,
      engagementRate: 4.2,
      followersCount: 89000,
      audienceAge: "25-34",
      audienceGender: "65% Female",
      location: "London, UK",
      lastCampaign: "3 weeks ago",
      performance: "excellent",
      conversionRate: 2.8,
      priority: "high"
    },
    {
      id: "nordic-chef-hist",
      name: "Nordic Chef",
      handle: "@nordicchef",
      email: "contact@nordichef.com",
      avatar: "/placeholder.svg",
      category: "food",
      market: "se",
      totalCampaigns: 12,
      totalConversions: 4892,
      averageConversions: 407,
      bestConversions: 1247,
      averageCac: 9.87,
      totalSpend: 48300,
      averageViews: 230000,
      engagementRate: 5.1,
      followersCount: 156000,
      audienceAge: "25-44",
      audienceGender: "58% Female",
      location: "Stockholm, Sweden",
      lastCampaign: "1 week ago",
      performance: "excellent",
      conversionRate: 3.2,
      priority: "high"
    },
    {
      id: "kitchen-stories-hist",
      name: "Kitchen Stories",
      handle: "@kitchenstories_uk",
      email: "partnerships@kitchenstories.com",
      avatar: "/placeholder.svg",
      category: "food",
      market: "uk",
      totalCampaigns: 6,
      totalConversions: 2134,
      averageConversions: 355,
      bestConversions: 567,
      averageCac: 13.45,
      totalSpend: 28700,
      averageViews: 189000,
      engagementRate: 3.8,
      followersCount: 134000,
      audienceAge: "28-45",
      audienceGender: "72% Female",
      location: "Manchester, UK",
      lastCampaign: "2 weeks ago",
      performance: "good",
      conversionRate: 1.9,
      priority: "medium"
    },
    {
      id: "french-cuisine-hist",
      name: "French Cuisine Master",
      handle: "@frenchcuisine",
      email: "chef@frenchmaster.fr",
      avatar: "/placeholder.svg",
      category: "food",
      market: "fr",
      totalCampaigns: 4,
      totalConversions: 892,
      averageConversions: 223,
      bestConversions: 334,
      averageCac: 18.95,
      totalSpend: 16900,
      averageViews: 87000,
      engagementRate: 2.4,
      followersCount: 67000,
      audienceAge: "30-50",
      audienceGender: "61% Female",
      location: "Paris, France",
      lastCampaign: "6 weeks ago",
      performance: "average",
      conversionRate: 1.3,
      priority: "low"
    },
    {
      id: "healthy-family-hist",
      name: "Healthy Family Meals",
      handle: "@healthyfamilymeals",
      email: "hello@healthyfamily.co.uk",
      avatar: "/placeholder.svg",
      category: "family",
      market: "uk",
      totalCampaigns: 9,
      totalConversions: 5234,
      averageConversions: 581,
      bestConversions: 1134,
      averageCac: 8.76,
      totalSpend: 45800,
      averageViews: 267000,
      engagementRate: 6.2,
      followersCount: 198000,
      audienceAge: "28-42",
      audienceGender: "78% Female",
      location: "Birmingham, UK",
      lastCampaign: "4 days ago",
      performance: "excellent",
      conversionRate: 4.1,
      priority: "high"
    }
  ];

  const filteredInfluencers = historicalInfluencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         influencer.handle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMarket = selectedMarket === "all" || influencer.market === selectedMarket;
    const matchesCategory = selectedCategory === "all" || influencer.category === selectedCategory;
    
    return matchesSearch && matchesMarket && matchesCategory;
  });

  const handleSelectInfluencer = (influencerId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedInfluencers, influencerId]);
    } else {
      onSelectionChange(selectedInfluencers.filter(id => id !== influencerId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = filteredInfluencers.map(inf => inf.id);
      onSelectionChange([...new Set([...selectedInfluencers, ...allIds])]);
    } else {
      const filteredIds = filteredInfluencers.map(inf => inf.id);
      onSelectionChange(selectedInfluencers.filter(id => !filteredIds.includes(id)));
    }
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "bg-green-900 text-green-300";
      case "good":
        return "bg-blue-900 text-blue-300";
      case "average":
        return "bg-yellow-900 text-yellow-300";
      default:
        return "bg-gray-900 text-gray-300";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-900 text-red-300";
      case "medium":
        return "bg-orange-900 text-orange-300";
      case "low":
        return "bg-gray-900 text-gray-300";
      default:
        return "bg-gray-900 text-gray-300";
    }
  };

  const isAllSelected = filteredInfluencers.length > 0 && 
    filteredInfluencers.every(inf => selectedInfluencers.includes(inf.id));

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-white">Historical Campaign Data</CardTitle>
            <p className="text-sm text-gray-400 mt-1">
              Influencers we've worked with before - showing conversion performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Export Historical Data
            </Button>
            {selectedInfluencers.length > 0 && (
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Mail className="w-4 h-4 mr-2" />
                Email Selected ({selectedInfluencers.filter(id => 
                  filteredInfluencers.some(inf => inf.id === id)
                ).length})
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-2">
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={handleSelectAll}
                      className="border-gray-600"
                    />
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Influencer</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Performance</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Campaigns</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Total Conversions</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Avg CAC</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Best Performance</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Audience</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Priority</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInfluencers.map((influencer) => (
                  <tr key={influencer.id} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                    <td className="py-4 px-2">
                      <Checkbox
                        checked={selectedInfluencers.includes(influencer.id)}
                        onCheckedChange={(checked) => handleSelectInfluencer(influencer.id, checked as boolean)}
                        className="border-gray-600"
                      />
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={influencer.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {influencer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-white">{influencer.name}</p>
                          <p className="text-xs text-gray-400">{influencer.handle}</p>
                          <p className="text-xs text-gray-500">{influencer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="space-y-1">
                        <Badge className={getPerformanceBadge(influencer.performance)}>
                          {influencer.performance}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Star className="w-3 h-3" />
                          {influencer.conversionRate}% conversion
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">{influencer.totalCampaigns}</span>
                        <p className="text-xs text-gray-400">campaigns</p>
                        <p className="text-xs text-gray-500">Last: {influencer.lastCampaign}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          {influencer.totalConversions.toLocaleString()}
                        </span>
                        <p className="text-xs text-gray-400">
                          Avg: {influencer.averageConversions}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-green-400">
                          <TrendingUp className="w-3 h-3" />
                          20+ sales capable
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          €{influencer.averageCac.toFixed(2)}
                        </span>
                        <p className="text-xs text-gray-400">
                          Total spend: €{influencer.totalSpend.toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-green-400">
                          {influencer.bestConversions} sales
                        </span>
                        <p className="text-xs text-gray-400">
                          {influencer.averageViews.toLocaleString()} avg views
                        </p>
                        <p className="text-xs text-gray-400">
                          {influencer.engagementRate}% engagement
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-xs">
                        <p className="text-white">{influencer.followersCount.toLocaleString()} followers</p>
                        <p className="text-gray-400">{influencer.audienceAge}</p>
                        <p className="text-gray-400">{influencer.audienceGender}</p>
                        <p className="text-gray-500">{influencer.location}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={getPriorityBadge(influencer.priority)}>
                        {influencer.priority}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Mail className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <DollarSign className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}; 