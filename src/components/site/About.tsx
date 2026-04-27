import { Leaf, Brain, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-pad bg-warm-white">
      <div className="container-soft max-w-3xl text-center reveal">
        <p className="eyebrow">Apresentação</p>
        <h2 className="mt-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
          Sobre Deisy
        </h2>

        <div className="mt-8 space-y-5 text-text-soft">
          <p>
            Sou psicóloga clínica com especialização em Terapia Cognitivo-Comportamental
            (TCC) e Neuropsicologia. Acredito que o cuidado com a saúde mental pode ser
            leve, acessível e transformador.
          </p>
          <p>
            Meu trabalho é acolher cada pessoa com escuta genuína, respeitando seu tempo
            e sua história.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="pill"><Leaf className="h-4 w-4" strokeWidth={1.5} /> TCC</span>
          <span className="pill"><Brain className="h-4 w-4" strokeWidth={1.5} /> Neuropsicologia</span>
          <span className="pill"><MessageCircle className="h-4 w-4" strokeWidth={1.5} /> Atendimento Humanizado</span>
        </div>
      </div>
    </section>
  );
};

export default About;
