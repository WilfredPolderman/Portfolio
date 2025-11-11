import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

export const Home: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg mb-8">This is a simple example of a Tailwind CSS styled component.</p>
      
      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
};
