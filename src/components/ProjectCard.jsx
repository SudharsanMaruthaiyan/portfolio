import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Free Will Technology",
    description:
      "A modern tech solutions platform with interactive UI and real-world business features.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "https://free-will-technologies.vercel.app/",
    tech: ["React", "Tailwind", "Node", "Express"],
  },
  {
    title: "Hospital Management System",
    description:
      "A full-stack MERN app for managing patients, doctors, and appointments with real-time notifications and analytics.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    link: "https://frontend-alpha-jet.vercel.app/",
    tech: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired music streaming clone with sleek UI and playlist features.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
    link: "https://spotifly-clone-five.vercel.app/",
    tech: ["React", "Tailwind", "API"],
  },
  {
    title: "Code Galata",
    description:
      "A collaborative coding platform for developers to share, edit, and run code in real-time.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    link: "https://code-galata-2.vercel.app/",
    tech: ["React", "Node", "Socket.io"],
  },
  {
    title: "Quiz App",
    description:
      "A quiz application to test your knowledge with interactive questions and instant feedback.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "https://doubt-gamma.vercel.app/",
    tech: ["React", "Node", "Express"],
  },
  {
    title: "Ramjee Project",
    description:
      "A unique project showcasing advanced features and a smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "https://ramjee2.vercel.app/",
    tech: ["React", "Tailwind", "Node"],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, GSAP, and Tailwind CSS, featuring dynamic animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
    link: "http://localhost:3000/",
    tech: ["React", "GSAP", "Tailwind"],
  },
];

const ProjectCard = ({ project, idx }) => {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  // Hover effect: scale and glow
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className="group relative bg-slate-900/80 rounded-2xl overflow-hidden shadow-xl border border-slate-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-400 cursor-pointer"
      style={{ minHeight: 340, display: "flex", flexDirection: "column" }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          draggable={false}
        />
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold px-3 py-1 rounded-full text-xs shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Glow border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-60 blur-lg transition-all duration-300" />
    </a>
  );
};

// const Projects = () => {
//   const pageRef = useRef();

//   return (
//     <div
//       ref={pageRef}
//       className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 flex flex-col items-center"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-12">
//         My Projects
//       </h2>
//     </div>
//   );
// };

const Projects = () => {
  const pageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".project-title",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".project-title",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".project-para",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-para",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 flex flex-col items-center" id="projects"
    >
      <h2 className="project-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
        My Projects
      </h2>
      <p className="project-para text-slate-300 text-lg md:text-lg mb-12 max-w-3xl text-center">
        Explore some of my featured work, built with modern web technologies and
        a passion for great user experience.
      </p>
      {/* ...rest of your code... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
