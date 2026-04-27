import { Sprout, Brain } from "lucide-react";

const cards = [
  {
    icon: Sprout,
    title: "TCC — Terapia Cognitivo-Comportamental",
    text:
      "Identificamos padrões de pensamento e comportamento para construir mudanças reais e duradouras.",
  },
  {
    icon: Brain,
    title: "Neuropsicologia",
    text:
      "Compreendemos como o funcionamento cerebral influencia emoções, comportamento e aprendizado.",
  },
];

const Approach = () => {
  return (
    <section id="abordagem" className="section-pad bg-background">
      <div className="container-soft">
        <div className="text-center reveal">
          <p className="eyebrow">Abordagem</p>
          <h2 className="mt-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Como trabalho
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {cards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="relative rounded-[20px] p-9 md:p-11 reveal"
              style={{ background: "hsl(var(--cream))" }}
            >
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                style={{ background: "hsl(var(--sage))" }}
              />
              <Icon className="h-8 w-8 text-sage" strokeWidth={1.3} />
              <h3 className="mt-5 text-xl md:text-2xl">{title}</h3>
              <p className="mt-4 text-text-soft">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
