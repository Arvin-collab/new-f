import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Eye, Calendar } from "lucide-react";

export const InfluencerPerformanceMetrics = () => {
  const performanceData = {
    currentMetrics: {
      brand: "HelloFresh",
      cac: 12.45,
      cacChange: -8.2,
      conversions: 1247,
      conversionChange: 15.3,
      monthlySpend: 8750,
      igsViews: 127000,
      igsViewsChange: 12.1
    },
    marketProcess: {
      status: "confirmed",
      stage: "campaign-active",
      bookingRate: 85,
      notes: "Strong performance, trending upward"
    },
    monthlyPerformance: [
      { month: 'Jan', cac: 15.2, conversions: 892, spend: 7200 },
      { month: 'Feb', cac: 13.8, conversions: 1034, spend: 8100 },
      { month: 'Mar', cac: 12.1, conversions: 1156, spend: 8900 },
      { month: 'Apr', cac: 12.45, conversions: 1247, spend: 8750 }
    ]
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-900 text-green-300",
      inbound: "bg-blue-900 text-blue-300",
      pitched: "bg-yellow-900 text-yellow-300",
      "too-expensive": "bg-red-900 text-red-300",
      "no-interest": "bg-gray-900 text-gray-300"
    };
    return styles[status as keyof typeof styles] || "bg-gray-900 text-gray-300";
  };

  const getTrendIcon = (change: number) => {
    return change >= 0 ? (
      <TrendingUp className="w-4 h-4 text-green-400" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-400" />
    );
  };

  const getTrendColor = (change: number) => {
    return change >= 0 ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Performance Metrics</h2>
        
        {/* Current Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <div className="flex items-center gap-1">
                  {getTrendIcon(performanceData.currentMetrics.cacChange)}
                  <span className={`text-sm ${getTrendColor(performanceData.currentMetrics.cacChange)}`}>
                    {performanceData.currentMetrics.cacChange > 0 ? '+' : ''}{performanceData.currentMetrics.cacChange}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">€{performanceData.currentMetrics.cac}</p>
                <p className="text-sm text-gray-400">Current CAC</p>
                <p className="text-xs text-gray-500">Brand: {performanceData.currentMetrics.brand}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-green-400" />
                <div className="flex items-center gap-1">
                  {getTrendIcon(performanceData.currentMetrics.conversionChange)}
                  <span className={`text-sm ${getTrendColor(performanceData.currentMetrics.conversionChange)}`}>
                    +{performanceData.currentMetrics.conversionChange}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{performanceData.currentMetrics.conversions.toLocaleString()}</p>
                <p className="text-sm text-gray-400">Conversions</p>
                <p className="text-xs text-gray-500">This Month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">€{performanceData.currentMetrics.monthlySpend.toLocaleString()}</p>
                <p className="text-sm text-gray-400">Monthly Spend</p>
                <p className="text-xs text-gray-500">Current Period</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Eye className="w-5 h-5 text-pink-400" />
                <div className="flex items-center gap-1">
                  {getTrendIcon(performanceData.currentMetrics.igsViewsChange)}
                  <span className={`text-sm ${getTrendColor(performanceData.currentMetrics.igsViewsChange)}`}>
                    +{performanceData.currentMetrics.igsViewsChange}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{(performanceData.currentMetrics.igsViews / 1000).toFixed(0)}K</p>
                <p className="text-sm text-gray-400">IGS Views</p>
                <p className="text-xs text-gray-500">Imported Data</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Process Status */}
        <Card className="bg-[#1A1A1A] border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Market Process Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Current Status:</p>
                <Badge className={getStatusBadge(performanceData.marketProcess.status)}>
                  {performanceData.marketProcess.status}
                </Badge>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Booking Rate:</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{performanceData.marketProcess.bookingRate}%</span>
                  </div>
                  <Progress value={performanceData.marketProcess.bookingRate} className="h-2" />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Process Notes:</p>
                <p className="text-sm text-gray-300">{performanceData.marketProcess.notes}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <Select defaultValue="inbound">
                <SelectTrigger className="w-48 bg-[#2A2A2A] border-gray-700">
                  <SelectValue placeholder="Update Status" />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="inbound">Inbound</SelectItem>
                  <SelectItem value="pitched">Pitched</SelectItem>
                  <SelectItem value="too-expensive">Too Expensive</SelectItem>
                  <SelectItem value="no-interest">No Interest</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm">Update Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">CAC Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={performanceData.monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      color: '#F3F4F6'
                    }} 
                  />
                  <Line type="monotone" dataKey="cac" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Conversions Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={performanceData.monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      color: '#F3F4F6'
                    }} 
                  />
                  <Bar dataKey="conversions" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">IGS Views & Talent Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1">Instagram Stories</p>
                <p className="text-xl font-bold text-white">127K</p>
                <p className="text-xs text-gray-500">Views</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1">Reels</p>
                <p className="text-xl font-bold text-white">89K</p>
                <p className="text-xs text-gray-500">Views</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1">YouTube</p>
                <p className="text-xl font-bold text-white">45K</p>
                <p className="text-xs text-gray-500">Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 