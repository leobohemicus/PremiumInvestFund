import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Abstract_financial_data_visualization_4343a14a.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Award className="h-4 w-4 text-primary" />
              <p className="text-sm font-semibold text-primary">
                Pro kvalifikované investory | Min. 1M Kč
              </p>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[1.1]">
              Dlouhodobý růst s&nbsp;vysokou <span className="text-primary">likviditou</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Fond kvalifikovaných investorů zaměřený na veřejně obchodovatelné
              dluhopisy s transparentním portfoliem a očekávaným výnosem 7% p.a.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums">7%</p>
                </div>
                <p className="text-sm text-muted-foreground">Očekávaný výnos p.a.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums">5%</p>
                </div>
                <p className="text-sm text-muted-foreground">Daň z příjmů</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <p className="text-2xl md:text-3xl font-bold tabular-nums">15+</p>
                </div>
                <p className="text-sm text-muted-foreground">Emisí v portfoliu</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Státní dluhopisy</span>
                    <span className="text-sm font-semibold">Hlavní část</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-primary rounded-full" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Bankovní dluhopisy</span>
                    <span className="text-sm font-semibold">Doplněk</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-primary/70 rounded-full" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Akciové pozice</span>
                    <span className="text-sm font-semibold">Menší podíl</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/5 bg-primary/40 rounded-full" />
                  </div>

                  <div className="pt-6 border-t border-border grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Diverzifikace</p>
                      <p className="text-sm font-semibold">4 měny</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Oceňování</p>
                      <p className="text-sm font-semibold">Měsíčně</p>
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
