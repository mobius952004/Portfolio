import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function NavBar() {
  return (
    // The wrapper uses pointer-events-none so the invisible space between items doesn't block clicks on the background.
    <header className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center w-full max-w-7xl mx-auto pointer-events-none">
      
      {/* Left: Logo/Welcome */}
      {/* pointer-events-auto makes just this specific block clickable again */}
      <div className="pointer-events-auto">
        <a 
          href="#hero" 
          className="flex items-center bg-gray-950/60 backdrop-blur-md border border-gray-800/80 px-6 py-2.5 rounded-full text-white font-bold tracking-widest text-sm hover:border-purple-500/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300"
        >
          PRANJAL.
        </a>
      </div>

      {/* Center: Main Navigation (Hidden on small screens to prevent overlap) */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-8 bg-gray-950/60 backdrop-blur-md border border-gray-800/80 px-8 py-3 rounded-full shadow-2xl">
        <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          About
        </a>
        <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          Projects
        </a>
        <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          Skills
        </a>
        <a href="#achievements" className="text-sm font-medium text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          Achievements
        </a>
        <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          Contact
        </a>
      </nav>

      {/* Right: Action Button */}
      <div className="pointer-events-auto">
        <Button asChild className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-6 py-5 border border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-0.5">
         <a href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
      <Download className="mr-2 h-4 w-4" />
      Resume
         </a>
        </Button>
      </div>

    </header>
  );
}