import { type FunctionComponent } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { skills } from "@/data/SkillsHomePage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Home: FunctionComponent = () => {
  return (
    <>
      {/* Hero section 
      TODO:
        - Bewegende tekst toevoegen?
      */}
      <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 flex flex-col items-center justify-center py-30 px-4 text-center">

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

      {/* Skills Section */}
      <section className="bg-gray-50 py-20 px-4">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Main Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <Card
                  key={skill.name}
                  className="p-4 w-full max-w-sm rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <CardHeader className="flex items-center gap-4">
                    <Icon className="h-10 w-10 text-blue-800" />
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          <div>
            <Link to="/about">
              <Button className="mt-10 mx-auto block">See All Skills</Button>
            </Link>
          </div>
        </div>

      </section>

      {/* Project highlight section */}
      <section className="bg-white py-20 px-4">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          </div>

          <div>
            <Link to="/projects">
              <Button className="mt-10 mx-auto block">See All Projects</Button>
            </Link>
          </div>

        </div>

      </section>

      {/* Contact section 
      TODO:
        - Contactformulier toevoegen? Let hier op spam beveiliging!!
        - Github & Linkedin link toevoegen
      */}
      <section className="bg-white py-20 px-4">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

          <div>

          </div>

        </div>

      </section>



    </>
  );
};
