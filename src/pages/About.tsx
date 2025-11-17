import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

/*TODO:
  - Meer gedetailleerde info over mezelf toevoegen
  - Mijn achtergrond, ervaring en interesses beschrijven
  - Link naar socials toevoegen
  - alle skills weergeven
  - Certificaten/opleidingen toevoegen

  Volgorde:
    - Over mij
    - Opleiding
    - Certificaten
    - Skills
*/

export const About: FunctionComponent = () => {
  return (
    <div className="p-8 justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold">About me</h1>
      <p className="mt-4 text-gray-600">This is the about me section of my portfolio.</p>
      <Button className="mt-5">Who dis?</Button>
    </div>
  );
};
