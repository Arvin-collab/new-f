import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target } from "lucide-react";

export const CampaignOverview = () => {
  const metrics = [
    {
      title: "Total Campaign Performance",
      value: "€2.4M",
      change: "+12.5%",
      trend: "up",
      subtitle: "This Quarter",
      icon: Target
    },
    {
      title: "Current Month Performance", 
      value: "€847K",
      change: "+8.2%",
      trend: "up",
      subtitle: "November 2024",
      icon: TrendingUp
    },
    {
      title: "YTD Performance",
      value: "€8.9M",
      change: "+15.7%",
      trend: "up", 
      subtitle: "vs. Last Year",
      icon: TrendingUp
    }
  ];

  const influencers = [
    {
      name: "Emma Foodie",
      handle: "@emmafoodie",
      conversions: 1247,
      trend: "up",
      cac: 11.24,
      cacVariance: -5.2,
      postsBooked: 3,
      postsTotal: 4,
      postsLive: 2,
      activations: 85,
      tier: "Top"
    },
    {
      name: "Nordic Chef", 
      handle: "@nordicchef",
      conversions: 892,
      trend: "down",
      cac: 13.87,
      cacVariance: 5.1,
      postsBooked: 2,
      postsTotal: 3,
      postsLive: 1,
      activations: 67,
      tier: "Average"
    },
    {
      name: "Kitchen Stories",
      handle: "@kitchenstories_uk",
      conversions: 2134,
      trend: "up",
      cac: 9.82,
      cacVariance: -12.4,
      postsBooked: 4,
      postsTotal: 4,
      postsLive: 3,
      activations: 94,
      tier: "Top"
    },
    {
      name: "French Cuisine",
      handle: "@frenchcuisine",
      conversions: 423,
      trend: "down",
      cac: 18.95,
      cacVariance: 23.1,
      postsBooked: 1,
      postsTotal: 2,
      postsLive: 0,
      activations: 34,
      tier: "Poor"
    }
  ];

  const getTierBadge = (tier: string) => {
    const styles = {
      Top: "bg-green-600 text-white",
      Average: "bg-blue-900 text-blue-300", 
      Poor: "bg-red-600 text-white"
    };
    return styles[tier as keyof typeof styles];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Campaign Overview & Performance</h2>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.title}</p>
                  <p className="text-xs text-gray-500">{metric.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Influencer Performance Table */}
        <div className="bg-[#2A2A2A] rounded-lg border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Influencer</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Conversions</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">CAC</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Posts Booked</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Posts Live</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Activations</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Tier</th>
                </tr>
              </thead>
              <tbody>
                {influencers.map((influencer, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#3A3A3A] transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">{influencer.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{influencer.name}</p>
                          <p className="text-xs text-gray-400">{influencer.handle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
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
                    <td className="py-4 px-4 text-center">
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
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-12 bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${(influencer.postsBooked / influencer.postsTotal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{influencer.postsBooked}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-12 bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${(influencer.postsLive / influencer.postsTotal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{influencer.postsLive}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-12 bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${influencer.activations}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{influencer.activations}%</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Badge className={`text-xs ${getTierBadge(influencer.tier)}`}>
                        {influencer.tier}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
