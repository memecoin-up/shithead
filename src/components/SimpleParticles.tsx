"use client";

import React from "react";

const SimpleParticles = () => {
  console.log("SimpleParticles component rendering...");

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        backgroundColor: "rgba(0, 255, 0, 0.1)", // Green debug background
      }}
    >
      {/* Very visible test particles */}
      <div
        className="absolute animate-bounce"
        style={{
          top: "100px",
          left: "100px",
          fontSize: "80px",
          zIndex: 1,
        }}
      >
        💩
      </div>

      <div
        className="absolute animate-pulse"
        style={{
          top: "200px",
          right: "100px",
          fontSize: "60px",
          zIndex: 1,
        }}
      >
        💩
      </div>

      <div
        className="absolute animate-spin"
        style={{
          bottom: "100px",
          left: "200px",
          fontSize: "70px",
          zIndex: 1,
        }}
      >
        💩
      </div>

      {/* Debug info with high z-index */}
      <div
        className="absolute bg-red-500 text-white p-4 text-lg font-bold"
        style={{
          top: "10px",
          left: "10px",
          zIndex: 9999,
        }}
      >
        🚨 PARTICLES LOADED 🚨
      </div>

      {/* Center particle */}
      <div
        className="absolute animate-bounce"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "100px",
          zIndex: 1,
        }}
      >
        💩
      </div>
    </div>
  );
};

export default SimpleParticles;
