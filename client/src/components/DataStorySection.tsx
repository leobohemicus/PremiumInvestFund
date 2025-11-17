import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, BarChart3 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useEffect, useState, useRef } from "react";

export default function DataStorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.08) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Data & Výkonnost
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4 tracking-tight">
            Transparentní výsledky
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sledujte výkonnost fondu v reálném čase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 md:p-10 relative overflow-hidden group hover-elevate transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Dnešní výnos</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-primary tabular-nums">
                    <AnimatedCounter value={7} />
                  </span>
                  <span className="text-3xl font-bold text-primary">.0%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">ročně (p.a.)</p>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Kuponový výnos</span>
                  <span className="font-semibold">4.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Kapitálový zisk</span>
                  <span className="font-semibold">2.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">YTM průměr</span>
                  <span className="font-semibold">7.0%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10 relative overflow-hidden group hover-elevate transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="rounded-full bg-chart-2/10 p-4 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Scénáře sazeb</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Jak by pokles sazeb o 1% ovlivnil výnos portfolia
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Pokles -1%</span>
                    <span className="font-semibold text-primary">+15%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 shadow-lg shadow-primary/30"
                      style={{ width: isVisible ? '75%' : '0%' }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Nezměněno</span>
                    <span className="font-semibold">7%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-chart-2 to-chart-2/80 rounded-full transition-all duration-1000 delay-200 shadow-lg shadow-chart-2/30" 
                      style={{ width: isVisible ? '45%' : '0%' }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Růst +1%</span>
                    <span className="font-semibold text-destructive">-8%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-destructive to-destructive/80 rounded-full transition-all duration-1000 delay-400 shadow-lg shadow-destructive/30" 
                      style={{ width: isVisible ? '25%' : '0%' }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                * Modelový výpočet založený na duraci 15 let
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-10 relative overflow-hidden group hover-elevate transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-chart-4/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="rounded-full bg-chart-4/10 p-4 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="font-semibold text-2xl mb-3">Historická stabilita</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-chart-4 tabular-nums">
                    <AnimatedCounter value={98} />
                  </span>
                  <span className="text-3xl font-bold text-chart-4">.5%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">míra splácení</p>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Počet emisí</span>
                  <span className="font-semibold"><AnimatedCounter value={15} />+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Průměrný rating</span>
                  <span className="font-semibold">AA-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Max. ztráta (YTD)</span>
                  <span className="font-semibold">-1.2%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
