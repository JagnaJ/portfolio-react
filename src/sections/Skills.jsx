import Tag from "../components/Tag";

const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "SQL",
    "Docker",
    "Relational Databases",
    "Basic DevOps",
    "Git & GitHub",
    "HTML & CSS",
    "Agile/Scrum"
];

const Skills = () => {
    return (
        <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
            <h2 className="text-lg md:text-2xl text-secondary-foreground mb-3">Skills</h2>
            <ul className="flex flex-wrap leading-7">
                {skills.map((skill, index) => (
                    <li key={index} className="mr-2" >
                        <Tag name={skill} /></li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;