import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const summary = `Dynamic MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. Experienced in building scalable, high-performance web applications, and proficient in modern web technologies and frameworks. Skilled in developing responsive, intuitive user interfaces and implementing backend solutions. Adept at collaborating with cross-functional teams to deliver robust software solutions that meet user needs. Passionate about continuous learning and staying updated with the latest industry trends.`;

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "St. Joseph's College, Tiruchirappalli, Tamilnadu",
    year: "Jun 2022 - May 2025 (Pursuing)",
    details: "Currently pursuing B.Sc. Computer Science.",
  },
  {
    degree: "HSC",
    school: "St. James Matriculation School, Tiruchirappalli",
    year: "Jun 2020 - Jun 2022",
    details: "Scored 70% in the board exam.",
  },
];

const certificates = [
  "Certified Full Stack Developer – Revamp Academy",
  "Certified Front-End Developer – T4TEQ Software Solution",
  "Technical Operator",
  "Taekwondo National Referee",
];

const experience = [
  {
    role: "Full Stack Developer & Mentor",
    company: "Revamp Academy (Remote)",
    year: "Jun 2024 – Present",
    details:
      "Working as a full stack developer. Developed LMS websites and dynamic/static sites using the MERN stack.",
  },
  {
    role: "Front-End Developer & Tester (Intern)",
    company: "Maac Technologies",
    year: "May 2024 – Jun 2024",
    details: "Designed and built front-end pages, updated and tested websites.",
  },
];

// const projects = [
//   {
//     name: "Hospital Management System",
//     description:
//       "Developed using MERN Stack. Integrated MongoDB for efficient database management, handling patient records, login detail, and admin functionalities. Utilized Streamlit for rapid web app development and responsive design.",
//   },
//   {
//     name: "Code Galatta",
//     description:
//       "Created user-friendly interfaces for applicants and administrators. Designed and built a website using React.js.",
//   },
// ];

const awards = [
  "Winner in Adzap at National level Inter College Symposium",
  "Winner in Web Artistry at Inter College Symposium, SWAP 2K24",
  "Winner in Web Design at Inter College Symposium BOOTFETE-2K24",
  "Taekwondo National Medalist",
];

const technicalSkills = [
  "MERN Stack",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "Python",
  "Git & GitHub",
  "PC Assembling",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Time Management",
];

const languages = ["English", "Tamil"];
const hobbies = [
  "Playing Taekwondo",
  "Listening to songs",
  "Self learning",
  "Cycling",
  "Gardening",
];

const Resume = () => {
  const pageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".resume-title",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".resume-title",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".resume-para",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".resume-para",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".resume-section",
      { y: 90, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".resume-section",
          start: "top 90%",
          toggleActions: "restart",
        },
      }
    );
    gsap.fromTo(
      ".certificate-section",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certificate-section",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".awards-section",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".awards-section",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".experience-section",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".skills-section",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".additional-section",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".additional-section",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 flex flex-col items-center" id="resume"
    >
      {/* Header */}
      <h2 className="resume-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
        Sudharsan M
      </h2>
      <p className="resume-para text-slate-300 text-lg md:text-lg mb-6 max-w-3xl text-center">
        MERN Stack Developer
      </p>
      <div className="resume-para text-slate-400 text-base mb-8 max-w-2xl text-center">
        <span className="block font-semibold">Contact:</span>
        <span className="block">
          sudharsan6078@gmail.com | 13/1 4th Kambar Street, Subramaniyapuram,
          Trichy
        </span>
        <span className="block">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sudharsan6078"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            linkedin.com/in/sudharsan6078
          </a>
        </span>
      </div>

      {/* Summary */}
      <section className="resume-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Summary</h3>
        <div className="text-slate-300 text-base">{summary}</div>
      </section>

      {/* Education */}
      <section className="resume-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Education</h3>
        <ul className="space-y-5">
          {education.map((edu, idx) => (
            <li
              key={idx}
              className="bg-slate-800/60 rounded-xl p-5 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <span className="font-semibold text-cyan-400">
                  {edu.degree}
                </span>
                <span className="text-slate-400 text-sm">{edu.year}</span>
              </div>
              <div className="font-semibold text-white">{edu.school}</div>
              <div className="text-slate-300 text-sm mt-1">{edu.details}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Certificates */}
      <section className="certificate-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Certificates</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          {certificates.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="experience-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Work Experience</h3>
        <ul className="space-y-5">
          {experience.map((exp, idx) => (
            <li
              key={idx}
              className="bg-slate-800/60 rounded-xl p-5 border border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <span className="font-semibold text-purple-400">
                  {exp.role}
                </span>
                <span className="text-slate-400 text-sm">{exp.year}</span>
              </div>
              <div className="font-semibold text-white">{exp.company}</div>
              <div className="text-slate-300 text-sm mt-1">{exp.details}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      {/* <section className="resume-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Projects</h3>
        <ul className="space-y-3">
          {projects.map((proj, idx) => (
            <li key={idx}>
              <span className="font-semibold text-cyan-400">{proj.name}:</span>{" "}
              <span className="text-slate-300">{proj.description}</span>
            </li>
          ))}
        </ul>
      </section> */}

      {/* Awards */}
      <section className="awards-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Awards</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          {awards.map((award, idx) => (
            <li key={idx}>{award}</li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="skills-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {technicalSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold px-4 py-2 rounded-full text-base shadow"
            >
              {skill}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 mt-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-slate-700 text-cyan-300 font-semibold px-4 py-2 rounded-full text-base shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="additional-section w-full max-w-3xl mb-10">
        <h3 className="text-2xl font-bold text-white mb-3">
          Additional Information
        </h3>
        <div className="mb-2">
          <span className="font-semibold text-cyan-400">Languages:</span>{" "}
          <span className="text-slate-300">{languages.join(", ")}</span>
        </div>
        <div>
          <span className="font-semibold text-cyan-400">Hobbies:</span>{" "}
          <span className="text-slate-300">{hobbies.join(", ")}</span>
        </div>
      </section>

      {/* Download Resume Button */}
      <a
        href="Resume-M.pdf"
        download
        className="mt-6 px-8 py-3 rounded-full font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
