export default function Achievements() {
  const achievementsData = [
    {
      id: 1,
      title: " Online Project based Internship  ",
      issuer: "",
      description: "Mastered foundational deep learning concepts, including CNNs, RNNs, and hyperparameter tuning.",
      image: "/images/cert-1.jpg"
    },
    {
      id: 2,
      title: "IsPa Volunteering",
      issuer: "Indian Space Association ",
      description: "Did a 3 Days Volunteering for Indian DefSpace Symposium , This is a nation event attended by Indian Army , Navy And Air Force ",
      image: "/images/ispa.png"
    },
    {
      id: 3,
      title: "HackaThons",
      issuer: "By the Organizers ",
      description: "Though Not won many , but it is the experience and hustle that counts",
      image: "/images/Nation.png"
    }
  ];

  return (
    // 1. Changed bg-gray-950 to bg-transparent to reveal the global background video
    // 2. Added relative and z-10 to ensure the layout sits strictly above the video layer
    <section id="achievements" className="relative min-h-screen bg-transparent flex items-center justify-center px-6 md:px-12 py-24">
      
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        
        {/* Left Column: Static Title */}
        <div className="flex flex-col justify-center h-full">
          {/* Added drop-shadow-lg to the text to maintain readability over the moving video */}
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Milestones <br />
            <span className="text-gray-400">& Certifications.</span>
          </h2>
          <p className="text-gray-300 mt-6 text-lg max-w-md drop-shadow-md">
            A timeline of my continuous learning and technical validations across AI/ML and web development.
          </p>
        </div>

        {/* Right Column: Internal Scroll Container */}
        <div className="h-[70vh] overflow-y-auto pr-4 space-y-6 pb-20 no-scrollbar">
          
          {achievementsData.map((cert) => (
            // 3. Enforced solid structure on the card using bg-gray-900, shadow-2xl, and isolate
            <div 
              key={cert.id} 
              className="bg-gray-900 shadow-2xl border border-gray-700 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-purple-500 transition-colors opacity-100 isolate"
            >
              
              {/* Certificate Image Placeholder */}
              <div className="w-full md:w-48 h-32 bg-gray-950 border border-gray-800 rounded-xl flex items-center overflow-hidden justify-center shrink-0">
                 <img src={cert.image} className="" alt="! Error"/>
              </div>
              
              {/* Text Content */}
              <div>
                <h4 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-1">
                  {cert.issuer}
                </h4>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}