import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-deisy.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-peach/30"
          : "bg-white border-b border-peach/20"
      }`}
    >
      <div className="container-soft flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center group shrink-0">
          <img
            src={logo}
            alt="Deisy Almeida — Psicóloga, CRP 03/32796"
            className="h-20 sm:h-24 md:h-20 lg:h-24 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-soft hover:text-sage transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex btn-primary">
          Iniciar o seu processo
        </a>

        <button
          aria-label="Abrir menu"
          className="lg:hidden md:hidden p-2 text-text-deep"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-text-deep/10" />
        <aside
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white shadow-sm transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 border-b border-peach/30">
            <img src={logo} alt="Deisy Almeida" className="h-14 w-auto" />
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-1 text-text-soft">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-text-deep hover:text-sage transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Iniciar o seu processo
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
