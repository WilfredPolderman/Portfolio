import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import type { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

export const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}