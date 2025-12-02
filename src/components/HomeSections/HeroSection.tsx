import { Code } from "lucide-react"

export const HeroSection = () => {
    return (
        <section className="
            py-28 px-4 text-center flex flex-col items-center justify-center
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
        </section>
    )
}
