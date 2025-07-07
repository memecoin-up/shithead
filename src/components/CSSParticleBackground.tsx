"use client";

import React, { useEffect, useState } from "react";

interface ParticleData {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

const CSSParticleBackground = () => {
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("CSSParticleBackground mounted");

    // Generate particles on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5, // Keep away from edges
      top: Math.random() * 90 + 5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      size: 30 + Math.random() * 20,
    }));

    console.log("Generated particles:", newParticles);
    setParticles(newParticles);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Debug indicator */}
      <div
        className="fixed top-4 right-4 bg-red-500 text-white p-2 text-xs z-50"
        style={{ display: particles.length > 0 ? "block" : "none" }}
      >
        Particles: {particles.length}
      </div>

      {/* Particles container */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{ backgroundColor: "rgba(255,0,0,0.1)" }} // Debug background
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              fontSize: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              zIndex: 1,
            }}
          >
            💩
          </div>
        ))}

        {/* Static test particle */}
        <div
          className="absolute top-10 left-10 text-6xl z-10"
          style={{ fontSize: "60px" }}
        >
          💩
        </div>
      </div>
    </>
  );
};

export default CSSParticleBackground;
