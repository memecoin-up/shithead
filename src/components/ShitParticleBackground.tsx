"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

const ShitParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles container loaded:", container); // Tambahkan log ini
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
            direction: "bottom", // Mengubah arah gerakan menjadi dari atas ke bawah
            enable: true,
            outModes: {
              default: "out", // Partikel akan keluar dari layar setelah mencapai batas bawah
            },
            random: false, // Gerakan tidak acak
            speed: 3, // Meningkatkan kecepatan sedikit
            straight: true, // Gerakan lurus ke bawah
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Meningkatkan jumlah partikel
          },
          opacity: {
            value: 1, // Meningkatkan opasitas menjadi penuh
          },
          shape: {
            type: "circle", // Mengubah bentuk menjadi lingkaran untuk debugging
            // character: { // Komentar ini untuk sementara
            //   value: ["💩"],
            //   font: "Verdana",
            //   style: "",
            //   weight: "400",
            // },
          },
          size: {
            value: { min: 10, max: 20 }, // Mengatur ukuran lingkaran
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0" // Position absolutely, behind content
    />
  );
};

export default ShitParticleBackground;