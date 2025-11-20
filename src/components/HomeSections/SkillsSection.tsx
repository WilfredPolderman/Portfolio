import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { SkillCard } from "../skill/SkillCard"
import { skills } from "@/data/Skills/SkillsHomePage"

export const SkillsSection = () => {
    return (
        <section className="bg-gray-50 py-20 px-4">

            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Main Skills</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            Icon={skill.icon}
                        />
                    ))}
                </div>

                <div>
                    <Link to="/about">
                        <Button className="mt-10 mx-auto block">See All Skills</Button>
                    </Link>
                </div>
            </div>

        </section>
    )
}