import data from "@/data/socials.json";
import Icon from "@/components/Icon";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projects.json";

export default function Home() {
  return (
    <div className="mt-6 flex flex-col gap-12">
      {/* hero */}
      <div className="flex flex-col md:my-5 gap-6">
        <div>
          <p className="text-[#FFFFE3] text-lg">Hello, I&apos;m Aman</p>
          <h1 className="font-bold text-3xl md:text-5xl text-[#FFD074]">
            Full Stack Developer
          </h1>
          <p className="mt-2 pl-1 text-[#FFFFE3]">{'// Based in India'}</p>
        </div>
        <div className="flex gap-3">
          {data.socials.map((item) => (
            <a
              href={item.href}
              key={item.name}
              target="_blank"
              className="text-[#ffffff8b] transition-colors hover:text-foreground"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <Icon
                name={item.icon as "linkedin" | "github" | "mail"}
                className="size-5"
              />
            </a>
          ))}
        </div>
      </div>
      {/* stack */}
      <TechStack />
      {/* projects */}
      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl md:text-3xl text-[#A374FF]">
            Projects
          </h2>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            View all
          </a> */}
        </div>
        <div className="mt-11 grid md:grid-cols-2 gap-10">
          {projectData.map((project) => (
            <ProjectCard
              name={project.name}
              thumbnail={project.href}
              techStack={project.techStack}
              key={project.name}
              live={project.live}
              code={project.code}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
