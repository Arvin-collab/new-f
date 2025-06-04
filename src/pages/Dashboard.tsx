import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { GlobalHeader } from "@/components/GlobalHeader";
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Search, 
  Mail,
  ArrowRight,
  Database,
  UserPlus,
  Star
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: "campaigns",
      title: "Campaigns Management",
      description: "View and manage all influencer campaigns, track performance metrics, and monitor ongoing collaborations.",
      icon: Target,
      path: "/campaigns",
      color: "bg-blue-500",
      features: [
        "Influencer Performance Dashboard",
        "Campaign Tracking & Analytics", 
        "ROI & Conversion Metrics",
        "Performance Comparison Tools"
      ],
      stats: {
        total: "247",
        label: "Active Influencers",
        metric: "€2.1M Total Spend"
      }
    },
    {
      id: "influencers", 
      title: "Influencer Profiles",
      description: "Detailed individual influencer profiles with comprehensive performance history and campaign analytics.",
      icon: Users,
      path: "/influencers",
      color: "bg-green-500",
      features: [
        "Individual Performance Metrics",
        "Historical Campaign Data",
        "Audience Demographics",
        "Booking & Rate Management"
      ],
      stats: {
        total: "1,679",
        label: "Total Profiles",
        metric: "4.2% Avg Conversion"
      }
    },
    {
      id: "analytics",
      title: "Analytics & Discovery", 
      description: "Discover new talent, manage influencer databases, and execute bulk outreach campaigns efficiently.",
      icon: BarChart3,
      path: "/analytics",
      color: "bg-purple-500",
      features: [
        "Talent Discovery Engine",
        "Database Management",
        "Bulk Email Campaigns",
        "Rate Calculation Tools"
      ],
      stats: {
        total: "1,432",
        label: "New Prospects",
        metric: "15€ Avg CPM"
      }
    }
  ];

  const recentActivity = [
    {
      type: "campaign",
      title: "Emma Foodie campaign completed",
      description: "892 conversions, €11.24 CAC",
      time: "2 hours ago",
      status: "success"
    },
    {
      type: "discovery",
      title: "5 new influencers added to UK database",
      description: "Health & Wellness category",
      time: "4 hours ago", 
      status: "new"
    },
    {
      type: "email",
      title: "Bulk email campaign sent",
      description: "23 influencers contacted for Winter campaign",
      time: "1 day ago",
      status: "pending"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-green-900 text-green-300";
      case "new": return "bg-blue-900 text-blue-300";
      case "pending": return "bg-orange-900 text-orange-300";
      default: return "bg-gray-900 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <GlobalHeader />
      
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Brand Influence Dashboard</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive influencer marketing platform for campaign management, talent discovery, and performance analytics
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">€2.1M</p>
              <p className="text-sm text-gray-400">Total Campaign Spend</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">1,926</p>
              <p className="text-sm text-gray-400">Total Influencers</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">4.2%</p>
              <p className="text-sm text-gray-400">Avg Conversion Rate</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">247</p>
              <p className="text-sm text-gray-400">Active Campaigns</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.id} className="bg-[#1A1A1A] border-gray-800 hover:border-gray-700 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{module.title}</CardTitle>
                      <Badge className="bg-gray-800 text-gray-300 mt-1">
                        {module.stats.total} {module.stats.label}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm">{module.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Key Features:</p>
                    <ul className="space-y-1">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-3">{module.stats.metric}</p>
                    <Button 
                      className="w-full" 
                      onClick={() => navigate(module.path)}
                    >
                      Open {module.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Recent Activity</CardTitle>
            <p className="text-sm text-gray-400">Latest updates across all modules</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-[#2A2A2A] rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'campaign' ? 'bg-blue-400' :
                    activity.type === 'discovery' ? 'bg-green-400' : 'bg-purple-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{activity.title}</p>
                    <p className="text-xs text-gray-400">{activity.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard; 