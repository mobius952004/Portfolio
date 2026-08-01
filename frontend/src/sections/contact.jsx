import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    // 'bg-transparent' and 'z-10' ensure the global background video remains visible and properly layered
    <section id="contact" className="relative z-10 min-h-screen bg-transparent flex flex-col justify-center items-center px-6 text-center">
      
      {/* Glassmorphism Container */}
      <div className="max-w-4xl w-full bg-gray-950/40 backdrop-blur-lg border border-gray-800/50 p-12 md:p-20 rounded-3xl shadow-2xl isolate">
        
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 drop-shadow-lg">
          Let's Connect.
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
          Currently open for collaborative projects and roles in full-stack development and AI engineering.
        </p>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          
          <a 
            href="mailto:guptaprannjal2004@gmail.com.com" 
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/60 border border-gray-700 rounded-full hover:bg-purple-900/40 hover:border-purple-500 transition-all duration-300"
          >
            <MdEmail className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-base md:text-lg text-white font-medium">Mail</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/pranjal-gupta-b7a620283/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcHbNBf2iT4OSEMNpJNFKWA%3D%3D" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/60 border border-gray-700 rounded-full hover:bg-purple-900/40 hover:border-purple-500 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-base md:text-lg text-white font-medium">LinkedIn</span>
          </a>

          <a 
            href="https://instagram.com/pranjal_gupta954" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/60 border border-gray-700 rounded-full hover:bg-purple-900/40 hover:border-purple-500 transition-all duration-300"
          >
            <FaInstagram className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-base md:text-lg text-white font-medium">Instagram</span>
          </a>

          <a 
            href="https://discord.com/users/mobius0680" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/60 border border-gray-700 rounded-full hover:bg-purple-900/40 hover:border-purple-500 transition-all duration-300"
          >
            <FaDiscord className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-base md:text-lg text-white font-medium">Discord</span>
          </a>

        </div>
      </div>

    </section>
  );
}