import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12" style={{ background: "hsl(var(--cream))" }}>
      <div className="container-soft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-serif text-lg text-sage">Deisy Almeida</p>
          <p className="text-xs text-text-soft tracking-wide mt-1">
            Psicóloga · CRP __/__________
          </p>
        </div>

        <div className="flex items-center gap-6 text-text-soft">
          <a href="#" aria-label="Instagram" className="hover:text-sage transition-colors flex items-center gap-2 text-sm">
            <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
          </a>
          <a href="https://api.whatsapp.com/message/LSF5HAHSAH2JK1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-sage transition-colors flex items-center gap-2 text-sm">
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
          </a>
        </div>

        <p className="text-xs text-text-soft">© 2025 · Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
