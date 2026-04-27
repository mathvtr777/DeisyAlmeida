import { Monitor, MapPin } from "lucide-react";

const Modalities = () => {
  return (
    <section id="atendimento" className="section-pad bg-warm-white">
      <div className="container-soft">
        <div className="text-center reveal">
          <p className="eyebrow">Modalidades</p>
          <h2 className="mt-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Atendimento
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          <article className="rounded-[20px] bg-white p-9 md:p-11 border border-peach/30 reveal">
            <div className="flex items-center gap-3">
              <Monitor className="h-6 w-6 text-sage" strokeWidth={1.4} />
              <h3 className="text-xl md:text-2xl">Online</h3>
            </div>
            <ul className="mt-6 space-y-3 text-text-soft">
              <li className="flex items-baseline gap-3"><span className="text-peach">—</span> Adolescentes (12+)</li>
              <li className="flex items-baseline gap-3"><span className="text-peach">—</span> Adultos</li>
            </ul>
          </article>

          <article className="rounded-[20px] bg-white p-9 md:p-11 border border-peach/30 reveal">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-sage" strokeWidth={1.4} />
              <h3 className="text-xl md:text-2xl">Presencial — Salvador / BA</h3>
            </div>
            <ul className="mt-6 space-y-3 text-text-soft">
              <li className="flex items-baseline gap-3"><span className="text-peach">—</span> Crianças (a partir de 7 anos)</li>
              <li className="flex items-baseline gap-3"><span className="text-peach">—</span> Adolescentes</li>
              <li className="flex items-baseline gap-3"><span className="text-peach">—</span> Adultos</li>
            </ul>
          </article>
        </div>

        <p className="mt-12 text-center text-sm text-text-soft max-w-xl mx-auto reveal">
          As sessões online acontecem por plataforma segura, com conforto e sigilo total.
        </p>
      </div>
    </section>
  );
};

export default Modalities;
