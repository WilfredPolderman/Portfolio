import { type FunctionComponent } from "react";
import { AllProjectsComponent } from "@/components/project/AllProjects";

/*TODO:
  - Project cards opstellen met meer info over elk project
  - Link naar aparte gedetailleerde projectpagina's
  - categorieën of tags voor projecten
  - mogelijke filters voor projecten
  - Gebruikte tools en technologieën weergeven
*/

export const Projects: FunctionComponent = () => {
  return (
      <AllProjectsComponent />
  );
};
