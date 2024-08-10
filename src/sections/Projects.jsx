import ProjectCard from "../components/ProjectCard";
import todoListLogo from "/proj-logos/todo-list-logo.jpg";
import resumeLogo from "/proj-logos/resume-logo.jpg";
import libraryManagerLogo from "/proj-logos/library-manager-logo.jpg";
import blogLogo from "/proj-logos/blogAPI-logo.jpg";
import dashboardLogo from "/proj-logos/dashboard-layout-logo.jpg";
import petBreedLogo from "/proj-logos/pet-breed-logo.jpg";

const projects = [
    {
        name: "Pet Breed Explorer",
        description: "Pet Breed Explorer is a web application built with Next.js, TypeScript, Tailwind CSS and Redux Toolkit.",
        url: "https://pet-breed-explorer-silk.vercel.app/",
        imgUrl: petBreedLogo,
    },
    {
        name: "To-Do List",
        description: "This To-Do List application built with is a JavaScript-based task manager allowing users to add, remove, and mark tasks as completed. (OOP, DOM Manipulation, Local Storage, Event Handling)",
        url: "https://github.com/JagnaJ/todo-list-peach",
        imgUrl: todoListLogo,
    },
    {
        name: "Resume",
        description: "This project is a simple, clean, and professional online resume built using HTML and CSS, following the BEM methodology for naming conventions. The resume includes sections for personal information, work experience, education, and skills.",
        url: "https://html-css-resume.netlify.app/",
        imgUrl: resumeLogo,
    },
    {
        name: "Library Manager",
        description: "A web app built with HTML, CSS, JS in which users can add, view, update, and delete books, filter the list of books by title or author, and export the list of books. Data is stored in the browser's local storage.",
        url: "https://library-manager-proj.netlify.app/",
        imgUrl: libraryManagerLogo,
    },
    {
        name: "Blog Landing Page API",
        description: "This project is a static blog landing page built using HTML, CSS, JavaScript and API. It includes a layout for displaying blog posts and a modal window for viewing detailed content.",
        url: "https://landing-page-api.netlify.app/",
        imgUrl: blogLogo,
    },
    {
        name: "Dashboard layout",
        description: "This project provides a user interface for managing tasks and projects in a dashboard format using only HTML and CSS.",
        url: "https://web-layout-dashboard.netlify.app/",
        imgUrl: dashboardLogo,
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