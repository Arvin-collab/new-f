import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, Users, FileText, Calendar, DollarSign, Eye, Trash2, Copy } from "lucide-react";

interface BulkEmailManagerProps {
  selectedInfluencers: string[];
  onClearSelection: () => void;
}

export const BulkEmailManager = ({
  selectedInfluencers,
  onClearSelection
}: BulkEmailManagerProps) => {

  const [emailTemplate, setEmailTemplate] = useState("collaboration_offer");
  const [campaignName, setCampaignName] = useState("HelloFresh Winter Campaign 2024");
  const [baseRate, setBaseRate] = useState(800);
  const [deliverables, setDeliverables] = useState("1 Instagram post + 3 stories");
  const [timeline, setTimeline] = useState("2 weeks from confirmation");
  const [customMessage, setCustomMessage] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  // Mock data for selected influencers
  const mockInfluencers = [
    {
      id: "emma-foodie-hist",
      name: "Emma Foodie",
      handle: "@emmafoodie",
      email: "emma@management.com",
      avatar: "/placeholder.svg",
      category: "food",
      market: "uk",
      estimatedRate: 750,
      reach: 87500,
      type: "historical"
    },
    {
      id: "sustainable-chef-new",
      name: "Sustainable Chef", 
      handle: "@sustainablechef",
      email: "contact@sustainablechef.com",
      avatar: "/placeholder.svg",
      category: "food",
      market: "uk",
      estimatedRate: 1312,
      reach: 87500,
      type: "new"
    },
    {
      id: "plant-based-recipes-new",
      name: "Plant Based Recipes",
      handle: "@plantbasedrecipes",
      email: "hello@plantrecipes.co.uk",
      avatar: "/placeholder.svg",
      category: "health",
      market: "uk",
      estimatedRate: 1875,
      reach: 125000,
      type: "new"
    }
  ];

  const selectedInfluencerData = mockInfluencers.filter(inf => 
    selectedInfluencers.includes(inf.id)
  );

  const groupedByMarket = selectedInfluencerData.reduce((acc, inf) => {
    if (!acc[inf.market]) acc[inf.market] = [];
    acc[inf.market].push(inf);
    return acc;
  }, {} as Record<string, typeof selectedInfluencerData>);

  const totalEstimatedCost = selectedInfluencerData.reduce((sum, inf) => sum + inf.estimatedRate, 0);
  const totalReach = selectedInfluencerData.reduce((sum, inf) => sum + inf.reach, 0);

  const emailTemplates = {
    collaboration_offer: {
      subject: "Partnership Opportunity with {campaign_name}",
      content: `Hi {influencer_name},

I hope this email finds you well! I'm reaching out from Brand Influence International regarding an exciting collaboration opportunity with {campaign_name}.

We've been following your content and love your engagement with the {category} community. We believe you'd be a perfect fit for our upcoming campaign.

Campaign Details:
- Campaign: {campaign_name}
- Deliverables: {deliverables}
- Timeline: {timeline}
- Proposed Rate: €{proposed_rate}

{custom_message}

We're excited about the possibility of working together and would love to hear your thoughts. Please let me know if you're interested and available for the proposed timeline.

Looking forward to your response!

Best regards,
[Your Name]
Brand Influence International`
    },
    follow_up: {
      subject: "Following up on {campaign_name} Collaboration",
      content: `Hi {influencer_name},

I wanted to follow up on my previous email about the {campaign_name} collaboration opportunity.

Quick recap:
- Deliverables: {deliverables}
- Timeline: {timeline}
- Rate: €{proposed_rate}

{custom_message}

If you have any questions or would like to discuss the details further, I'm happy to jump on a quick call.

Best regards,
[Your Name]`
    },
    rate_negotiation: {
      subject: "Re: {campaign_name} - Rate Discussion",
      content: `Hi {influencer_name},

Thank you for your interest in the {campaign_name} collaboration!

I understand you'd like to discuss the rate. Based on your audience size and engagement, we can offer €{proposed_rate} for the following deliverables:
- {deliverables}
- Timeline: {timeline}

{custom_message}

Let me know if this works for you, and we can move forward with the contract.

Best regards,
[Your Name]`
    }
  };

  const generateEmailPreview = (influencer: any) => {
    const template = emailTemplates[emailTemplate as keyof typeof emailTemplates];
    
    return {
      subject: template.subject
        .replace('{campaign_name}', campaignName)
        .replace('{influencer_name}', influencer.name),
      content: template.content
        .replace(/{influencer_name}/g, influencer.name)
        .replace(/{campaign_name}/g, campaignName)
        .replace(/{category}/g, influencer.category)
        .replace(/{deliverables}/g, deliverables)
        .replace(/{timeline}/g, timeline)
        .replace(/{proposed_rate}/g, influencer.estimatedRate.toString())
        .replace('{custom_message}', customMessage)
    };
  };

  const handleSendEmails = () => {
    // Simulate email sending
    console.log("Sending emails to:", selectedInfluencerData);
    alert(`Sending ${selectedInfluencerData.length} personalized emails...`);
  };

  const handleRemoveInfluencer = (influencerId: string) => {
    const updatedSelection = selectedInfluencers.filter(id => id !== influencerId);
    // Note: This would need to be passed up to parent component
    console.log("Removing influencer:", influencerId);
  };

  return (
    <div className="space-y-6">
      {/* Campaign Setup */}
      <Card className="bg-[#1A1A1A] border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Bulk Email Campaign Setup
          </CardTitle>
          <p className="text-sm text-gray-400">
            Configure and send personalized campaign offers to selected influencers
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-400 mb-2 block">Campaign Name</label>
              <Input
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="bg-[#2A2A2A] border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-2 block">Email Template</label>
              <Select value={emailTemplate} onValueChange={setEmailTemplate}>
                <SelectTrigger className="bg-[#2A2A2A] border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-700">
                  <SelectItem value="collaboration_offer">Initial Collaboration Offer</SelectItem>
                  <SelectItem value="follow_up">Follow-up Email</SelectItem>
                  <SelectItem value="rate_negotiation">Rate Negotiation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-2 block">Deliverables</label>
              <Input
                value={deliverables}
                onChange={(e) => setDeliverables(e.target.value)}
                className="bg-[#2A2A2A] border-gray-700"
                placeholder="e.g., 1 Instagram post + 3 stories"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400 mb-2 block">Timeline</label>
              <Input
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="bg-[#2A2A2A] border-gray-700"
                placeholder="e.g., 2 weeks from confirmation"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-400 mb-2 block">Custom Message (Optional)</label>
            <Textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="bg-[#2A2A2A] border-gray-700 min-h-[80px]"
              placeholder="Add any specific details or personal notes..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Campaign Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-400">Selected</span>
            </div>
            <p className="text-2xl font-bold text-white">{selectedInfluencerData.length}</p>
            <p className="text-xs text-gray-500">influencers</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Est. Cost</span>
            </div>
            <p className="text-2xl font-bold text-white">€{totalEstimatedCost.toLocaleString()}</p>
            <p className="text-xs text-gray-500">total budget</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">Total Reach</span>
            </div>
            <p className="text-2xl font-bold text-white">{(totalReach / 1000).toFixed(0)}K</p>
            <p className="text-xs text-gray-500">estimated reach</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-gray-400">Markets</span>
            </div>
            <p className="text-2xl font-bold text-white">{Object.keys(groupedByMarket).length}</p>
            <p className="text-xs text-gray-500">countries</p>
          </CardContent>
        </Card>
      </div>

      {/* Selected Influencers by Market */}
      <Card className="bg-[#1A1A1A] border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-white">Selected Influencers</CardTitle>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <FileText className="w-4 h-4 mr-2" />
                {previewMode ? "Edit Mode" : "Preview Emails"}
              </Button>
              <Button size="sm" variant="outline" onClick={onClearSelection}>
                Clear All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {Object.entries(groupedByMarket).map(([market, influencers]) => (
              <div key={market} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-700">
                    {market.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-400">
                    {influencers.length} influencer{influencers.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {influencers.map((influencer) => (
                    <div key={influencer.id} className="border border-gray-700 rounded-lg p-3 bg-[#2A2A2A]">
                      <div className="flex items-center justify-between">
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
                            <p className="text-xs text-gray-500">{influencer.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-sm font-medium text-green-400">€{influencer.estimatedRate}</p>
                            <p className="text-xs text-gray-400">{(influencer.reach / 1000).toFixed(0)}K reach</p>
                          </div>
                          <Badge className={
                            influencer.type === 'historical' 
                              ? 'bg-blue-900 text-blue-300' 
                              : 'bg-green-900 text-green-300'
                          }>
                            {influencer.type}
                          </Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => handleRemoveInfluencer(influencer.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      {previewMode && (
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <div className="bg-[#1A1A1A] rounded p-3 text-xs">
                            <p className="text-gray-400 mb-1">Email Preview:</p>
                            <p className="text-white font-medium mb-2">
                              Subject: {generateEmailPreview(influencer).subject}
                            </p>
                            <div className="text-gray-300 max-h-32 overflow-y-auto">
                              {generateEmailPreview(influencer).content.split('\n').map((line, idx) => (
                                <p key={idx} className="mb-1">{line}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Ready to send {selectedInfluencerData.length} personalized email{selectedInfluencerData.length !== 1 ? 's' : ''}
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Copy className="w-4 h-4 mr-2" />
            Save as Template
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={handleSendEmails}
            disabled={selectedInfluencerData.length === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Send Campaign Emails
          </Button>
        </div>
      </div>
    </div>
  );
}; 