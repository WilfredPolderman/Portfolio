import { type FunctionComponent } from "react";
import { AllProjectsComponent } from "@/components/project/AllProjects";

/*TODO:
  - 2 opties:
    - Filteren op categorieën 
    - Filteren op technologieën
*/

export const Projects: FunctionComponent = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <div className="border-b border-gray-700 mb-12"></div>
        <AllProjectsComponent />
      </div>
    </div>
  );
};
