import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Mail, Eye, Instagram, Youtube, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

interface NewInfluencersListProps {
  searchQuery: string;
  selectedMarket: string;
  selectedCategory: string;
  selectedInfluencers: string[];
  onSelectionChange: (selected: string[]) => void;
}

export const NewInfluencersList = ({
  searchQuery,
  selectedMarket,
  selectedCategory,
  selectedInfluencers,
  onSelectionChange
}: NewInfluencersListProps) => {

  const [baseCpm, setBaseCpm] = useState(15.0);

  const newInfluencers = [
    {
      id: "sustainable-chef-new",
      name: "Sustainable Chef",
      handle: "@sustainablechef",
      email: "contact@sustainablechef.com",
      managerEmail: null,
      avatar: "/placeholder.svg",
      category: "food",
      market: "uk",
      platform: "Instagram",
      followersCount: 125000,
      averageViews: 45000,
      averageLikes: 3200,
      averageComments: 180,
      engagementRate: 2.7,
      audienceAge: "25-35",
      audienceGender: "68% Female",
      location: "London, UK",
      verified: true,
      dataSource: "Instagram API",
      lastUpdated: "2 days ago",
      estimatedReach: 87500,
      calculatedCpm: 0,
      suggestedRate: 0,
      status: "new"
    },
    {
      id: "plant-based-recipes-new",
      name: "Plant Based Recipes",
      handle: "@plantbasedrecipes",
      email: "hello@plantrecipes.co.uk",
      managerEmail: "mgmt@talentco.com",
      avatar: "/placeholder.svg",
      category: "health",
      market: "uk",
      platform: "TikTok",
      followersCount: 89000,
      averageViews: 167000,
      averageLikes: 12400,
      averageComments: 340,
      engagementRate: 7.6,
      audienceAge: "18-28",
      audienceGender: "74% Female",
      location: "Manchester, UK",
      verified: true,
      dataSource: "TikTok Analytics",
      lastUpdated: "1 day ago",
      estimatedReach: 125000,
      calculatedCpm: 0,
      suggestedRate: 0,
      status: "new"
    },
    {
      id: "family-kitchen-new",
      name: "The Family Kitchen",
      handle: "@thefamilykitchen",
      email: "partnerships@familykitchen.se",
      managerEmail: null,
      avatar: "/placeholder.svg",
      category: "family",
      market: "se",
      platform: "YouTube",
      followersCount: 78000,
      averageViews: 34000,
      averageLikes: 1890,
      averageComments: 120,
      engagementRate: 5.9,
      audienceAge: "28-40",
      audienceGender: "81% Female",
      location: "Stockholm, Sweden",
      verified: false,
      dataSource: "Manual Entry",
      lastUpdated: "5 days ago",
      estimatedReach: 56000,
      calculatedCpm: 0,
      suggestedRate: 0,
      status: "pending_verification"
    },
    {
      id: "quick-meals-fr-new",
      name: "Quick Meals France",
      handle: "@quickmealsfr",
      email: "collab@quickmeals.fr",
      managerEmail: "mgmt@frenchtalent.fr",
      avatar: "/placeholder.svg",
      category: "food",
      market: "fr",
      platform: "Instagram",
      followersCount: 156000,
      averageViews: 52000,
      averageLikes: 4200,
      averageComments: 210,
      engagementRate: 2.8,
      audienceAge: "22-32",
      audienceGender: "71% Female",
      location: "Lyon, France",
      verified: true,
      dataSource: "Instagram API",
      lastUpdated: "3 hours ago",
      estimatedReach: 109000,
      calculatedCpm: 0,
      suggestedRate: 0,
      status: "new"
    },
    {
      id: "healthy-living-dk-new",
      name: "Healthy Living DK",
      handle: "@healthylivingdk",
      email: "hello@healthyliving.dk",
      managerEmail: null,
      avatar: "/placeholder.svg",
      category: "health",
      market: "dk",
      platform: "Instagram",
      followersCount: 67000,
      averageViews: 28000,
      averageLikes: 2100,
      averageComments: 95,
      engagementRate: 3.3,
      audienceAge: "25-45",
      audienceGender: "76% Female",
      location: "Copenhagen, Denmark",
      verified: true,
      dataSource: "Instagram API",
      lastUpdated: "1 day ago",
      estimatedReach: 47000,
      calculatedCpm: 0,
      suggestedRate: 0,
      status: "new"
    }
  ];

  // Calculate CPM-based rates
  const influencersWithRates = newInfluencers.map(influencer => {
    const calculatedCpm = baseCpm;
    const suggestedRate = Math.round((influencer.estimatedReach / 1000) * calculatedCpm);
    return {
      ...influencer,
      calculatedCpm,
      suggestedRate
    };
  });

  const filteredInfluencers = influencersWithRates.filter(influencer => {
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

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      case "YouTube":
        return <Youtube className="w-4 h-4" />;
      case "TikTok":
        return <span className="text-sm">🎵</span>;
      default:
        return <span className="text-sm">📱</span>;
    }
  };

  const getStatusBadge = (status: string, verified: boolean) => {
    if (!verified) {
      return "bg-yellow-900 text-yellow-300";
    }
    switch (status) {
      case "new":
        return "bg-green-900 text-green-300";
      case "pending_verification":
        return "bg-orange-900 text-orange-300";
      default:
        return "bg-gray-900 text-gray-300";
    }
  };

  const getVerificationIcon = (verified: boolean) => {
    return verified ? (
      <CheckCircle className="w-3 h-3 text-green-400" />
    ) : (
      <AlertCircle className="w-3 h-3 text-yellow-400" />
    );
  };

  const isAllSelected = filteredInfluencers.length > 0 && 
    filteredInfluencers.every(inf => selectedInfluencers.includes(inf.id));

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-white">New Talent Database</CardTitle>
            <p className="text-sm text-gray-400 mt-1">
              New influencers with basic information for rate calculation based on CPM
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2 text-sm">
              <Calculator className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">Base CPM:</span>
              <Input
                type="number"
                value={baseCpm}
                onChange={(e) => setBaseCpm(parseFloat(e.target.value) || 15.0)}
                className="w-20 h-8 bg-[#2A2A2A] border-gray-700 text-center"
                step="0.5"
                min="5"
                max="50"
              />
              <span className="text-gray-400">€</span>
            </div>
            <Button size="sm" variant="outline">
              Export New Talent
            </Button>
            {selectedInfluencers.length > 0 && (
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Mail className="w-4 h-4 mr-2" />
                Send Offers ({selectedInfluencers.filter(id => 
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
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Platform</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Followers</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Avg Views</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Engagement</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Audience</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Estimated Rate</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Contact</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Status</th>
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
                          <p className="text-xs text-gray-500">{influencer.location}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(influencer.platform)}
                        <span className="text-sm text-white">{influencer.platform}</span>
                        {getVerificationIcon(influencer.verified)}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {influencer.dataSource}
                      </p>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          {influencer.followersCount.toLocaleString()}
                        </span>
                        <p className="text-xs text-gray-400">followers</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          {influencer.averageViews.toLocaleString()}
                        </span>
                        <p className="text-xs text-gray-400">
                          {influencer.averageLikes.toLocaleString()} likes
                        </p>
                        <p className="text-xs text-gray-400">
                          {influencer.averageComments} comments
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-green-400">
                          {influencer.engagementRate}%
                        </span>
                        <p className="text-xs text-gray-400">
                          Reach: {influencer.estimatedReach.toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-xs">
                        <p className="text-gray-400">{influencer.audienceAge}</p>
                        <p className="text-gray-400">{influencer.audienceGender}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-primary">
                          €{influencer.suggestedRate}
                        </span>
                        <p className="text-xs text-gray-400">
                          €{influencer.calculatedCpm} CPM
                        </p>
                        <p className="text-xs text-gray-500">
                          {(influencer.estimatedReach / 1000).toFixed(1)}K reach
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-xs">
                        <p className="text-white">{influencer.email}</p>
                        {influencer.managerEmail && (
                          <p className="text-gray-400">Mgmt: {influencer.managerEmail}</p>
                        )}
                        <p className="text-gray-500">Updated: {influencer.lastUpdated}</p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={getStatusBadge(influencer.status, influencer.verified)}>
                        {influencer.verified ? "Verified" : "Pending"}
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
                          <Calculator className="w-3 h-3" />
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