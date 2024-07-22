import ProjectCard from "../components/ProjectCard";
import todoListLogo from "/proj-logos/todo-list-logo.jpg";

const projects = [
    {
        name: "To-Do List",
        description: "This To-Do List application is a simple JavaScript-based task manager allowing users to add, remove, and mark tasks as completed.",
        url: "https://github.com/JagnaJ/todo-list-peach",
        imgUrl: todoListLogo,
    },
    {
        name: "Resume",
        description: "This project is a simple, clean, and professional online resume built using HTML and CSS, following the BEM methodology for naming conventions. The resume includes sections for personal information, work experience, education, and skills.",
        url: "https://html-css-resume.netlify.app/",
        imgUrl: "../proj-logos/resume-logo.jpg",
    },
    {
        name: "Library Manager",
        description: "A simple web application for managing a library with books and authors.",
        url: "https://library-manager-proj.netlify.app/",
        imgUrl: "../proj-logos/library-manager-logo.jpg",
    },
    {
        name: "Blog Landing Page API",
        description: "This project is a static blog landing page built using HTML, CSS, JavaScript and API. It includes a layout for displaying blog posts and a modal window for viewing detailed content.",
        url: "https://landing-page-api.netlify.app/",
        imgUrl: "../proj-logos/blogAPI-logo.jpg",
    },
    {
        name: "Dashboard layout",
        description: "This project provides a user interface for managing tasks and projects in a dashboard format using only HTML and CSS.",
        url: "https://web-layout-dashboard.netlify.app/",
        imgUrl: "../proj-logos/dashboard-layout-logo.jpg",
    },
];

const Projects = () => {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1>
            <ul className="bg-white text-left rounded-xl p-4">
                {projects.map((project, i) => (
                    <li key={i}>
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        imgUrl={project.imgUrl}
                    />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Projects;