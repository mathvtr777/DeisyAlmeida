import deisy1 from "@/assets/deisy1.jpeg";

const Quote = () => {
  return (
    <section className="quote-banner">
      {/* Background image */}
      <img
        src={deisy1}
        alt=""
        aria-hidden
        className="quote-bg-img"
      />

      {/* Dark overlay */}
      <div className="quote-overlay" />

      {/* Text */}
      <div className="container-soft quote-content reveal">
        <p className="quote-text">
          &ldquo;Cuidar de si é um ato de coragem.&rdquo;
        </p>
      </div>
    </section>
  );
};

export default Quote;
