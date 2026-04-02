import { Navbar } from "@/layout/Navbar";
import {Hero} from "@/sections/Hero"
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import {Contact} from "./sections/Contact"
import {Projects} from "./sections/Projects"
import {Skillt} from "./sections/Skillt"
import { Education } from "./sections/Education";

function App() {


  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
      <Hero/>
      </main>
     <About/>
     <Education/>
     <Experience/>
     <Projects/>
     <Skillt/>
     <Contact/>
     
    </div>
  )
}

export default App
