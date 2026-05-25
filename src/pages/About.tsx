import { type FunctionComponent } from "react";
import { 
  certifications, 
  education, 
  workExperience, 
  skillsByCategory,
  personalIntro,
} from "@/data/AboutContent";
import { 
  Briefcase, 
  GraduationCap, 
  Scroll, 
  Download, 
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const About: FunctionComponent = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Fullstack Developer
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            {personalIntro}
          </p>
          <div className="h-1 w-20 bg-emerald-400 mx-auto rounded"></div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <Code2 className="mr-3 text-emerald-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div 
                key={category}
                className="bg-slate-700/30 border border-slate-600 rounded-lg p-6"
              >
                <h3 className="font-semibold text-white mb-4 text-lg">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-slate-600 text-gray-200 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <Briefcase className="mr-3 text-emerald-400" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={`work-${index}`} className="bg-blue-900/30 border-l-4 border-blue-400 p-6 rounded-lg">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{work.title}</h3>
                    <p className="text-emerald-400 font-medium">{work.company}</p>
                    <p className="text-sm text-gray-400">{work.period}</p>
                  </div>
                </div>
                {work.skillsUsed && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.skillsUsed.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-blue-700 text-white rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <GraduationCap className="mr-3 text-emerald-400" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={`edu-${index}`} className="bg-amber-900/30 border-l-4 border-amber-400 p-6 rounded-lg">
                <h3 className="font-semibold text-white text-lg">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Scroll className="mr-3 text-emerald-400" />
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-purple-900/20 border-l-4 border-purple-400 p-6 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.period}</p>
                </div>
                {cert.downloadLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={cert.downloadLink} download className="flex items-center gap-2">
                      <Download size={16} />
                      Download
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
