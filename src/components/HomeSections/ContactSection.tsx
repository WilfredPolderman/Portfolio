import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"
import { Link } from "react-router-dom"

export const ContactSection = () => {
    return (
        <section className="bg-gray-100 py-20 px-4">

            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Get in touch</h2>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

                    <a
                        href="https://github.com/WilfredPolderman"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow hover:shadow-md transition"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://be.linkedin.com/in/wilfred-polderman-216935234"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow hover:shadow-md transition"
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow hover:shadow-md transition"
                    >
                        <FaMailBulk />
                        <span>Contact Page</span>
                    </Link>

                </div>

            </div>

        </section>
    )
}