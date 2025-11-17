import { Card } from "@/components/ui/card";
import { Building2, Landmark, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      icon: Landmark,
      title: "Státní dluhopisy",
      subtitle: "Jádro portfolia",
      description:
        "Státní dluhopisy ČR a dalších vyspělých ekonomik s dlouhou durací (15+ let). Příklad: ČR 2057, Electricité de France 2053.",
      weight: "Hlavní část",
      features: ["Dlouhá durace", "Vysoká bonita", "EUR, USD, CZK"],
    },
    {
      icon: Building2,
      title: "Podřízené bankovní dluhopisy",
      subtitle: "Doplňková část",
      description:
        "Subordinované dluhopisy evropských bank se splatností do 10 let pro vyšší výnos při zachování vysoké kvality emitentů.",
      weight: "Doplněk",
      features: ["Splatnost do 10 let", "Evropské banky", "Vyšší výnos"],
    },
    {
      icon: TrendingUp,
      title: "Akciové pozice",
      subtitle: "Menší část",
      description:
        "Individuální akciové pozice včetně REIT akcií pro diverzifikaci a potenciál růstu. Pečlivě vybrané tituly.",
      weight: "Menší podíl",
      features: ["REITs", "Dividendové akcie", "Růstový potenciál"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Struktura portfolia
          </h2>
          <p className="text-lg text-muted-foreground">
            Diverzifikované portfolio 15-20 emisí s důrazem na dlouhodobé státní
            dluhopisy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-8"
                data-testid={`card-portfolio-${index}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="rounded-md bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.weight}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-muted text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 bg-muted/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-2xl mb-4">Diverzifikace měn</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Portfolio je diverzifikováno napříč hlavními světovými měnami pro
                snížení měnového rizika a využití globálních příležitostí.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium">USD</span>
                  <span className="text-sm text-muted-foreground">
                    Americký dolar
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium">EUR</span>
                  <span className="text-sm text-muted-foreground">Euro</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium">GBP</span>
                  <span className="text-sm text-muted-foreground">
                    Britská libra
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-medium">CZK</span>
                  <span className="text-sm text-muted-foreground">
                    Česká koruna
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-4">
                Průhledné oceňování
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Všechny cenné papíry v portfoliu jsou veřejně obchodovatelné,
                což zajišťuje transparentní ocenění podle aktuálních tržních
                cen.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Měsíční oceňování</p>
                    <p className="text-xs text-muted-foreground">
                      Portfolio oceněno podle tržních cen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Veřejné trhy</p>
                    <p className="text-xs text-muted-foreground">
                      Pouze regulované burzy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Pravidelné reporty</p>
                    <p className="text-xs text-muted-foreground">
                      Transparentní komunikace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
