import { type FunctionComponent } from "react";
import { certifications, education, workExperience } from "@/data/AboutContent";
import { Briefcase, GraduationCap, Scroll, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/*TODO:
  - Meer gedetailleerde info over mezelf toevoegen
  - Mijn achtergrond, ervaring en interesses beschrijven
  - Link naar socials toevoegen
  - alle skills weergeven

  Volgorde:
    - Over mij
    - Opleiding
    - Certificaten
    - Skills
*/

export const About: FunctionComponent = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="">Fullstack Developer</p>
          <div className="h-1 w-20 bg-emerald-600 dark:bg-emerald-400 mt-6 rounded"></div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            <Briefcase className="inline mb-1 mr-2 text-emerald-600 dark:text-emerald-400" />
            Work Experience</h2>
          <div>
            {workExperience.map((work, index) => (
              <article key={index} className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                <h3 className="font-semibold text-gray-900 dark:text-white">{work.title} - {work.company}</h3>
                <p className="text-sm">{work.period}</p>
                {work.description && <p className="mt-2">{work.description}</p>}
              </article>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            <GraduationCap className="inline mb-1 mr-2 text-emerald-600 dark:text-emerald-400" />
            Educations
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <article key={index} className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-600 dark:border-amber-400">
                <h3 className="font-semibold text-gray-900 dark:text-white">{edu.title}</h3>
                <p className="text-sm">{edu.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            <Scroll className="inline mb-1 mr-2 text-emerald-600 dark:text-emerald-400" />
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <article key={index} className="mb-6 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-600 dark:border-purple-400 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-sm">{cert.issuer}</p>
                <p className="text-sm">{cert.period}</p>
              </div>
              {cert.downloadLink && (
                <Button asChild size="sm">
                  <a href={cert.downloadLink} download>
                    <Download />
                    Download
                  </a>
                </Button>
              )}
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills
          </h2>
          <p>For a detailed overview of my skills, please visit the Skills section.</p>
        </section>
        
      </div>
    </div>
  );
};
