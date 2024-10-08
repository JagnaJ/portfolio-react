import { Linkedin, AtSign, GitBranch } from 'lucide-react';
import myPhoto from "/src/assets/my-photo4.jpg";


const Bio = () => {
    return (
        <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md">
            <img
                src= {myPhoto}
                alt="my profile photo"
                className="h-32 w-32 rounded-full"
            />
            <h1 className="text-lg md:text-2xl font-bold mt-3">Yana Ponomarenko</h1>
            <p className="text-secondary-foreground py-2">I'm a Frontend Developer</p>
            <div className="flex flex-row gap-2 mt-2">
                <a href="https://www.linkedin.com/in/yana-ponomarenko-34775923a/" target="_blank"
                    rel="noopener noreferrer">
                    <Linkedin className='text-blue-400 hover:text-blue-500 cursor-pointer' />
                </a>
                <a href="mailto:janaponomarenk@gmail.com" target="_blank"
                    rel="noopener noreferrer">
                    <AtSign className='text-pink-400 hover:text-pink-500 cursor-pointer' />
                </a>
                <a href="https://github.com/JagnaJ" target="_blank" rel="noopener noreferrer">
                    <GitBranch className='text-red-400 hover:text-red-500 cursor-pointer' />
                </a>
            </div>
        </section>
    );
}

export default Bio;