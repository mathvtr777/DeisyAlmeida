import { useEffect, useState } from "react";
import logo from "@/assets/logo-deisy.png";

const SplashScreen = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // fade-in → hold → fade-out
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("out"), 2200);
    const t3 = setTimeout(() => onDone(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      className="splash-root"
      style={{ opacity: phase === "out" ? 0 : 1 }}
    >
      {/* Decorative blobs */}
      <div className="splash-blob splash-blob--tl" />
      <div className="splash-blob splash-blob--br" />

      {/* Logo + tagline */}
      <div
        className="splash-content"
        style={{
          transform: phase === "in" ? "translateY(14px)" : "translateY(0)",
          opacity: phase === "in" ? 0 : 1,
        }}
      >
        <img src={logo} alt="Deisy Almeida" className="splash-logo" />
        <p className="splash-tagline">Psicologia Clínica</p>

        {/* animated dot loader */}
        <div className="splash-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
