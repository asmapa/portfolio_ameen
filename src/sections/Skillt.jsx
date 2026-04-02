
import { motion } from "framer-motion";
export const Skillt = () => {
  const skills = [
    "Embedded C",
    "C",
    "C++",
    "Microcontrollers",
    "CAN",
    "UART",
    "SPI",
    "I2C",
    "Motor Control",
    "FOC",
    "PMSM",
    "Real-Time Systems",
    "Debugging",
    "Hardware Integration",
  ];

  return (
    <section id="skills" className="relative py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
 {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-serif italic font-normal text-white mb-12 text-center ">
          Skills
        </h2>
  {/* your content */}
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

    
        {/* Skills Grid */}
        <div className="flex gap-6 flex-wrap py-3 mb-3">
            {skills.map((skill,idx) =>(
                <span
                key={idx}
               className=" text-white px-5 border py-3.5  rounded-full hover:border-amber-600"
                >
                    *{" "}{skill}
                </span>
            ))}
          
        </div>
  {/* your content */}
</motion.div>

       


      </div>
    </section>
  );
};