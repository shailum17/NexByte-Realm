
import React from "react";

const matrixChars = "01";

const HackLoader = () => {
  // Generate an array for matrix lines
  const lines = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Matrix Rain Animation */}
        <div className="relative w-[340px] h-[180px] overflow-hidden mb-8">
          {/* Matrix lines */}
          {lines.map((_, idx) => (
            <MatrixLine key={idx} delay={Math.random()} />
          ))}
        </div>
        {/* Loader Text */}
        <div className="font-mono text-cyber-accent text-2xl uppercase tracking-widest animate-pulse select-none">
          hackprooflearning
        </div>
        <div className="font-mono text-cyber-accent/80 text-sm mt-2 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

/** Single line of matrix rain */
function MatrixLine({ delay }: { delay: number }) {
  // Generate random string for the column
  const chars = Array.from({ length: 12 }, () =>
    matrixChars[Math.floor(Math.random() * matrixChars.length)]
  );
  const style = {
    left: `${Math.random() * 320}px`,
    animationDelay: `${delay * 1.5}s`,
    filter: "blur(0.5px)",
  };
  // Animate downward
  return (
    <div
      className="absolute top-0 text-cyber-accent font-mono text-lg whitespace-pre animate-matrix-drop"
      style={style as React.CSSProperties}
    >
      {chars.join("")}
    </div>
  );
}

export default HackLoader;
