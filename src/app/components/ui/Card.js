import React from "react";

export default function Card({ icon, title, description, className = "" }) {
  return (
    <div
      className={`border border-white/10 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center min-h-[260px] ${className}`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed ">{description}</p>
    </div>
  );
}
