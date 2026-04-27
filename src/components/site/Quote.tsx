const Quote = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "hsl(var(--sage))" }}>
      <div className="container-soft text-center reveal">
        <p
          className="font-serif text-white max-w-3xl mx-auto leading-snug"
          style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
        >
          “Cuidar de si é um ato de coragem.”
        </p>
      </div>
    </section>
  );
};

export default Quote;
