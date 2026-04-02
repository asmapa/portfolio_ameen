import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
const highlights = [
  {
    icon: Code2,
    title: "Embedded Development",
    description:
      "Developing efficient firmware using C and embedded systems principles.",
  },
  {
    icon: Rocket,
    title: "Real-Time Performance",
    description:
      "Optimizing systems for speed, reliability, and real-time constraints.",
  },
  {
    icon: Users,
    title: "Hardware Integration",
    description:
      "Bridging hardware and software through seamless system integration.",
  },
  {
    icon: Lightbulb,
    title: "Motor Control",
    description:
      "Implementing and tuning motor control algorithms like FOC for automotive systems.",
  },
];

export const About = () => {
  return (
    <section id="about" className=" relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-25 items-center ">



        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

   {/* Left Column */}
          <div className="space-y-10 py-20">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-2xl font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-red-800">
  Engineering intelligent systems,
  <span className="font-serif italic font-normal text-white">
    {" "}
    powering automotive innovation.
  </span>
</h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
    I'm an embedded firmware engineer with hands-on experience in developing real-time systems for automotive applications. My journey began with a deep interest in electronics and low-level programming, which evolved into building efficient and reliable firmware for modern vehicle systems.
  </p>
  <p>
    I specialize in embedded C, microcontroller-based systems, and motor control algorithms, including Field-Oriented Control (FOC). I have worked extensively with communication protocols like CAN and interfacing with sensors such as encoders and hall sensors.
  </p>
  <p>
    I focus on optimizing performance, ensuring system reliability, and bridging the gap between hardware and software. I enjoy solving complex engineering problems and continuously exploring new technologies in embedded and automotive domains.
  </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                 "My mission is to build reliable and efficient embedded systems that power next-generation automotive solutions."
  </p>
              
            </div>
          </div>
  {/* your content */}





</motion.div>

          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

     {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-10 animate-float-strong">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className=" p-6  animate-fade-in border-2 border-amber-50 rounded-2xl"
                
              >
               
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  {/* your content */}
</motion.div>



       




        </div>
      </div>
    </section>
  );
};