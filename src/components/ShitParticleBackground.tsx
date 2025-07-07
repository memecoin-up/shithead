"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

const ShitParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent", // Make background transparent so it overlays
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FFFFFF", // Mengubah warna partikel menjadi putih
          },
          links: {
            enable: false, // No lines between particles
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30, // Number of particles
          },
          opacity: {
            value: 1, // Meningkatkan opasitas menjadi penuh
          },
          shape: {
            type: "character",
            character: {
              value: ["💩"], // The emoji!
              font: "Verdana", // A common font that supports emojis
              style: "",
              weight: "400",
            },
          },
          size: {
            value: { min: 20, max: 40 }, // Meningkatkan ukuran emoji
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0" // Position absolutely, behind content
    />
  );
};

export default ShitParticleBackground;