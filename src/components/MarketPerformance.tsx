import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export const MarketPerformance = () => {
  const [expandedMarket, setExpandedMarket] = useState<string | null>("Nordic");
  const [timeView, setTimeView] = useState("monthly");

  const marketData = [
    {
      market: "UK",
      totalBudget: "€4200K",
      spent: "€3150K",
      remaining: "€1050K",
      currentCAC: "€11.24",
      budgetUsed: 75,
      percentBooked: 82,
      subMarkets: []
    },
    {
      market: "France", 
      totalBudget: "€3100K",
      spent: "€2170K",
      remaining: "€930K",
      currentCAC: "€13.87",
      budgetUsed: 70,
      percentBooked: 67,
      subMarkets: []
    },
    {
      market: "Nordic",
      totalBudget: "€2800K",
      spent: "€1890K",
      remaining: "€910K",
      currentCAC: "€12.45",
      budgetUsed: 67.5,
      percentBooked: 74,
      isGroup: true,
      subMarkets: [
        { name: "Sweden", budget: "€1200K", spent: "€850K", remaining: "€350K", cac: "€11.90", budgetUsed: 71, booked: 78 },
        { name: "Norway", budget: "€900K", spent: "€620K", remaining: "€280K", cac: "€12.80", budgetUsed: 69, booked: 71 },
        { name: "Denmark", budget: "€700K", spent: "€420K", remaining: "€280K", cac: "€13.20", budgetUsed: 60, booked: 69 }
      ]
    }
  ];

  const getBudgetColor = (percentage: number) => {
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 60) return "bg-green-500";
    return "bg-gray-500";
  };

  const getCACColor = (cac: string) => {
    const value = parseFloat(cac.replace('€', ''));
    if (value < 12) return "text-green-400";
    if (value < 14) return "text-blue-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Market Performance Breakdown</h2>
        <div className="flex gap-2">
          <Select value={timeView} onValueChange={setTimeView}>
            <SelectTrigger className="w-32 bg-[#2A2A2A] border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2A2A2A] border-gray-700">
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="ytd">YTD</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="bg-[#2A2A2A] rounded-lg border border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Market</th>
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Total Budget</th>
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Spent</th>
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Remaining</th>
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Current CAC</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">% Budget Used</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">% Booked</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((market, index) => (
                <>
                  <tr 
                    key={index} 
                    className="border-b border-gray-700 hover:bg-[#3A3A3A] transition-colors cursor-pointer"
                    onClick={() => market.subMarkets.length > 0 && setExpandedMarket(expandedMarket === market.market ? null : market.market)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {market.subMarkets.length > 0 && (
                          expandedMarket === market.market ? 
                            <ChevronDown className="w-4 h-4 text-gray-400" /> :
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="text-sm font-medium text-white">{market.market}</span>
                        {market.isGroup && (
                          <Badge className="bg-primary text-primary-foreground text-xs">Group</Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-sm text-white">{market.totalBudget}</td>
                    <td className="py-4 px-4 text-right text-sm text-white">{market.spent}</td>
                    <td className="py-4 px-4 text-right text-sm text-white">{market.remaining}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`text-sm font-medium ${getCACColor(market.currentCAC)}`}>
                        {market.currentCAC}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-white">{market.budgetUsed}%</span>
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getBudgetColor(market.budgetUsed)}`}
                            style={{ width: `${market.budgetUsed}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-white">{market.percentBooked}%</span>
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${market.percentBooked}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Sub-markets */}
                  {expandedMarket === market.market && market.subMarkets.length > 0 && (
                    market.subMarkets.map((subMarket, subIndex) => (
                      <tr key={`${index}-${subIndex}`} className="bg-[#1A1A1A] border-b border-gray-800">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2 ml-6">
                            <span className="text-sm text-gray-300">{subMarket.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-gray-300">{subMarket.budget}</td>
                        <td className="py-3 px-4 text-right text-sm text-gray-300">{subMarket.spent}</td>
                        <td className="py-3 px-4 text-right text-sm text-gray-300">{subMarket.remaining}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`text-sm ${getCACColor(subMarket.cac)}`}>
                            {subMarket.cac}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-gray-300">{subMarket.budgetUsed}%</span>
                            <div className="w-12 bg-gray-700 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full ${getBudgetColor(subMarket.budgetUsed)}`}
                                style={{ width: `${subMarket.budgetUsed}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-gray-300">{subMarket.booked}%</span>
                            <div className="w-12 bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="h-1.5 rounded-full bg-primary"
                                style={{ width: `${subMarket.booked}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Performance Summary Cards */}
        <div className="p-6 border-t border-gray-700">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="text-sm text-gray-400 mb-1">Best Performing Market</h4>
              <p className="text-lg font-bold text-white">UK</p>
              <Badge className="bg-green-600 text-white text-xs">€11.24 CAC</Badge>
            </div>
            <div className="text-center">
              <h4 className="text-sm text-gray-400 mb-1">Best Performing Market</h4>
              <p className="text-lg font-bold text-white">UK</p>
              <Badge className="bg-green-600 text-white text-xs">€11.24 CAC</Badge>
            </div>
            <div className="text-center">
              <h4 className="text-sm text-gray-400 mb-1">Best Performing Market</h4>
              <p className="text-lg font-bold text-white">UK</p>
              <Badge className="bg-green-600 text-white text-xs">€11.24 CAC</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
