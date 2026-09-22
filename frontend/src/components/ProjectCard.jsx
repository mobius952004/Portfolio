import { FaGithub,FaLink } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, live,link,image }) {
  return (
    // Reduced overall width and padding to make the card more compact
    <div className="bg-gray-900/80 backdrop-blur-sm w-[300px] md:w-[380px] p-5 border border-gray-800 rounded-2xl shrink-0 flex flex-col hover:border-purple-500/50 transition-colors">
      
      {/* Image Placeholder - Height reduced from h-56 to h-36 */}
      <div className="bg-gray-800 h-36 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img src={image} alt="Description of image"/>
      </div>
      
      {/* Content - Tighter typography */}
      <h3 className="text-xl font-bold text-gray-100 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-5 flex-grow leading-relaxed">
        {description}
      </p>
      
      {/* Tech Stack Tags - Scaled down for a cleaner look */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((skill, index) => (
          <span 
            key={index} 
            className="text-[10px] font-semibold bg-purple-900/30 text-purple-300 px-2.5 py-1 rounded-full uppercase tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex flex-row justify-between ">

      <div className="mt-auto flex  ">
        {live &&(

          <a 
          href={live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 text-white px-2 py-2 rounded-4xl transition-colors text-sm font-medium border border-gray-700 hover:border-purple-500"
          >
          <FaLink className="text-lg" />
          <span>Live Demo</span>
        </a>
        )}
      </div>
      <div className="mt-auto flex">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-gray-700 hover:border-purple-500"
        >
          <FaGithub className="text-lg" />
          <span>Source Code</span>
        </a>
      </div>
      
      </div>
    </div>
  )
}