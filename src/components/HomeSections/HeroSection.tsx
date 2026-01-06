import { Terminal, Download} from "lucide-react"
import { Button } from "../ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

// CV in het Engels maken?

export const HeroSection = () => {
    return (
        <section className="
            py-20 px-4 text-center flex flex-col items-center justify-center
            bg-linear-to-r 
            from-emerald-400 to-cyan-400 
            dark:from-emerald-900 dark:to-cyan-900
        ">

            <div className="mb-5 animate-bounce">
                <Terminal size={45} />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-foreground">
                Wilfred Polderman
            </h1>

            <h2 className="text-2xl text-foreground">
                Full-Stack developer based in Antwerp, Belgium
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-5">
                <Button asChild variant="outline" size="lg">
                    <a href="/downloads/WilfredPoldermanResume.pdf" download>
                        <Download />
                        Download Resume
                    </a>
                </Button>

                <Button asChild variant="outline" size="lg">
                    <a href="https://be.linkedin.com/in/wilfred-polderman-216935234" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        Linkedin
                    </a>
                </Button>

                <Button asChild variant="outline" size="lg">
                    <a href="https://github.com/WilfredPolderman" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        Github
                    </a>
                </Button>
            </div>
        </section>
    )
}
