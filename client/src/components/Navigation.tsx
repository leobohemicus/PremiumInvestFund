import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
            FDI <span className="text-muted-foreground">| CODYA</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("strategie")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-strategy"
            >
              Strategie
            </button>
            <button
              onClick={() => scrollToSection("vyhody")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-benefits"
            >
              Výhody
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Kontakt
            </button>
            <Button
              onClick={() => scrollToSection("kontakt")}
              data-testid="button-cta-nav"
            >
              Zjistit více
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("strategie")}
              className="block w-full text-left py-2 text-sm font-medium"
              data-testid="link-strategy-mobile"
            >
              Strategie
            </button>
            <button
              onClick={() => scrollToSection("vyhody")}
              className="block w-full text-left py-2 text-sm font-medium"
              data-testid="link-benefits-mobile"
            >
              Výhody
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-sm font-medium"
              data-testid="link-portfolio-mobile"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="block w-full text-left py-2 text-sm font-medium"
              data-testid="link-contact-mobile"
            >
              Kontakt
            </button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("kontakt")}
              data-testid="button-cta-mobile"
            >
              Zjistit více
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
