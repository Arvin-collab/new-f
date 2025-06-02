import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Search } from "lucide-react";

export const GlobalHeader = () => {
  return (
    <header className="bg-[#1A1A1A] border-b border-gray-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Branding & Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg" alt="Brand Influence Logo" className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold text-white">Brand Influence Int.</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-primary font-medium border-b-2 border-primary pb-1">
                Dashboard
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Campaigns
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Influencers
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Analytics
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Settings
              </a>
            </nav>
          </div>
          
          {/* Right: Controls */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Search className="w-5 h-5" />
            </Button>
            
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">3</span>
                </div>
              </Button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
            </div>
            
            <Select defaultValue="global">
              <SelectTrigger className="w-28 bg-[#2A2A2A] border-gray-700 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2A2A2A] border-gray-700">
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="fr">France</SelectItem>
              </SelectContent>
            </Select>
            
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
