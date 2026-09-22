
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

// Register the plugin globally
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    
    // 1. Text Block Reveal (Staggered appearance)
    gsap.from(".scroll-reveal", {
      y: 60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3, // Delays the start of the next block by 0.3s
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when the top of section is 25% up from the bottom
      }
    });

    // 2. Dynamic Scroll Line (Draws downward as you scroll)
    gsap.fromTo(".scroll-line", 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center", // Starts drawing when section hits middle of screen
          end: "bottom center", // Finishes drawing when section leaves middle
          scrub: true, // Ties the animation directly to the scrollbar
        }
      }
    );

    // 3. Parallax Background Element (Moves up and rotates while scrolling)
    gsap.to(".parallax-bg", {
      y: -500,
      rotation: 25,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: sectionRef });

  return (
    // Changed to a very dark purple/gray to match the modern dark theme 
    // while keeping the sticky overlay effect smooth.
    <section id="about" ref={sectionRef} className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-gray-950 text-gray-200 px-6 md:px-12 overflow-hidden border-t border-purple-900/30">
      
      {/* --- SCROLL-DRIVEN BACKGROUND ELEMENT --- */}
      <div className="parallax-bg absolute right-[-10%] top-[20%] w-[500px] h-[500px] border-2 border-purple-500 rounded-2xl pointer-events-none" />
      <div className="parallax-bg absolute right-[-5%] top-[35%] w-[300px] h-[300px] border border-purple-500 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[40%] top-[60%] w-[500px] h-[500px] border-2 border-purple-500/50 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[45%] top-[65%] w-[300px] h-[300px] border border-purple-500/50 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[80%] top-[-40%] w-[500px] h-[500px] border-2 border-purple-500 rounded-2xl pointer-events-none" />

     
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-20 relative z-10">
        
        {/* --- LEFT COLUMN: Scroll Line & Section Title --- */}
        <div className="flex md:flex-col gap-6 items-start md:w-1/5">
          <h3 className="scroll-reveal text-purple-400 font-bold tracking-widest uppercase text-sm mt-2">
            About Me
          </h3>
          
          {/* The structural scroll line track */}
          <div className="hidden md:block w-px h-full bg-gray-800 relative ml-4">
            {/* The actual line that grows */}
            <div className="scroll-line absolute top-0 left-0 w-full h-full bg-purple-500" />
          </div>
        </div>

        {/* --- RIGHT COLUMN: The Text Blocks --- */}
        <div className="  flex-1 space-y-12 text-2xl md:text-4xl font-medium leading-tight text-balance">
          
          {/* Block 1 */}
          <div className=" overflow-hidden p-1">
            <p className="scroll-reveal text-white">
              I'm a Computer Science student specializing in AI & Machine Learning with a strong interest in software engineering. I enjoy building intelligent systems that combine AI capabilities with robust backend architecture and modern web applications to solve real-world problems.
            </p>
          </div>
          
          {/* Block 2 */}
          <div className="overflow-hidden p-1">
            <p className="scroll-reveal text-gray-400">
             Over the years, I've worked on projects spanning agentic AI, RAG systems, large language models, machine learning, and full-stack development. My experience includes building multi-agent platforms, AI-powered developer tools, real-time applications, and scalable APIs using technologies such as React, Node.js, FastAPI, MongoDB, vector databases, and modern AI frameworks. I enjoy understanding systems end-to-end—from data flow and backend services to user experience and AI integration.
            </p>
          </div>
          
          {/* Block 3 */}
          <div className="overflow-hidden ">
            <p className="scroll-reveal text-gray-500 text-xl md:text-2xl mt-4">
              Currently, I'm focused on deepening my knowledge of distributed systems, scalable backend architecture, retrieval systems, and AI agents. I enjoy tackling challenging problems, learning new technologies quickly, and building products that combine strong engineering principles with practical impact.
            </p>
          </div>
          
        </div>

      </div>

    </section>
  );
}