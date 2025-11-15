import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

export const Contact: FunctionComponent = () => {
  return (
    <div className="p-8 justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold">Get in Touch</h1>
      <p className="mt-4 text-gray-600">I'd love to hear from you!</p>
      <Button className="mt-5">Contact Me</Button>
    </div>
  );
};
