
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGithub, FaLinkedin, FaReact, FaPython } from "react-icons/fa";
// import { SiFastapi } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef();


  useGSAP(() => {
    // 1. Initial Load Animation
    gsap.from(container.current.querySelectorAll(".hero-anim"), {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2
    });

    // 2. Parallax Fade on Scroll (THE FIX)
    // This targets the wrapper containing all your text and icons.
    // As you scroll down, it pushes the content down slightly and fades it to 0.
    gsap.to(".hero-content-wrapper", {
      y: 200, // Pushes it down slowly to create the parallax overlay illusion
      opacity: 0, // Fades it out completely so it doesn't bleed into the next section
      scrollTrigger: {
        trigger: container.current,
        start: "top top", // Starts when you begin scrolling
        end: "bottom center", // Fully faded out by the time you reach the next section
        scrub: true,
      }
    });

    // 3. Floating Icons Animation
    gsap.to(".floating-icon", {
      y: -35,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  // const techStack = [
  //   { name: 'React', icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
  //   { name: 'FastAPI', icon: <SiFastapi className="text-4xl text-[#009688]" /> },
  //   { name: 'LangChain', icon: <FaPython className="text-4xl text-[#3776AB]" /> },
  //   { name: 'Ollama', icon: <BsRobot className="text-4xl text-gray-200" /> }
  // ];

  return (
    <>
      {/* Reverted to relative min-h-screen. The sticky class is GONE. */}
      <section id="hero" ref={container} className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 text-balance overflow-hidden z-0">

        {/* Global Background Video stays fixed */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover opacity-25 pointer-events-none -z-10"
        >
          <source src="videos/about.mp4" type="video/mp4" />
        </video>

        {/* We wrap ALL foreground elements in this div so GSAP can fade them all at once */}
        <div className="hero-content-wrapper relative z-10 w-full h-full flex flex-col justify-center">

          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[150px] pointer-events-none" />

          <div className="w-full max-w-5xl space-y-4">

            <div className="overflow-hidden">
              <h1 className="hero-anim text-purple-500 text-6xl md:text-8xl font-bold">
                FULL STACK
                <br />
                & AI Developer
              </h1>
            </div>

            <div className="overflow-hidden mt-10 md:mt-12">
              <h2 className="hero-anim text-3xl md:text-5xl font-semibold leading-tight text-white max-w-xl">
                <span className="text-purple-400 drop-shadow-lg">Pranjal Gupta</span>,
                <br className="hidden md:block" /> Creating full-stack applications with AI at their core.
              </h2>
            </div>

            <div className="overflow-hidden pt-10">
              <div className="hero-anim flex flex-wrap gap-4">
                <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white rounded-full h-15   px-6 py-4 text-lg transition-colors text-center"  >
                  View Projects
                </a>
                <a href="#contact" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 rounded-full px-6 py-4 text-lg transition-colors bg-transparent">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-anim absolute  left-6 md:left-12 flex gap-6 my-2 text-2xl text-gray-400 z-10">
              <a href="https://github.com/mobius952004" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-transform duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pranjal-gupta-b7a620283/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnSt0kHoPSJuEd07ppBUBiw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:scale-110 transition-transform duration-300">
                <FaLinkedin />
              </a>
              <a href="mailto:guptaprannjal2004@gmail.com.com" className="hover:text-purple-400 hover:scale-110 transition-transform duration-300">
                <MdEmail />
              </a>
            </div>

            {/* <div className="overflow-hidden pt-12">
              <div className="hero-anim flex gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="floating-icon group relative">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-md hover:border-purple-500 hover:bg-purple-900/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer">
                      {tech.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

          </div>




        </div>
       





        <div className="hero-anim absolute bottom-[0] left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 z-10 pointer-events-none">
          <p className="text-sm font-medium tracking-widest mb-2">SCROLL DOWN ONLY</p>
          <CiCircleChevDown className="text-3xl animate-bounce text-purple-500" />
        </div>
      </section>
    </>
  );
}