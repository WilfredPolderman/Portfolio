import { AllProjects } from "@/data/Projects/AllProjects";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

/* TODO:
    -Download button voorzien waar nodig
    
*/

export function ProjectDetailPages() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = AllProjects.find((proj) => proj.slug === slug);

    if (!project) {
        return <div className="text-center text-2xl">Project not found</div>
    }

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center px-4 gap-2 py-2 bg-gray-500 rounded text-white hover:bg-gray-600"
        >
            <ArrowLeft size={20} />
            Go back
        </button>
    )
}