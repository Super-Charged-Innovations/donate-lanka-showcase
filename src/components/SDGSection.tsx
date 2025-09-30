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

      {/* SDG Detail Modal - Infographic Style */}
      <Dialog open={!!selectedSDG} onOpenChange={() => setSelectedSDG(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-card to-muted/20">
          {selectedSDG && (
            <div className="space-y-6">
              {/* Hero Section */}
              <div 
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${selectedSDG.color}ee 0%, ${selectedSDG.color}cc 100%)`
                }}
              >
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={selectedSDG.iconPath} 
                      alt={`SDG ${selectedSDG.id}: ${selectedSDG.title}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
                      {selectedSDG.title}
                    </h2>
                    <p className="text-white/95 text-lg font-medium drop-shadow-md">
                      SDG {selectedSDG.id}
                    </p>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/40 text-lg px-6 py-2 backdrop-blur-sm">
                    {selectedSDG.projectCount} Projects
                  </Badge>
                </div>
              </div>

              {/* Key Statistics Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gradient-card-contrast border-2 border-primary/30 hover:border-primary/50 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${selectedSDG.color}20` }}
                      >
                        <DollarSign className="w-6 h-6" style={{ color: selectedSDG.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Total Funding</p>
                        <p className="text-2xl font-bold text-foreground">Rs. 12.4M</p>
                      </div>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">78% of annual goal</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card-contrast border-2 border-primary/30 hover:border-primary/50 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${selectedSDG.color}20` }}
                      >
                        <Users className="w-6 h-6" style={{ color: selectedSDG.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Beneficiaries</p>
                        <p className="text-2xl font-bold text-foreground">8,245</p>
                      </div>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">Across 15 districts</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card-contrast border-2 border-primary/30 hover:border-primary/50 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${selectedSDG.color}20` }}
                      >
                        <CheckCircle2 className="w-6 h-6" style={{ color: selectedSDG.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Completed</p>
                        <p className="text-2xl font-bold text-foreground">32/45</p>
                      </div>
                    </div>
                    <Progress value={71} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">71% completion rate</p>
                  </CardContent>
                </Card>
              </div>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column: Description & Context */}
                <div className="space-y-4">
                  <Card className="bg-gradient-card-contrast border-2 border-primary/30 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-foreground">Global Goal</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedSDG.description}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card-contrast border-2 border-primary/30 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-foreground">Impact in Sri Lanka</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedSDG.sriLankanContext}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column: Impact Metrics */}
                <div className="space-y-4">
                  <Card className="bg-gradient-card-contrast border-2 border-primary/30 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg text-foreground">Key Achievements</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Livelihood Programs</span>
                            <span className="text-sm font-bold text-primary">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Emergency Relief</span>
                            <span className="text-sm font-bold text-primary">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Skills Training</span>
                            <span className="text-sm font-bold text-primary">78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Community Support</span>
                            <span className="text-sm font-bold text-primary">88%</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card-contrast border-2 border-primary/30 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-foreground mb-3">Quick Facts</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">Active in 15 out of 25 districts</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">Over 8,000 families directly supported</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">32 projects successfully completed</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">Rs. 12.4M raised for poverty alleviation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>;
};