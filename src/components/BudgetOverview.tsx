import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export const BudgetOverview = () => {
  const budgetCards = [
    {
      title: "Total Annual Budget",
      value: "€12.5M",
      subtitle: "2024 Allocation",
      icon: TrendingUp,
      iconColor: "text-primary"
    },
    {
      title: "YTD Spend",
      value: "€8.9M",
      subtitle: "71.6% of budget",
      progress: 71.6,
      icon: TrendingUp,
      iconColor: "text-primary"
    },
    {
      title: "Remaining Budget",
      value: "€3.6M",
      subtitle: "Available for Q4",
      icon: TrendingDown,
      iconColor: "text-green-400"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Budget Overview & Management</h2>
        
        {/* Budget Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {budgetCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-[#2A2A2A] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  <span className="text-sm font-medium text-green-400">
                    {card.progress ? `${card.progress}%` : '+15.7%'}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-white">{card.value}</p>
                  <p className="text-sm text-gray-400">{card.title}</p>
                  <p className="text-xs text-gray-500">{card.subtitle}</p>
                </div>
                {card.progress && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
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
