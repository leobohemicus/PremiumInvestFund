import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Clock } from "lucide-react";

export default function InvestmentThesis() {
  return (
    <section id="strategie" className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Investiční strategie
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
              Proč investovat právě teď?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dlouhodobé úrokové sazby jsou na úrovních, které zde nebyly 20 let.
              Krátkodobé bankovní sazby (spořící účty, termínované vklady) již začaly klesat
              a budou i nadále směrovat dolů. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Investicí do dlouhodobých dluhopisů s fixním úročením nyní zafixujete atraktivní 
              výnosy na desetiletí dopředu. Náš fond nabízí diverzifikované portfolio 
              státních a podnikových dluhopisů s průměrnou durací 14,1 let a výnosem do splatnosti 
              (YTM) 6,05% – to je přístup k institucionálnímu trhu, který není běžným investorům dostupný.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 mt-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dlouhodobá fixace výnosů</h3>
                  <p className="text-sm text-muted-foreground">
                    TOP emise: CZ 2057, EDF 2053, Vodafone 2081 | Průměrná durace 14,1 let
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 mt-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Přístup k institucionálnímu trhu</h3>
                  <p className="text-sm text-muted-foreground">
                    Dluhopisy obchodované v min. objemu 100–200 tis. EUR, pro vás dostupné již od 1M Kč
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Vysoká likvidita</h3>
                  <p className="text-sm text-muted-foreground">
                    Výhradně veřejně obchodovatelné cenné papíry, měsíční oceňování
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="text-center border-b border-border pb-6 mb-6">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Očekávaný výnos
                  </p>
                  <div className="font-bold text-4xl md:text-5xl tabular-nums text-primary">
                    6,5<span className="text-2xl">%</span> – 15<span className="text-2xl">%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">ročně (p.a.)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    6,5% bez změn v sazbách | 8–15% při poklesu sazeb
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Průměrný YTM
                  </p>
                  <div className="font-bold text-4xl md:text-5xl tabular-nums">
                    6,05<span className="text-2xl">%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    výnos do splatnosti (k 31.10.2025)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="font-semibold mb-4">Klíčové charakteristiky</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">
                    Měsíční oceňování
                  </span>
                  <span className="text-sm font-semibold">Tržní ceny</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">
                    Investiční horizont
                  </span>
                  <span className="text-sm font-semibold">3+ roky</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">
                    Minimální investice
                  </span>
                  <span className="text-sm font-semibold">1 000 000 Kč</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
