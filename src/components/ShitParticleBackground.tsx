"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

const ShitParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles container loaded:", container); // Tetap log ini
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#FF0000", // SEMENTARA: Mengubah latar belakang kanvas menjadi merah untuk debugging
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
            value: "#FFFFFF", // Warna partikel (emoji)
          },
          links: {
            enable: false, // No lines between particles
          },
          move: {
            direction: "bottom", // Gerakan dari atas ke bawah
            enable: true,
            outModes: {
              default: "out", // Partikel akan keluar dari layar
            },
            random: false, // Gerakan lurus
            speed: 5, // Meningkatkan kecepatan
            straight: true, // Gerakan lurus ke bawah
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // Meningkatkan jumlah partikel secara drastis
          },
          opacity: {
            value: 1, // Opasitas penuh
          },
          shape: {
            type: "character",
            character: {
              value: ["💩"], // Emoji kotoran
              font: "Verdana", // Font umum yang mendukung emoji
              style: "",
              weight: "400",
            },
          },
          size: {
            value: { min: 30, max: 60 }, // Meningkatkan ukuran emoji secara drastis
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0" // Posisi absolut, di belakang konten
    />
  );
};

export default ShitParticleBackground;