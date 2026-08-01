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
            description: "A Multi chat  where user can start a conversation with anyone without Mobile Number, Createt groups or start a private chat  . It uses JWT-Authentication with  Moving Tokens- changing every 5 Min ",
            tech: ["Socket-io","JWT- Authentication ","React", "Node", "Tailwind CSS"],
            link: "https://github.com/mobius952004/connect_through_chat",
            image: "/images/connect.png"
        },
        {
            id: 2,
            title: "AI vs Human Voice Analysis system ",
            description: "A Deep learning  based system that is trained to analyze AI and Human voices and represent results using PCA, SVM , random Forest and 3D Vizualizations for better understand , This research based project aims to make AI voic MORE HUMAN .",
            tech: ["CNN", "Embeddings", "TensorFlow","Keras","RNN"],
            link: "https://github.com/yourusername/voice-analysis",
            image: "/images/Voice.png"
        },
        {
            id: 3,
            title: "DocMind- RAG Interview question generator ",
            description: "A RAG based  AI application that  let user generate interview questiions based on the Document uploaded . It makes use of  Vector storage , Embeddings , Similarity serch , Segmentation , , Retrival and Generation ",
            tech: ["RAG", "LangChain","GEN AI","React","FastApi"],
            live:"https://doc-mind-ai-topaz.vercel.app/",
            link: "https://github.com/mobius952004/DocMind_AI",
            image: "/images/DocMind.png"
        }
    ];

    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        // Calculate total scrollable width
        const getScrollAmount = () => {
            let sliderWidth = sliderRef.current.scrollWidth;
            return sliderWidth - window.innerWidth + 80; 
        };

        // REVERSE MOTION: Start off-screen to the left, move back to 0 (sliding right)
        const tween = gsap.fromTo(sliderRef.current, 
            { x: () => -getScrollAmount() }, 
            { x: 0, ease: "none" }
        );

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount()}`, 
            pin: true,
            pinSpacing: true, // Forces proper layout spacing below the section
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true
        });
    }, { scope: sectionRef });

    return (
        // Clean container without sticky or arbitrary heights
        <section id="projects" className="bg-gray-950 text-gray-200">
            
            <div ref={sectionRef} className="h-screen flex flex-col justify-center overflow-hidden">

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
                            link={project.link}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}