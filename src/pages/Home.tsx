import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

export const Home: FunctionComponent = () => {
  return (
    <div className="p-8 justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="mt-4 text-gray-600">Homepage</p>
    </div>
  );
};
