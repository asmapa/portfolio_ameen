
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Vehicle Control System (2W/3W/4W)",
      description:
        "Developed and tested vehicle control logic including forward, reverse, and regenerative modes. Implemented CAN communication and modified DBC files for system integration.",
      tech: ["Embedded C", "CAN", "Microcontrollers"],
    },
    {
      title: "IPMSM Motor Controller",
      description:
        "Implemented Field-Oriented Control (FOC) for IPMSM motors. Performed tuning and testing for performance optimization across multiple operating modes.",
      tech: ["FOC", "PMSM", "Motor Control"],
    },
    {
      title: "Hub Motor Controller",
      description:
        "Developed interface for UVW hall sensors to accurately detect rotor position and improve motor control efficiency.",
      tech: ["Embedded C", "Hall Sensors", "Motor Control"],
    },
    {
      title: "Induction Motor Controller",
      description:
        "Built interface for ABZ encoders and enhanced rotor speed detection for improved system accuracy.",
      tech: ["Encoders", "Embedded Systems", "Control Systems"],
    },
  ];

  return (
    <section id="projects" className="relative  overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10">

        <motion.div
         initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
{/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-float-strong">
  {projects.map((proj, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition"
    >
      <h3 className="text-xl font-semibold text-white mb-3">
        {proj.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        {proj.description}
      </p>

      <div className="flex flex-wrap gap-2 ">
        {proj.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>

  {/* your content */}
</motion.div>
        
        

      </div>
    </section>
  );
};