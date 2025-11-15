import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

export const Projects: FunctionComponent = () => {
  return (
    <div className="p-8 justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold">What I Worked On</h1>
      <p className="mt-4 text-gray-600">Here are some of the projects I've worked on:</p>
      <Button className="mt-5">View Projects</Button>
    </div>
  );
};
