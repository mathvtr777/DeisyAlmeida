import { Check } from "lucide-react";

const especificos = [
  "Transtornos Ansiosos",
  "Transtorno Depressivo",
  "Transtornos do humor",
  "TDAH",
  "Transtornos do Neurodesenvolvimento",
  "Dentre outros",
];

const outrasDemandas = [
  "Desregulação Emocional",
  "Autoestima",
  "Procrastinação",
  "Crenças",
  "Dentre outras",
];

const CheckItem = ({ label }: { label: string }) => (
  <li className="psico-check-item">
    <span className="psico-check-icon">
      <Check strokeWidth={2.5} size={14} />
    </span>
    <span>{label}</span>
  </li>
);

const AboutPsicoterapia = () => {
  return (
    <section id="psicoterapia" className="psico-section">
      <div className="container-soft psico-grid">
        {/* — Left: intro text — */}
        <div className="psico-intro reveal">
          <p className="eyebrow">Sobre a</p>
          <h2 className="psico-heading">Psicoterapia</h2>
          <p className="psico-body">
            Psicoterapia é um espaço seguro de escuta, acolhimento e reflexão.
            Através do diálogo com um profissional qualificado, você pode
            compreender melhor seus sentimentos, pensamentos e comportamentos,
            desenvolver recursos emocionais e construir caminhos mais saudáveis
            para lidar com desafios da vida. É um processo de autoconhecimento,
            cuidado e transformação.
          </p>
        </div>

        {/* — Cards — */}
        <div className="psico-cards">
          {/* Card 1 */}
          <article className="psico-card reveal">
            <h3 className="psico-card-title">Transtornos Específicos</h3>
            <ul className="psico-list">
              {especificos.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
          </article>

          {/* Card 2 */}
          <article className="psico-card reveal">
            <h3 className="psico-card-title">Outras Demandas</h3>
            <ul className="psico-list">
              {outrasDemandas.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutPsicoterapia;
