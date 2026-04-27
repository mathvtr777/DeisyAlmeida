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
            Sou psicóloga, com atuação clínica voltada ao atendimento de crianças,
            adolescentes e adultos. Minha prática é fundamentada na Terapia
            Cognitivo-Comportamental (TCC) e na Psicologia baseada em evidências,
            buscando oferecer um espaço seguro, ético e acolhedor para o cuidado emocional.
          </p>
          <p>
            Atualmente, estou em processo de especialização em Neuropsicologia, ampliando
            meu olhar para a compreensão integrada entre cognição, emoção e comportamento.
          </p>
          <p>
            Acredito na psicoterapia como um caminho de transformação e clareza. Meu
            trabalho é ajudar cada pessoa a compreender seus padrões, fortalecer recursos
            internos e construir formas mais saudáveis de lidar com seus desafios.
          </p>
          <p>
            De forma pessoal, sou movida pelo interesse genuíno pelas histórias humanas,
            pela escuta atenta e pelo cuidado com o outro. Valorizo processos de
            crescimento que respeitam o tempo de cada pessoa, com sensibilidade,
            responsabilidade e propósito.
          </p>
          <p>
            Se você sente que este pode ser um momento de cuidar de si, esse primeiro
            passo pode começar agora. Estou aqui para caminhar com você.
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
