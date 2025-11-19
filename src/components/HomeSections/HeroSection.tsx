import { Code } from "lucide-react"

/*TODO:
- Bewegende tekst
*/
export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 flex flex-col items-center justify-center py-28 px-4 text-center">

            <div className="flex gap-2 items-center bg-white/20 rounded-full backdrop-blur-sm px-5 py-3 mb-6">
                <Code />
                <h1>Welcome to my portfolio!</h1>
                <Code />
            </div>

            <div>
                <h1 className="text-4xl font-bold mb-4">
                    I'm Wilfred, a fullstack developer.
                </h1>
            </div>

        </section>
    )
}