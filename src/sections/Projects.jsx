import ProjectCard from '../components/ProjectCard';
import LotosLogo from '../../proj-logos/lotos.png';
import MikrotikLogo from '../../proj-logos/mikrotik.png';
import CompliaceCheckLogo from '../../proj-logos/complianceCheck.png';

const projects = [
    {
        name: 'Lotos.io',
        description:
            'Platform for analyzing cryptocurrency tokens: prices, charts, audits, and risk metrics. I worked as a Software Developer (React + TypeScript) on components for token listing, filtering, and security labels.',
        url: 'https://lotos.io/en',
        imgUrl: LotosLogo,
    },
    {
        name: 'EU Act Compliance Check',
        description:
            'An AI-powered solution is designed to streamline and accelerate EU AI Act compliance assessments by identifying whether AI systems are classified as "high-risk," enabling businesses to focus their efforts where they matter most.',
        url: 'https://genai.softserveinc.com/ai-act-compliance-check',
        imgUrl: CompliaceCheckLogo,
    },
    {
        name: 'Mikrotik from scratch for everyone',
        description:
            'Participated in creating a technical Udemy course for beginners learning MikroTik and preparing for the MTCNA certification.',
        url: 'https://www.udemy.com/course/mikrotik-from-scratch-for-everyone/',
        imgUrl: MikrotikLogo,
    },
];

const Projects = () => {
    return (
        <>
            <h1 className='text-4xl text-left font-bold mb-2'>
                Recent Projects
            </h1>
            <ul className='bg-white text-left rounded-xl p-4'>
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
};

export default Projects;
