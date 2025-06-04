import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Calendar, TrendingUp, TrendingDown, Plus, History, BarChart3 } from "lucide-react";

export const InfluencerHistoricalData = () => {
  const historicalData = {
    performanceTrend: "positive",
    trendReason: "Views increasing, rate optimization successful",
    nextBooking: "2024-02-15",
    preventAction: "Continue current strategy",
    bookingHistory: [
      {
        date: "2024-01-15",
        rate: 2500,
        campaign: "January Food Launch",
        views: 127000,
        cac: 12.45,
        conversions: 1247,
        ctr: 3.2,
        postDate: "2024-01-18"
      },
      {
        date: "2023-12-10",
        rate: 2800,
        campaign: "Holiday Special",
        views: 98000,
        cac: 15.20,
        conversions: 892,
        ctr: 2.8,
        postDate: "2023-12-13"
      },
      {
        date: "2023-11-05",
        rate: 2200,
        campaign: "Autumn Collection",
        views: 145000,
        cac: 11.80,
        conversions: 1456,
        ctr: 3.8,
        postDate: "2023-11-08"
      }
    ],
    averageMetrics: {
      avgViews: 123333,
      avgCAC: 13.15,
      avgConversions: 1198,
      avgCTR: 3.27
    }
  };

  const getTrendBadge = (trend: string) => {
    if (trend === "positive") {
      return "bg-green-900 text-green-300";
    } else if (trend === "negative") {
      return "bg-red-900 text-red-300";
    }
    return "bg-gray-900 text-gray-300";
  };

  const getTrendIcon = (trend: string) => {
    return trend === "positive" ? (
      <TrendingUp className="w-4 h-4 text-green-400" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-400" />
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Historical Campaign Data</h2>
        
        {/* Performance Trend Analysis */}
        <Card className="bg-[#1A1A1A] border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Trend Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getTrendIcon(historicalData.performanceTrend)}
                  <p className="text-sm text-gray-400">Current Trend:</p>
                  <Badge className={getTrendBadge(historicalData.performanceTrend)}>
                    {historicalData.performanceTrend}
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 mb-4">{historicalData.trendReason}</p>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Next Booking Date:</p>
                  <p className="text-white font-medium">{historicalData.nextBooking}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Action to Prevent Further Decrease:</p>
                <p className="text-sm text-gray-300 mb-4">{historicalData.preventAction}</p>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Schedule Review
                  </Button>
                  <Button size="sm">
                    Update Strategy
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Performance Metrics */}
        <Card className="bg-[#1A1A1A] border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Average Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{(historicalData.averageMetrics.avgViews / 1000).toFixed(0)}K</p>
                <p className="text-sm text-gray-400">Avg IGS Views</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">€{historicalData.averageMetrics.avgCAC.toFixed(2)}</p>
                <p className="text-sm text-gray-400">Avg CAC</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{historicalData.averageMetrics.avgConversions.toLocaleString()}</p>
                <p className="text-sm text-gray-400">Avg Conversions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{historicalData.averageMetrics.avgCTR.toFixed(1)}%</p>
                <p className="text-sm text-gray-400">Avg CTR</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking History */}
        <Card className="bg-[#1A1A1A] border-gray-800 mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <History className="w-5 h-5" />
                Booking History
              </CardTitle>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Booking
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Booking Date</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Rate (€)</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Campaign</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Views</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">CAC</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Conversions</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">CTR</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Posted</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.bookingHistory.map((booking, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-white">{booking.date}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-white">€{booking.rate.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-gray-300">{booking.campaign}</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-white">{(booking.views / 1000).toFixed(0)}K</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-white">€{booking.cac}</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-white">{booking.conversions.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-white">{booking.ctr}%</span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-gray-300">{booking.postDate}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Multiple Options & Content Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Multiple Booking Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cac-option" className="text-sm text-gray-400">CAC Option</Label>
                <Input
                  id="cac-option"
                  placeholder="€12.45"
                  className="bg-[#2A2A2A] border-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="conversion-option" className="text-sm text-gray-400">Conversions Option</Label>
                <Input
                  id="conversion-option"
                  placeholder="1,200"
                  className="bg-[#2A2A2A] border-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="ctr-option" className="text-sm text-gray-400">CTR Option</Label>
                <Input
                  id="ctr-option"
                  placeholder="3.2%"
                  className="bg-[#2A2A2A] border-gray-700 text-white"
                />
              </div>
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Option
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Content Posting Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="week-day" className="text-sm text-gray-400">Day of the Week</Label>
                <Select>
                  <SelectTrigger className="bg-[#2A2A2A] border-gray-700">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                    <SelectItem value="sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="post-date" className="text-sm text-gray-400">Content Posted Date</Label>
                <Input
                  id="post-date"
                  type="date"
                  className="bg-[#2A2A2A] border-gray-700 text-white"
                />
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400 mb-2">Saved Content Available:</p>
                <Badge className="bg-blue-900 text-blue-300">3 items in drive</Badge>
              </div>
              <Button className="w-full" variant="outline">
                View Saved Content
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}; 