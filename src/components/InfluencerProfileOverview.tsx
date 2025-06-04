import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, MapPin, Calendar, TrendingUp, Eye } from "lucide-react";

export const InfluencerProfileOverview = () => {
  const influencerData = {
    name: "Emma Foodie",
    handle: "@emmafoodie",
    email: "emma@foodieinfluence.com",
    managerEmail: "manager@agency.com",
    avatar: "/placeholder.svg",
    demographics: {
      age: "25-34",
      gender: "Female",
      location: "London, UK"
    },
    vertical: "Food & Lifestyle",
    status: "confirmed",
    previousWork: true,
    brands: ["HelloFresh", "Blue Apron", "Gousto"],
    audience: {
      size: "127K",
      engagement: "4.2%",
      avgViews: "45K"
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-900 text-green-300",
      negotiating: "bg-yellow-900 text-yellow-300",
      "poor performance": "bg-red-900 text-red-300"
    };
    return styles[status as keyof typeof styles] || "bg-gray-900 text-gray-300";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Influencer Profile Overview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information Card */}
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={influencerData.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {influencerData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-white">{influencerData.name}</h3>
                  <p className="text-gray-400">{influencerData.handle}</p>
                  <Badge className={`mt-1 ${getStatusBadge(influencerData.status)}`}>
                    {influencerData.status}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{influencerData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{influencerData.demographics.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Age: {influencerData.demographics.age}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{influencerData.demographics.gender}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Vertical:</p>
                <Badge className="bg-blue-900 text-blue-300">{influencerData.vertical}</Badge>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Manager Contact:</p>
                <p className="text-sm text-gray-300">{influencerData.managerEmail}</p>
              </div>
            </CardContent>
          </Card>

          {/* Performance Summary Card */}
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Audience & Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">{influencerData.audience.size}</p>
                  <p className="text-xs text-gray-400">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{influencerData.audience.engagement}</p>
                  <p className="text-xs text-gray-400">Engagement Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{influencerData.audience.avgViews}</p>
                  <p className="text-xs text-gray-400">Avg Views</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Previous Brand Collaborations:</p>
                <div className="flex flex-wrap gap-2">
                  {influencerData.brands.map((brand, index) => (
                    <Badge key={index} className="bg-gray-800 text-gray-300">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Previous Work Status:</span>
                  <Badge className={influencerData.previousWork ? "bg-green-900 text-green-300" : "bg-gray-900 text-gray-300"}>
                    {influencerData.previousWork ? "Yes" : "No"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Condition Status Card */}
        <Card className="bg-[#1A1A1A] border-gray-800 mt-6">
          <CardHeader>
            <CardTitle className="text-white">Current Status & Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">IF CONFIRMED</h4>
                <p className="text-sm text-gray-300 mb-2">This can be a current up to date campaign overview.</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-700 hover:bg-green-600">
                    View Campaign Overview
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">IF NOT CONFIRMED</h4>
                <p className="text-sm text-gray-300 mb-2">Where are they in the process - negotiating etc?</p>
                <Select defaultValue="negotiating">
                  <SelectTrigger className="w-full bg-[#2A2A2A] border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A2A2A] border-gray-700">
                    <SelectItem value="inbound">Inbound</SelectItem>
                    <SelectItem value="pitched">Pitched</SelectItem>
                    <SelectItem value="negotiating">Negotiating</SelectItem>
                    <SelectItem value="too-expensive">Too Expensive</SelectItem>
                    <SelectItem value="no-interest">No Interest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 