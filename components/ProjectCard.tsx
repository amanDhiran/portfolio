import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  thumbnail: string;
  techStack: Array<string>;
  code: string;
  live: string;
  description: string
}

export default function ProjectCard({
  name,
  thumbnail,
  techStack,
  code,
  live,
  description
}: Props) {
  return (
    <div className=" flex flex-col gap-4 md:gap-9 md:flex">
      <div className="max-w-[400px]">
        <div className="w-full h-6 rounded-t-lg bg-[#121212] flex justify-start items-center space-x-1 px-3">
          <span className="w-2 h-2 rounded-full bg-red-400"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
        </div>
        <Link href={live} target="_blank" rel="noopener noreferrer">
        <div className="bg-[#121212] p-2 rounded-b-lg border-t-0 w-full pt-0">
          <Image
            className="rounded md:max-w-none md:w-[315px]"
            height={40}
            width={400}
            src={thumbnail}
            alt={name}
          />
        </div>
        </Link>
      </div>
      <div className="flex px-3 flex-col gap-5">
        <div className="space-y-1">
          <p className="font-medium">{name}</p>
          <p className="text-white/60">{description}</p>
        </div>
        <div className=" flex flex-wrap gap-2">
          {techStack.map((item, i) => (
            <span
              key={i}
              className="text-gray-100 bg-[#121212] text-xs font-medium px-2.5 py-0.5 rounded "
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href={live} target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-0.5 border border-white/25 rounded-md bg-foreground text-background font-medium hover:bg-white/80 transition-colors">
              Live
            </button>
          </Link>
          <Link href={code} target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-0.5 border border-white/25 rounded-md bg-foreground text-background font-medium hover:bg-white/80 transition-colors">
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
