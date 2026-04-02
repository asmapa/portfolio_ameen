import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s <span className="text-primary">Connect</span>
        </h2>

        {/* Message */}
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          I'm always open to discussing new opportunities, collaborations, or
          innovative projects in embedded systems and automotive technology.
          Feel free to reach out — I’d love to connect!
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=ameenmohemmedbashir@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <FaEnvelope className="text-primary" />
            <span>Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-primary" />
            <span>LinkedIn</span>
          </a>

        </div>

      </div>
      <div className="absolute bottom-0 text-center w-full text-muted-foreground">
          © 2026 Asma P A • asmapa.dev@gamil.com
      </div>
    </section>
  );
};