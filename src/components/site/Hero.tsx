import deisyPhoto from "@/assets/deisy.jpeg";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="container-soft grid md:grid-cols-2 gap-14 md:gap-10 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1 reveal">
          <p className="eyebrow">Psicologia Clínica</p>
          <h1
            className="mt-5"
            style={{ fontSize: "clamp(2.1rem, 5vw, 3.4rem)" }}
          >
            Um espaço seguro para ser você mesma.
          </h1>
          <p
            className="mt-6 text-text-soft max-w-md"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.075rem)" }}
          >
            Atendimento humanizado com base científica, para adolescentes e adultos.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-5 sm:items-center">
            <a href="https://api.whatsapp.com/message/LSF5HAHSAH2JK1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto">
              Iniciar o seu processo
            </a>
            <a href="#abordagem" className="btn-ghost">
              Conheça minha abordagem ↓
            </a>
          </div>
        </div>

        {/* Imagem orgânica */}
        <div className="order-1 md:order-2 relative reveal">
          <div
            aria-hidden
            className="absolute -top-8 -left-6 h-40 w-40 rounded-full"
            style={{ background: "hsl(var(--sage) / 0.18)" }}
          />
          <div
            className="organic-blob aspect-[4/5] w-full max-w-md mx-auto relative overflow-hidden"
            style={{ background: "var(--gradient-organic)" }}
          >
            <img
              src={deisyPhoto}
              alt="Deisy Almeida — Psicóloga Clínica"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -right-2 h-24 w-24 rounded-full"
            style={{ background: "hsl(var(--peach) / 0.45)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
