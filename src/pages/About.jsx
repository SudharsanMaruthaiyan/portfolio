import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "GSAP",
  "Git & GitHub",
];

const achievements = [
  "Award-winning web designer in inter-college symposiums",
  "Taekwondo national medalist",
  "Certified technical operator",
  "Intern at Revamp Academy & Maac Technologies",
  "Built Hospital Management System & Event Registration Platform",
  "Certified in Full Stack & Front-End Development",
];

const About = () => {
  const container = useRef();
  const skillsCarousel = useRef();
  const carouselAnim = useRef(); // Store GSAP animation instance

  // GSAP Animations
  useGSAP(
    () => {
      gsap.fromTo(
        ".about-title",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        ".about-para",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-para",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        ".about-skills",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-skills",
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        ".about-achievements",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-achievements",
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: container }
  );

  // Auto-scrolling skills carousel with pause/resume on hover
  useEffect(() => {
    let anim;
    const el = skillsCarousel.current;
    if (el) {
      const list = el.querySelector(".carousel-list");
      list.innerHTML += list.innerHTML; // Duplicate for infinite effect

      anim = gsap.to(list, {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });
      carouselAnim.current = anim; // Store the animation instance
    }
    return () => anim && anim.kill();
  }, []);

  // Handlers for pausing/resuming on hover
  const handleCarouselMouseEnter = () => {
    carouselAnim.current && carouselAnim.current.pause();
  };
  const handleCarouselMouseLeave = () => {
    carouselAnim.current && carouselAnim.current.resume();
  };

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 flex items-center justify-center px-[5%] md:px-[10%]"
      id="about"
    >
      <div className=" w-full bg-slate-900/80 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
        {/* Animated Background Accent */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

        <h2 className="about-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 z-10 relative">
          About Me
        </h2>

        <p className="about-para text-slate-300 text-lg md:text-xl mb-8 z-10 relative">
          Hi, I’m <span className="font-semibold text-white">Sudharsan M</span>,
          a passionate{" "}
          <span className="text-cyan-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          currently pursuing my B.Sc. in Computer Science at St. Joseph’s
          College, Trichy.
          <br className="hidden md:block" />
          <span className="block mt-2">
            I specialize in building responsive and dynamic web applications
            using modern technologies like MongoDB, Express.js, React.js, and
            Node.js. My journey includes hands-on experience from internships,
            real-world projects, and a drive for continuous learning.
          </span>
        </p>

        {/* Skills Carousel */}
        <div className="about-skills mb-10 z-10 relative">
          <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
          <div
            ref={skillsCarousel}
            className="overflow-hidden w-full"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
            }}
            onMouseEnter={handleCarouselMouseEnter}
            onMouseLeave={handleCarouselMouseLeave}
          >
            <div className="carousel-list flex gap-6 whitespace-nowrap will-change-transform">
              {skills.concat(skills).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold px-6 py-2 rounded-full text-base shadow-lg mx-1 inline-block"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="about-achievements mb-8 z-10 relative">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Achievements & Experience
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="pl-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10 relative">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Let’s Connect!
          </h3>
          <a
            href="mailto:sudharsanmaruthaiyan@gmail.com"
            className="inline-block mt-2 px-8 py-3 rounded-full font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
