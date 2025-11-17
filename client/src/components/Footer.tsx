export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">
              FDI | CODYA
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fond dlouhodobých investic zaměřený na kvalifikované investory s
              cílem přinášet udržitelný růst při zachování vysoké likvidity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("strategie");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-strategy"
                >
                  Investiční strategie
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("vyhody");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-benefits"
                >
                  Výhody fondu
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("portfolio");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("kontakt");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Právní informace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>CODYA Invest s.r.o.</li>
              <li>IČO: 12345678</li>
              <li>Registrováno u ČNB</li>
              <li className="pt-2 text-xs">
                Fond kvalifikovaných investorů
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 CODYA Invest s.r.o. Všechna práva vyhrazena.</p>
            <p className="text-xs">
              Investice podléhají riziku. Minulá výkonnost není zárukou budoucích
              výsledků.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
