import {motion} from "framer-motion"

export const Education = (() => {
    return (
        <section id="education" className="relative overflow-hidden ">
            <div className="container mx-auto px-6">

 <h1 className="py-6 my-4 text-2xl">Education </h1>
               <h2
  className="text-4xl md:text-5xl font-bold
  mt-4 mb-6 animate-fade-in animation-delay-100
  text-gray-400"
>
  Education {" "}
  <span className="font-serif italic font-normal text-white">
    {" "}
   that built the foundation.
  </span>
</h2>

<p className="text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
  My academic journey in electronics and communication laid a strong foundation in embedded systems, control engineering, and hardware-software integration. It shaped my ability to design efficient, real-time solutions for complex engineering problems.
</p>


<div className="grid md:grid-cols-2 gap-8 py-10 animate-float-strong">

  {/* BTech */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition"
  >
    <h3 className="text-xl font-semibold text-white mb-2">
      <span className="text-primary">B.Tech</span> Electronics & Communication Engineering
    </h3>

    <p className="text-sm text-muted-foreground mb-2">
      Rajiv Gandhi Institute of Technology, Kottayam
    </p>

    <p className="text-xs text-muted-foreground">
      2019 – 2022
    </p>

    <p className="mt-4 text-sm text-green-400 font-medium">
      Course Completed
    </p>
  </motion.div>

  {/* Diploma */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition"
  >
    <h3 className="text-xl font-semibold text-white mb-2">
      <span className="text-primary">Diploma</span> Electronics & Communication Engineering
    </h3>

    <p className="text-sm text-muted-foreground mb-2">
      Model Polytechnic College, Kottayam
    </p>

    <p className="text-xs text-muted-foreground">
      2016 – 2019
    </p>

    <p className="mt-4 text-sm text-green-400 font-medium">
      GPA: 8.1
    </p>
  </motion.div>

</div>





 
               
            </div>
        </section>

    )
})