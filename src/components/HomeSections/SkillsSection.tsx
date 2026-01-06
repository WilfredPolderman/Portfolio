import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { skills } from "@/data/SkillsHomePage"
import { SkillBubble } from "../skill/SkillBubble"

export const SkillsSection = () => {
    return (
        <section className="bg-background py-15 px-4">

            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Core Tech Stack</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {skills.map((skill) => (
                        <SkillBubble
                            key={skill.name}
                            name={skill.name}
                            Icon={skill.icon}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button asChild variant="outline">
                        <Link to="/about">
                            Full Profile
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    )
}