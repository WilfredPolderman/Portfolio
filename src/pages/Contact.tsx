import { type FunctionComponent } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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

        <section className="bg-card p-8 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="text-emerald-400" size={24} />
            <p className="text-muted-foreground">Based in Antwerp, Belgium</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
          
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};
