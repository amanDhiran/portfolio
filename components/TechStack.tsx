import React from "react";
import skills from "@/data/skills.json";
import Image from "next/image";
export default function TechStack() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-2xl md:text-3xl text-[#A374FF]">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((item) => (
          <div key={item.name} className="flex justify-between border px-3 py-2 rounded-xl border-white/10 gap-2 items-center">
            <Image width={40} height={20} className="w-8 h-8" src={item.icon} alt={item.name} />
            <p className="text-sm text-[#FFFFE3]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
