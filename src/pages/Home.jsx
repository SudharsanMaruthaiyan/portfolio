import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import SplineHomeImage from "../components/SplineHomeImage";

gsap.registerPlugin(ScrollTrigger);

const DNAImage =
  "https://ik.imagekit.io/jjyo3gsee/Allen%20Project/vecteezy_3d-face-lock-illustration_12421885.png?updatedAt=1746130743720";

const Home = () => {
  const container = useRef();
  const imageRef = useRef();
  const tl = useRef();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  useGSAP(
    () => {
      // Hero text animation
      tl.current = gsap
        .timeline()
        .from(".hero-title", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".cta-button",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // 3D rotation on scroll
      gsap.to(imageRef.current, {
        rotateY: 360,
        rotateX: -50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll Indicator Visibility
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        onEnter: () => setShowScrollIndicator(true), // Show on enter
        onLeave: () => setShowScrollIndicator(false), // Hide on leave (scroll down)
        onEnterBack: () => setShowScrollIndicator(false), // Hide on enter back
        onLeaveBack: () => setShowScrollIndicator(true), // Show on leave back (scroll top)
      });

      // Set initial state for clip-path
      gsap.set("#home-clip-bg", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      // Animate clip-path on scroll
      gsap.to("#home-clip-bg", {
        clipPath: "polygon(14% 0%, 86% 0%, 100% 90%, 0% 100%)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#home-clip-bg",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="2xl:container mx-auto">
      <div className="mx-auto">
        <div
          ref={container}
          id="home-clip-bg"
          className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden px-[5%] md:px-[10%] mx-auto py-5"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl -top-20 -left-20" />
            <div className="absolute w-[300px] h-[300px] bg-cyan-500/30 rounded-full blur-3xl bottom-0 right-0" />
          </div>

          {/* Content Container */}
          <div className=" grid grid-cols-1 md:grid-cols-4 items-center">
            {/* Left: Hero Text */}
            <div className="max-w-2xl md:col-span-3">
              <h1 className="hero-title text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 leading-tight text-wrap lg:text-nowrap">
                Hi, I'm Sudharsan
                <br />
                <span className="text-white text-wrap">
                  MERN Stack Developer
                </span>
              </h1>

              <p className="hero-subtitle text-xl md:text-xl text-slate-300 mb-8 max-w-2xl">
                Passionate about building responsive, dynamic web applications
                with MongoDB, Express.js, React.js, and Node.js.
                <br />
                <span className="block mt-2">
                  Experienced with real-world projects like Hospital Management
                  Systems and event registration platforms. Award-winning web
                  designer, certified technical operator, and Taekwondo national
                  medalist. I love solving problems, collaborating with teams,
                  and delivering clean, user-friendly solutions.
                </span>
              </p>

              {/* Animated Contact Me Button */}
              <a
                href="mailto:sudharsanmaruthaiyan@gmail.com?subject=Contact%20From%20Portfolio&body=Hello%20Sudharsan%2C%0AI%20am%20interested%20in%20connecting%20with%20you."
                className="cta-button relative inline-block px-10 py-4 font-bold text-lg rounded-full text-white bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-5 h-5 transform-gpu transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span
                  className="absolute inset-0 rounded-full pointer-events-none border-2 border-cyan-400 opacity-60 blur-md animate-pulse group-hover:border-purple-400 transition-colors duration-300 z-0"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Right: Tech Image with 3D Rotation */}
            <div className="hidden md:col-span-1 md:flex justify-center items-center">
              <div
                ref={imageRef}
                className="w-[350px] h-[350px] flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "800px",
                }}
              >
                <img
                  src={DNAImage}
                  alt="3D Tech Illustration"
                  className="w-full h-full object-contain drop-shadow-2xl select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Scrolling Indicator */}
          {/* <div className="absolute bottom-18 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-3xl relative">
              <div className="w-1 h-3 bg-cyan-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
            </div>
          </div> */}

          <div
            className={`absolute bottom-18 left-1/2 -translate-x-1/2 animate-bounce ${
              showScrollIndicator ? "" : "hidden"
            }`}
          >
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-3xl relative">
              <div className="w-1 h-3 bg-cyan-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
