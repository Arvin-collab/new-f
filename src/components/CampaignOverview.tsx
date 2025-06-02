import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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

  // Budget overview cards to merge into one row
  const budgetCards = [
    {
      title: "Total Annual Budget",
      value: "€12.5M",
      icon: TrendingUp,
      iconColor: "text-primary",
      progressLabel: "+15.7%",
    },
    {
      title: "YTD Spend",
      value: "€8.9M",
      icon: TrendingUp,
      iconColor: "text-primary",
      progress: 71.6,
    },
    {
      title: "Remaining Budget",
      value: "€3.6M",
      icon: TrendingDown,
      iconColor: "text-green-400",
      progressLabel: "+15.7%",
    },
  ];

  const cards: any[] = [...metrics, ...budgetCards];

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

      {/* Projected Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">47</p>
          <p className="text-xs text-gray-400">Posts Scheduled</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">€1.2M</p>
          <p className="text-xs text-gray-400">Projected Sales</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">89K</p>
          <p className="text-xs text-gray-400">Expected Conversions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">23%</p>
          <p className="text-xs text-gray-400">Available Capacity</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Campaign Overview & Performance</h2>
        
        {/* Metrics Cards */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isMetric = card.change !== undefined;
            const displayLabel = isMetric
              ? card.change
              : card.progress !== undefined
                ? `${card.progress}%`
                : card.progressLabel;
            const labelColor = isMetric
              ? card.trend === 'down'
                ? 'text-red-400'
                : 'text-green-400'
              : 'text-green-400';

            return (
              <div
                key={index}
                className="bg-[#2A2A2A] rounded-lg p-4 border border-gray-700 min-w-[180px] flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-6 h-6 ${card.iconColor || 'text-primary'}`} />
                  {displayLabel && (
                    <span className={`text-sm font-medium ${labelColor}`}>{displayLabel}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">{card.value}</p>
                  <p className="text-sm text-gray-400">{card.title}</p>
                  {card.subtitle && (
                    <p className="text-xs text-gray-500">{card.subtitle}</p>
                  )}
                </div>
                {card.progress !== undefined && (
                  <div className="mt-2">
                    <Progress value={card.progress} className="h-1.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
