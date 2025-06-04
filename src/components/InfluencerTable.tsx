import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InfluencerTable = () => {
  const navigate = useNavigate();

  const influencers = [
    {
      id: "emma-foodie",
      name: "Emma Foodie",
      handle: "@emmafoodie",
      avatar: "/placeholder.svg",
      channel: "Instagram",
      posted: "live",
      conversions: 1247,
      trend: "up",
      cac: 11.24,
      cacVariance: -8.2,
      postsBooked: 3,
      postsTotal: 4,
      postsLive: 2,
      activations: 85,
      reactivations: 32,
      tier: "Top"
    },
    {
      id: "nordic-chef",
      name: "Nordic Chef", 
      handle: "@nordicchef",
      avatar: "/placeholder.svg",
      channel: "TikTok",
      posted: "pending",
      conversions: 892,
      trend: "up",
      cac: 13.87,
      cacVariance: 5.1,
      postsBooked: 2,
      postsTotal: 3,
      postsLive: 1,
      activations: 67,
      reactivations: 28,
      tier: "Average"
    },
    {
      id: "kitchen-stories",
      name: "Kitchen Stories",
      handle: "@kitchenstories_uk",
      avatar: "/placeholder.svg", 
      channel: "YouTube",
      posted: "live",
      conversions: 2134,
      trend: "up",
      cac: 9.82,
      cacVariance: -12.4,
      postsBooked: 4,
      postsTotal: 4,
      postsLive: 3,
      activations: 94,
      reactivations: 45,
      tier: "Top"
    },
    {
      id: "french-cuisine",
      name: "French Cuisine",
      handle: "@frenchcuisine",
      avatar: "/placeholder.svg",
      channel: "Instagram", 
      posted: "delayed",
      conversions: 423,
      trend: "down",
      cac: 18.95,
      cacVariance: 23.1,
      postsBooked: 1,
      postsTotal: 2,
      postsLive: 0,
      activations: 34,
      reactivations: 12,
      tier: "Poor"
    },
    {
      id: "healthy-eats",
      name: "Healthy Eats",
      handle: "@healthyeats_de",
      avatar: "/placeholder.svg",
      channel: "Instagram",
      posted: "live",
      conversions: 1567,
      trend: "up",
      cac: 10.45,
      cacVariance: -5.8,
      postsBooked: 2,
      postsTotal: 3,
      postsLive: 2,
      activations: 78,
      reactivations: 25,
      tier: "Top"
    },
    {
      id: "vegan-chef-co",
      name: "Vegan Chef Co",
      handle: "@veganchefco",
      avatar: "/placeholder.svg",
      channel: "TikTok",
      posted: "pending",
      conversions: 756,
      trend: "up",
      cac: 14.32,
      cacVariance: 2.8,
      postsBooked: 1,
      postsTotal: 2,
      postsLive: 1,
      activations: 72,
      reactivations: 18,
      tier: "Average"
    }
  ];

  const getChannelIcon = (channel: string) => {
    const icons = {
      Instagram: "📷",
      TikTok: "🎵", 
      YouTube: "📺",
      Snapchat: "👻"
    };
    return icons[channel as keyof typeof icons] || "📱";
  };

  const getTierBadge = (tier: string) => {
    const styles = {
      Top: "bg-green-900 text-green-300",
      Average: "bg-blue-900 text-blue-300", 
      Poor: "bg-red-900 text-red-300"
    };
    return styles[tier as keyof typeof styles];
  };

  const handleViewProfile = (influencerId: string) => {
    navigate(`/influencers/${influencerId}`);
  };

  return (
    <Card className="bg-[#1A1A1A] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Influencer Performance</CardTitle>
          <div className="flex gap-2">
            <Select defaultValue="recent">
              <SelectTrigger className="w-40 bg-[#2A2A2A] border-gray-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2A2A2A] border-gray-700">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="top">Top Performers</SelectItem>
                <SelectItem value="poor">Poor Performers</SelectItem>
                <SelectItem value="pending">Pending Posts</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              Export Data
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Influencer</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Channel</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Conversions</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">CAC</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Posts Booked</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Posts Live</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Activations</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Tier</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {influencers.map((influencer, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={influencer.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {influencer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-white">{influencer.name}</p>
                          <p className="text-xs text-gray-400">{influencer.handle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getChannelIcon(influencer.channel)}</span>
                        <span className="text-sm text-white">{influencer.channel}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={`text-xs ${
                        influencer.posted === 'live' ? 'bg-green-900 text-green-300' :
                        influencer.posted === 'pending' ? 'bg-blue-900 text-blue-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {influencer.posted === 'live' ? '✅ Live' :
                         influencer.posted === 'pending' ? '⏳ Pending' : '❌ Delayed'}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {influencer.conversions.toLocaleString()}
                        </span>
                        {influencer.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div>
                        <span className="text-sm font-medium text-white">
                          €{influencer.cac.toFixed(2)}
                        </span>
                        <p className={`text-xs ${
                          influencer.cacVariance < 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {influencer.cacVariance > 0 ? '+' : ''}{influencer.cacVariance}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-20">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{influencer.postsBooked}</span>
                          <span>{influencer.postsTotal}</span>
                        </div>
                        <Progress 
                          value={(influencer.postsBooked / influencer.postsTotal) * 100} 
                          className="h-2"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-20">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{influencer.postsLive}</span>
                          <span>{influencer.postsTotal}</span>
                        </div>
                        <Progress 
                          value={(influencer.postsLive / influencer.postsTotal) * 100} 
                          className="h-2"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="w-16">
                        <span className="text-sm text-white">{influencer.activations}%</span>
                        <Progress value={influencer.activations} className="h-2 mt-1" />
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <Badge className={getTierBadge(influencer.tier)}>
                        {influencer.tier}
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleViewProfile(influencer.id)}
                      >
                        View Profile
                      </Button>
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
