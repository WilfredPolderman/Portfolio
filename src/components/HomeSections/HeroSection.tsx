import { Code, Download, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const HeroSection = () => {
    return (
        <section className="
            py-20 px-4 text-center flex flex-col items-center justify-center
            bg-gradient-to-r 
            from-emerald-400 to-cyan-400 
            dark:from-emerald-900 dark:to-cyan-900
        ">

            <div className="flex gap-2 items-center bg-background/40 rounded-full backdrop-blur-sm px-5 py-3 mb-6">
                <Code className="text-foreground" />
                <h1 className="text-foreground">Welcome to my portfolio!</h1>
                <Code className="text-foreground" />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-foreground">
                I'm Wilfred, a fullstack developer.
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button asChild variant="outline">
                    <a href="/resume.pdf" download>
                        <Download />
                        Download Resume
                    </a>
                </Button>

                <Button asChild variant="outline">
                    <a href="https://be.linkedin.com/in/wilfred-polderman-216935234" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        Linkedin
                    </a>
                </Button>

                <Button asChild variant="outline">
                    <a href="https://github.com/WilfredPolderman" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        Github
                    </a>
                </Button>
            </div>
        </section>
    )
}
