const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.04-5.16-2.9-7.0Zm-7.07 15.31h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.27 8.27 0 0 1-1.27-4.42c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.86 2.43a8.23 8.23 0 0 1 2.42 5.87c0 4.57-3.72 8.24-8.33 8.24Zm4.55-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.39-1.72c-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.78-1.86-.2-.49-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.57.13.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.31Z" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contato" className="section-pad bg-background">
      <div className="container-soft max-w-2xl text-center reveal">
        <p className="eyebrow">Contato</p>
        <h2 className="mt-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
          Pronta para começar?
        </h2>
        <p className="mt-5 text-text-soft">
          Entre em contato pelo WhatsApp e agende sua primeira sessão.
        </p>

        <a
          href="https://wa.me/55XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-9 px-9 py-4 text-base w-full sm:w-auto"
        >
          <WhatsAppIcon /> Agendar pelo WhatsApp
        </a>

        <p className="mt-5 text-xs text-text-soft tracking-wide">
          Respondemos em até 24h · Sigilo garantido
        </p>
      </div>
    </section>
  );
};

export default Contact;
