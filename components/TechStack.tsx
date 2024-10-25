import React from "react";
import skills from "@/data/skills.json";
import Icon from "./Icon";
import Image from "next/image";
export default function TechStack() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-bold text-3xl text-[#A374FF]">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((item) => (
          <div className="flex flex-col justify-between gap-2 items-center">
            <Image width={40} height={20} src={item.icon} alt={item.name} />
            <p className="text-sm text-[#FFFFE3]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
