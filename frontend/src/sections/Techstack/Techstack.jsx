import Techcard from "@/components/techcard";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { GrJava ,GrNode } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    id: 1,
    name: "Java",
    category: "",
    description: "Data Structures and algorithm .",
    icon: <GrJava /> 
  },
  {
    id: 1,
    name: "Python",
    category: "",
    description: "Backend and AI/ML.",
    icon: <FaPython /> 
  },
  {
    id: 1,
    name: "JS &Node",
    category: "Bakcend ",
    description: "Backend for Applications.",
    icon: <GrNode /> 
  },
  {
    id: 1,
    name: "React.js",
    category: "Frontend",
    description: "Building responsive, component-driven user interfaces and dynamic single-page applications.",
    icon: <FaReact /> 
  },

  {
    id: 2,
    name: "Flask & FastAPI",
    category: "Backend",
    description: "Developing robust API endpoints, routing, and scalable server-side architecture.",
    icon: <FaPython />
  },
  {
    id: 3,
    name: "Deep Learning",
    category: "AI/ML",
    description: "Implementing CNNs, RNNs, LSTM to Analyze and predict .",
    icon: <FaDatabase />
  },
  {
    id: 4,
    name: "LangChain & Ollama",
    category: "Generative AI",
    description: "Constructing Agentic AI workflows and integrating large language models into production environments.",
    icon: <BsRobot />
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Design",
    description: "Crafting modern, responsive, and maintainable utility-first design systems.",
    icon: <SiTailwindcss />
  }
];

export default function Techstack() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const getScrollAmount = () => {
      let sliderWidth = sliderRef.current.scrollWidth;
      return -(sliderWidth - window.innerWidth + 80); 
    };

    const tween = gsap.to(sliderRef.current, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top", 
      end: () => `+=${getScrollAmount() * -2}`, 
      pin: true, 
      pinSpacing: true, 
      animation: tween,
      scrub: 1,  
      invalidateOnRefresh: true 
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" className="bg-transparent text-gray-200">
      
      <div ref={sectionRef} className="h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Static Header Section */}
        <div className="px-6 md:px-12 mb-8 relative z-10">
          <h2 className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-2">
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white">
            Technical Arsenal.
          </h3>
        </div>

        {/* --- THE LAYOUT CHANGE --- */}
        {/* Replaced flex with CSS Grid: grid-rows-2 and grid-flow-col */}
        <div 
          id="skills-slider" 
          ref={sliderRef} 
          className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 px-6 md:px-12 w-max"
        >
          {skillsData.map((skill) => (
            <Techcard 
              key={skill.id}
              name={skill.name}
              category={skill.category}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  )
}