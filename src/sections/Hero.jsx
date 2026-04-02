import herobg from "./bg2.webp";
import ameen from "./ameen.png"
import { Button } from "@/components/Button";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion } from "framer-motion";
import { Cpu, Cog, CircuitBoard, Zap } from "lucide-react";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <img
          src={herobg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

         {/* Content */}
      <div className="container mx-auto px-6 pt-42  relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in animation-delay-200">
                <span className="w-2 h-2 bg-primary rounded-full " />
                Embedded Firmware Engineer • Automotive Systems Specialist
              </span>
            </div>

             {/* Headline */}
            <div className="space-y-10">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl animate-fade-in animation-delay-200">
  Engineering <span className="whitespace-nowrap">
    intelligent <span className="text-primary glow-text">embedded</span>
  </span> systems with
  <span className="font-serif italic font-normal text-white"> precision.</span>
</h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, <span className="text-white">I'm Ameen Mohemmed Bashir</span> — an embedded firmware engineer specializing in automotive systems, motor control, and real-time embedded solutions. I build efficient and reliable firmware for high-performance vehicle systems.
              </p>
            </div>

             {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mt-4">
              <div className="flex flex-nowrap gap-3 mt-4">

  {/* Contact */}
  <a
    href="https://mail.google.com/mail/?view=cm&to=ameenmohemmedbashir@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2.5 text-sm sm:text-base rounded-full border border-white/20 bg-white/5 text-white 
    hover:border-primary hover:bg-primary/10 hover:text-primary 
    transition-all duration-300"
  >
    Contact Me
  </a>

  {/* Download */}
  <a
    href="/ameen_cv.pdf"
    download
    className="px-5 py-2.5 text-sm sm:text-base rounded-full border border-white/20 hover:bg-white/5 hover:text-white 
    hover:border-primary bg-primary/10 text-primary 
    transition-all duration-300"
  >
    Download CV
  </a>

</div>
            </div>

          

<div className="flex gap-8 mt-4 ">
  <FaLinkedin className="text-3xl hover:text-blue-600" />
  <FaInstagram className="text-3xl hover:text-blue-600" />
</div>
          </div>


{/*Right column profile image */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

<div className="relative flex justify-center items-end ">
{/* Floating Icons */}
<Cpu className="absolute top-10 left-10 w-8 h-8 text-white animate-float" />

<Cog className="absolute bottom-24 left-20 w-7 h-7 text-white animate-spin-slow" />

<CircuitBoard className="absolute top-20 right-10 w-8 h-8 text-white animate-float delay-200" />

<Zap className="absolute bottom-16 right-20 w-7 h-7 text-white animate-float delay-500" />

{/* NEW ICONS 👇 */}

<Cpu className="absolute top-40 left-32 w-7 h-7 text-primary/30 animate-float delay-300" />

<Cog className="absolute top-60 right-32 w-6 h-6 text-primary/30 animate-spin-slow" />

<CircuitBoard className="absolute bottom-40 left-10 w-7 h-7 text-primary/40 animate-float delay-700" />

<Zap className="absolute top-32 right-5 w-6 h-6 text-primary/30 animate-float delay-400" />
  
  <div className="absolute w-[300px] h-[300px] bg-primary/30 blur-3xl rounded-full"></div>

  <img 
    src={ameen}
    alt="profile"
    className="relative animate-fade-in animation-delay-200 z-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] object-contain  drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] -translate-y-20 animate-float-strong"
  />

  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>

</div>

  {/* your content */}
</motion.div>



         
        </div>

      </div>

      

    </section>
  );
};