import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Users, TrendingUp, Heart, DollarSign, CheckCircle2 } from "lucide-react";
import { sdgData, SDG } from "@/types/sdg";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";
export const SDGSection = () => {
  const [selectedSDG, setSelectedSDG] = useState<SDG | null>(null);

  const handleSDGClick = (sdg: SDG) => {
    setSelectedSDG(sdg);
  };
  return <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission: Advancing Sri Lanka Through the
Sustainable Development Goals</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">At FundLanka, every Startup will directly or indirectly support Sri Lanka's progress toward the
  Global 17 Sustainable Development Goals (SDGs). From eradicating poverty to protecting our environment, your generosity fuels real, measurable change across all 25 districts.</p>
            <p className="text-lg text-muted-foreground mt-2 font-medium">Discover how your choice helps build a brighter, more sustainable future for all Sri Lankans.</p>
          </div>
        </ScrollReveal>

        {/* SDG Grid */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mb-12">
            {/* Mobile/Tablet: Simple responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
              {sdgData.map(sdg => <Card key={sdg.id} className={cn("cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg", "border-2 hover:border-white/50 group")} style={{
              backgroundColor: sdg.color
            }} onClick={() => handleSDGClick(sdg)}>
                  <CardContent className="p-6 text-center">
                    {/* Official UN SDG Icon */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-white">
                      <img src={sdg.iconPath} alt={`SDG ${sdg.id}: ${sdg.title}`} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-white mb-2 text-sm md:text-base group-hover:text-white/90 transition-colors drop-shadow-lg">
                      {sdg.title}
                    </h3>
                    
                    {/* Project Count Badge */}
                    <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30 font-semibold drop-shadow-md">
                      {sdg.projectCount} Projects
                    </Badge>
                    
                    {/* Sri Lankan Context */}
                    <p className="text-xs text-white/90 leading-relaxed font-semibold drop-shadow-md">
                      {sdg.sriLankanContext}
                    </p>
                  </CardContent>
                </Card>)}
            </div>

            {/* Desktop: Custom row layout */}
            <div className="hidden lg:block space-y-3">
              {/* Row 1: SDGs 1-5 */}
              <div className="flex justify-center gap-4">
                {sdgData.slice(0, 5).map(sdg => <Card key={sdg.id} className={cn("cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg", "border-2 hover:border-white/50 group w-44")} style={{
                backgroundColor: sdg.color
              }} onClick={() => handleSDGClick(sdg)}>
                    <CardContent className="p-4 text-center">
                      {/* Official UN SDG Icon */}
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-white">
                        <img src={sdg.iconPath} alt={`SDG ${sdg.id}: ${sdg.title}`} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-white mb-1 text-sm group-hover:text-white/90 transition-colors drop-shadow-lg">
                        {sdg.title}
                      </h3>
                      
                      {/* Sri Lankan Context */}
                      <p className="text-xs text-white/90 leading-relaxed font-semibold drop-shadow-md">
                        {sdg.sriLankanContext}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Remaining rows follow same pattern */}
              <div className="flex justify-center gap-4">
                {sdgData.slice(5, 10).map(sdg => <Card key={sdg.id} className={cn("cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg", "border-2 hover:border-white/50 group w-44")} style={{
                backgroundColor: sdg.color
              }} onClick={() => handleSDGClick(sdg)}>
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-white">
                        <img src={sdg.iconPath} alt={`SDG ${sdg.id}: ${sdg.title}`} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-white mb-1 text-sm group-hover:text-white/90 transition-colors drop-shadow-lg">
                        {sdg.title}
                      </h3>
                      <p className="text-xs text-white/90 leading-relaxed font-semibold drop-shadow-md">
                        {sdg.sriLankanContext}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>

              <div className="flex justify-center gap-4">
                {sdgData.slice(10, 14).map(sdg => <Card key={sdg.id} className={cn("cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg", "border-2 hover:border-white/50 group w-44")} style={{
                backgroundColor: sdg.color
              }} onClick={() => handleSDGClick(sdg)}>
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-white">
                        <img src={sdg.iconPath} alt={`SDG ${sdg.id}: ${sdg.title}`} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-white mb-1 text-sm group-hover:text-white/90 transition-colors drop-shadow-lg">
                        {sdg.title}
                      </h3>
                      <p className="text-xs text-white/90 leading-relaxed font-semibold drop-shadow-md">
                        {sdg.sriLankanContext}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>

              <div className="flex justify-center gap-4">
                {sdgData.slice(14, 17).map(sdg => <Card key={sdg.id} className={cn("cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg", "border-2 hover:border-white/50 group w-44")} style={{
                backgroundColor: sdg.color
              }} onClick={() => handleSDGClick(sdg)}>
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-white">
                        <img src={sdg.iconPath} alt={`SDG ${sdg.id}: ${sdg.title}`} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-white mb-1 text-sm group-hover:text-white/90 transition-colors drop-shadow-lg">
                        {sdg.title}
                      </h3>
                      <p className="text-xs text-white/90 leading-relaxed font-semibold drop-shadow-md">
                        {sdg.sriLankanContext}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </ScrollReveal>


        {/* Footer Note */}
        <div className="mt-12 text-center">
          
        </div>
      </div>

      {/* SDG Detail Modal - Content Focused */}
      <Dialog open={!!selectedSDG} onOpenChange={() => setSelectedSDG(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedSDG && (
            <div className="space-y-6">
              {/* Hero Section with Photo */}
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img 
                  src={selectedSDG.iconPath} 
                  alt={selectedSDG.title} 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 flex items-end p-8"
                  style={{
                    background: `linear-gradient(to top, ${selectedSDG.color}ee 0%, ${selectedSDG.color}88 50%, transparent 100%)`
                  }}
                >
                  <div>
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                      {selectedSDG.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-8 px-2">
                {/* Global Goal */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-7 h-7 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">The Global Mission</h3>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                    {selectedSDG.description}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This goal represents a fundamental commitment to human dignity and sustainable development. 
                    It addresses critical challenges that affect millions of people worldwide and requires 
                    coordinated action from governments, organizations, and communities to create lasting change.
                  </p>
                </div>

                {/* Why It Matters */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-7 h-7 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Why This Matters</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedSDG.importance}
                  </p>
                </div>

                {/* Sri Lankan Context */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-7 h-7 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Impact in Sri Lanka</h3>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                    {selectedSDG.sriLankanContext}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through FundLanka, communities across all 25 districts are receiving the support they need 
                    to make real progress toward this goal. Local initiatives are creating sustainable solutions 
                    that address immediate needs while building long-term capacity for positive change.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>;
};