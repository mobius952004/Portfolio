import About from "./sections/about/About"
import Achievements from "./sections/Achievements/Achievements"
import Hero from "./sections/Hero/Hero"
import Contact from "./sections/contact"
import Techstack from "./sections/Techstack/Techstack"
import Projects from "./sections/Projects/Projects"
import NavBar from "./components/NavBar"
import SmoothScroll from "@/SmoothScroll"
import { Button } from "@/components/ui/button"
import { BsRobot } from "react-icons/bs"
import { useState } from "react"
import AIChat from "./AI/aiChat"



function App() {
    const [aiOn , setAiOn]= useState(false);
    // console.log(aiOn)

      const [messages, setMessages] = useState([
          {
              role: "assistant",
              id: "welcome-msg",
              content: "Hi! I am Pranjal's portfolio assistant. You can ask me about his full-stack applications, deep learning projects, or technical skills."
          }
      ]);

  return (
    <>
    <SmoothScroll>

      <NavBar></NavBar>

      <main className=" flex  flex-col  ">




         <div className="fixed bottom-6 right-6 z-20 pointer-events-auto">
                  <Button type="button" onClick={()=>setAiOn(!aiOn)} className="floating-icon group relative flex items-center justify-center w-14 h-14 bg-purple-600/80 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50 cursor-pointer hover:bg-purple-500 hover:scale-110 transition-all duration-300">
        
                    <BsRobot className="text-2xl text-white" />
        
                    {/* Tooltip that appears on hover */}
                    <span className="absolute right-16 px-3 py-1 bg-gray-900 border border-gray-700 rounded-lg text-xs font-bold text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      Ask AI About me 
                    </span>
        
                  </Button>
                </div>
          {
            aiOn && <div className=" fixed z-10 right-4 bottom-25 max-h-[1000px] max-w-[500px]   bg-gray-900  border-2 rounded-2xl border-purple-600 shadow-2xl shadow-purple-400 ">
             <AIChat messages={messages} setMessages={setMessages} onClose={() => setAiOn(false)}></AIChat>
                  

            </div>

            
          }


        <Hero></Hero>

        <About>
        </About>

        <Techstack></Techstack>
        <Projects></Projects>



        <Achievements>

        </Achievements>


        <Contact></Contact>

      </main>
    </SmoothScroll>
    </>
  )
}

export default App
