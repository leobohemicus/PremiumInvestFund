import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-card/50 to-background">
      <AnimatedBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/80 via-background/90 to-background" />
      
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `radial-gradient(ellipse at top, hsl(var(--primary) / 0.15) 0%, transparent 50%)`
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Award className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold text-primary">
                Pro kvalifikované investory | Min. 1M Kč
              </p>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight leading-[1.1]">
              Bankovní sazby <span className="text-primary font-medium">klesají</span>.
            </h1>

            <h2 className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed font-light">
              Zafixujte si&nbsp;atraktivní výnosy na&nbsp;desetiletí dopředu. Fond kvalifikovaných investorů s přístupem k dlouhodobým dluhopisům na úrovních, které zde nebyly 20 let. Výnos 6,5–15% p.a.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group"
                data-testid="button-hero-cta"
              >
                Kontaktovat správce
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("strategie");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-hero-learn-more"
              >
                Zjistit více
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-primary/20">
              <div className="group">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={6.5} decimals={1} />–<AnimatedCounter value={15} />%
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Očekávaný výnos p.a.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={14.1} decimals={1} />
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Průměrná durace</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                    <AnimatedCounter value={65} />
                  </p>
                </div>
                <p className="text-xs font-medium text-muted-foreground">Investorů ve fondu</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/60 backdrop-blur-md border-2 border-primary/20 rounded-3xl p-6 shadow-2xl">
                <div className="space-y-5">
                  <div className="pb-4 border-b-2 border-primary/10">
                    <h4 className="text-lg font-semibold mb-1">Portfolio Overview</h4>
                    <p className="text-xs text-muted-foreground">Aktuální složení investic</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Státní dluhopisy</span>
                        <span className="text-base font-bold text-primary">60%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg shadow-primary/20 transition-all duration-500 group-hover:w-[62%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Bankovní dluhopisy</span>
                        <span className="text-base font-bold text-chart-2">25%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-gradient-to-r from-chart-2 to-chart-2/80 rounded-full shadow-lg shadow-chart-2/20 transition-all duration-500 group-hover:w-[27%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Ostatní aktiva</span>
                        <span className="text-base font-bold text-chart-4">15%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[15%] bg-gradient-to-r from-chart-4 to-chart-4/80 rounded-full shadow-lg shadow-chart-4/20" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t-2 border-primary/10 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Měnová diverzifikace</p>
                      <p className="text-base font-bold">4 měny</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Oceňování NAV</p>
                      <p className="text-base font-bold">Měsíčně</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
