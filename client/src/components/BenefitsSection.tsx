import { Card } from "@/components/ui/card";
import { Waves, Eye, Percent } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Waves,
      title: "Vysoká likvidita",
      description:
        "Investujeme výhradně do veřejně obchodovatelných dluhopisů, které lze kdykoli koupit nebo prodat na regulovaných trzích.",
      features: [
        "Veřejně obchodovatelné cenné papíry",
        "Možnost výstupu kdykoliv",
        "Transparentní tržní ocenění",
      ],
    },
    {
      icon: Eye,
      title: "Transparentnost",
      description:
        "Portfolio je měsíčně oceňováno podle aktuálních tržních cen. Vždy víte, kolik vaše investice skutečně stojí.",
      features: [
        "Měsíční oceňování portfolia",
        "Přehledná struktura aktiv",
        "Pravidelné reporty",
      ],
    },
    {
      icon: Percent,
      title: "Daňová výhodnost",
      description:
        "Zisky fondu podléhají pouze 5% dani z příjmů. Výnosy z prodeje podílů jsou osvobozeny od daně po 3 letech držby.",
      features: [
        "Pouze 5% daň z příjmů fondu",
        "Osvobození po 3 letech",
        "Daňově efektivní struktura",
      ],
    },
  ];

  return (
    <section id="vyhody" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Výhody fondu
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Proč FDI?
          </h2>
          <p className="text-lg text-muted-foreground">
            Kombinace dlouhodobého růstu, transparentnosti a daňové efektivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 group relative overflow-hidden"
                data-testid={`card-benefit-${index}`}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="rounded-md bg-primary/10 p-3 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="rounded-full bg-primary/20 p-0.5 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
