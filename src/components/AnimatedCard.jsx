import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedCard = ({ image, title, description }) => {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.set(cardRef.current, {
      clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.to(cardRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      duration: 0.7,
      ease: "power2.inOut",
      paused: true,
      repeat: 1,
      yoyo: true,
      // Trigger on hover
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <div
      ref={cardRef}
      className="w-80 h-56 bg-slate-800 overflow-hidden shadow-lg relative group"
      style={{
        transition: "box-shadow 0.3s",
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/80 to-transparent p-4">
        <h4 className="text-white text-lg font-bold">{title}</h4>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
