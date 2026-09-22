import ProjectCard from "@/components/ProjectCard";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Connect -Chat Application ",
            description: `• Built a full-stack real-time messaging platform using React, Node.js, Express, MongoDB, and Socket.IO supporting
private conversations, persistent chat history, and live message delivery
• Implemented JWT-based authentication with access and refresh tokens, secure session management, room-based
messaging architecture, and automatic socket reconnection handling
• Designed scalable REST APIs and MongoDB schemas for user management, chat creation, message storage, and
conversation retrieval `,
            tech: ["Socket-io", "JWT- Authentication ", "React", "Node", "Tailwind CSS"],
            link: "https://github.com/mobius952004/connect_through_chat",
            image: "/images/connect.png"
        },
        {
            id: 2,
            title: "AI vs Human Voice Analysis system ",
            description: "A Deep learning  based system that is trained to analyze AI and Human voices and represent results using PCA, SVM , random Forest and 3D Vizualizations for better understand , This research based project aims to make AI voic MORE HUMAN .",
            tech: ["CNN", "Embeddings", "TensorFlow", "Keras", "RNN"],
            link: "https://github.com/yourusername/voice-analysis",
            image: "/images/Voice.png"
        },
        {
            id: 3,
            title: "Multi-Agent System for Interview Preparation",
            description: "Built and deployed a multi-agent interview preparation platform using LangGraph, LangChain, FastAPI, Groq, Gemini, and ChromaDB, serving AI-powered question generation and answer synthesis workflows.---Implemented Retrieval-Augmented Generation (RAG), vector search, embedding pipelines, and agent orchestration to provide context-aware interview preparation from user-provided documents.",
            tech: ["RAG", "LangChain","LangGraph","Multi_Agent-System","DuckDuckGo", "GEN AI", "React", "FastApi"],
            live: "https://doc-mind-ai-topaz.vercel.app/",
            link: "https://github.com/mobius952004/DocMind_AI",
            image: "/images/DocMind.png"
        },
        {
            id: 4,
            title: "Repository Aware , Coding- review agent ",
            description: "Developed a CLI-based coding assistant using LangChain, Ollama, ChromaDB, and Retrieval-Augmented Generation (RAG) to answer questions over entire code repositories -----Implemented repository indexing, semantic code retrieval, file search, directory exploration, and code-editing tools for efficient codebase navigation",
            tech: ["RAG", "LangChain",,"Multi_Agent-System", "GEN AI", "CLI", "Ollama"],
            // live: "https://doc-mind-ai-topaz.vercel.app/",
            link: "https://github.com/mobius952004/Coding_agent"
        },

    ];

const sectionRef = useRef(null);
const sliderRef = useRef(null);

useGSAP(() => {
    // Calculate total scrollable width
    const getScrollAmount = () => {
        if (!sliderRef.current) return 0;
        let sliderWidth = sliderRef.current.scrollWidth;
        return Math.max(0, sliderWidth - window.innerWidth + 120);
    };

    // REVERSE MOTION: Start off-screen to the left, move back to 0 (sliding right)
    const tween = gsap.fromTo(sliderRef.current,
        { x: () => -getScrollAmount() },
        { x: 0, ease: "none" }
    );

    ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${Math.max(getScrollAmount() * 1.5, 1200)}`,
        pin: true,
        pinSpacing: true, // Forces proper layout spacing below the section
        animation: tween,
        scrub: 1.5,
        invalidateOnRefresh: true
    });


    // gsap.to(".parallax-bg", {
    //   y: -500,
    //   rotation: 25,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   }
    // });



}, { scope: sectionRef });




return (
    // Clean container without sticky or arbitrary heights
    <section id="projects" ref={sectionRef} className="relative bg-gray-950 text-gray-200">

        
        <div className="h-screen flex flex-col justify-center overflow-hidden">

             {/* <div className="parallax-bg absolute right-[-10%] top-[20%] w-[500px] h-[500px] border-2 border-purple-500 rounded-2xl pointer-events-none" />
      <div className="parallax-bg absolute right-[-5%] top-[35%] w-[300px] h-[300px] border border-purple-500 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[40%] top-[60%] w-[500px] h-[500px] border-2 border-purple-500/50 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[45%] top-[65%] w-[300px] h-[300px] border border-purple-500/50 rounded-full pointer-events-none" />
      <div className="parallax-bg absolute right-[80%] top-[-40%] w-[500px] h-[500px] border-2 border-purple-500 rounded-2xl pointer-events-none" /> */}


            {/* Section Header */}
            <div className="px-6 md:px-12 mb-10 relative z-10 text-right">
                <h2 className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-2">
                    Featured Work
                </h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                    Project Portfolio.
                </h3>
                <p className="text-gray-400 mt-2">Swipe right to explore</p>
            </div>

            {/* The sliding row */}
            <div
                id="projects-slider-reverse"
                ref={sliderRef}
                className="flex flex-nowrap gap-6 md:gap-8 px-6 md:px-12 w-max"
            >
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        live={project?.live}
                        link={project.link}
                        image={project.image}
                    />
                ))}
            </div>
        </div>

    </section>
)
}