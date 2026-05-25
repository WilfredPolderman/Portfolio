import { type FunctionComponent } from "react";
import { Mail} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact: FunctionComponent = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in touch</h1>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:wilfredpolderman@gmail.com"
            className="bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400 hover:bg-blue-900/30 transition-all hover:scale-105"
          >
            <Mail className="text-blue-400 mb-3" size={32} />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">Get in touch</p>
          </a>

          <a
            href="https://be.linkedin.com/in/wilfred-polderman-216935234"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400 hover:bg-blue-900/30 transition-all hover:scale-105"
          >
            <FaLinkedin className="text-blue-400 mb-3" size={32} />
            <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/WilfredPolderman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400 hover:bg-blue-900/30 transition-all hover:scale-105"
          >
            <FaGithub className="text-blue-400 mb-3" size={32} />
            <h3 className="font-semibold text-white mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">Check out my work</p>
          </a>
        </div>
      </div>
    </div>
  );
};
