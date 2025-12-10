import { AllProjects } from "@/data/Projects/AllProjects";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export function ProjectDetailPages() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = AllProjects.find((proj) => proj.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900">
                <div className="text-center text-2xl dark:text-gray-200">Project not found</div>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 flex items-center px-4 gap-2 py-2 bg-gray-500 rounded text-white hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                    <ArrowLeft size={20} />
                    Go back
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        <ArrowLeft size={20} /> Back
                    </button>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg dark:shadow-2xl mb-8"
                />

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                </h1>
                
                {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                    {project.fullDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    {project.link && project.link !== `/projects/${slug}` && (
                        <Button asChild>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink size={18} /> Visit Project
                            </a>
                        </Button>
                    )}

                    {project.showDownloadButton && project.downloadLink && (
                        <Button asChild variant="secondary">
                            <a
                                href={project.downloadLink}
                                download
                            >
                                <Download size={18} /> Download
                            </a>
                        </Button>
                    )}

                    {project.githubLink && (
                        <Button asChild variant="outline">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={18} /> GitHub
                            </a>
                        </Button>
                    )}
                </div>
            </main>
        </div>
    )
}