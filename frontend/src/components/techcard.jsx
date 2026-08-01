export default function Techcard({ name, category, description, icon }) {
  return (
    // Reduced min-width and changed p-8 to p-5 for a tighter footprint
    <div className="bg-gray-900/80 backdrop-blur-sm w-[280px] md:w-[350px] p-5 border border-gray-800 rounded-2xl shrink-0 hover:border-purple-500/50 transition-colors flex flex-col">
      
      {/* Header: Icon + Titles */}
      <div className="flex items-center gap-4 mb-3">
        {/* Smaller Icon Container */}
        <div className="text-2xl text-purple-400 bg-gray-950 p-3 rounded-xl border border-gray-800">
          {icon}
        </div>
        
        <div>
          <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">
            {category}
          </span>
          <h5 className="text-lg font-bold text-gray-100">
            {name}
          </h5>
        </div>
      </div>
      
      {/* Description: Smaller text and tighter line height */}
      <p className="text-gray-400 leading-snug text-sm">
        {description}
      </p>

    </div>
  );
}