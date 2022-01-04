import Image from 'next/image';
import {projects as projectsData} from '../Data'
import {FiExternalLink, FiGithub} from 'react-icons/fi'
const Projects = ({projects}) => {
    return (
        <div className="px-2 min-h-screen  overflow-y-scroll scrollbar-hide">
            {/* Some Things I’ve Built */}
            <div>
                {/* title */}
                <div className="mt-6" >
                    <h1 className="text-color3  text-2xl flex items-center font-popi font-semibold font-popi space-x-4 tracking-wider">
                        <span className="text-xl pt-1 text-color1  font-mono font-extralight mr-1 " >02.</span> Some Things I’ve Built
                        <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden w-[300px]" />
                    </h1>
                </div>
                {/* Main project Container  */}
                <div className="pt-4 " >
                    {
                        projects.map((project) => (
                            project.image_path && (
                                <div className="  flex items-center -space-x-20 py-10 "
                                    key={project.name}
                                >
                                    {/* image */}
                                    <div className=" cursor-pointer transition duration-200 transform ease-in-out opacity-50 hover:opacity-90 bg-color1  relative w-[72%]  h-[320px] overflow-hidden rounded-lg " >
                                        <Image className="opacity-30 hover:opacity-100" src={project.image_path} layout="fill"  objectFit="cover" alt={project.name} />
                                    </div>
                                    {/* info */}
                                    <div className=" w-[50%] z-50 flex flex-col items-end ">
                                        <h6 className=" text-xs font-bold  text-color1 py-2 font-mono">Featured Project</h6>
                                        <h1 className="text-2xl font-semibold font-popi text-color3" >{project.name}</h1>
                                        <p className="bg-[#112240] text-color2 py-4 pr-4 pl-6 rounded-lg text-right my-4">{project.description}</p>
                                        <ul className="flex justify-end  gap-x-3 w-full  break-words whitespace-nowrap" >
                                            {
                                                project.key_techs.map((tech) => (
                                                    <li className="text-sm font-mono text-color2 capitalize font-semibold" key={tech}>{tech}</li>
                                                ))
                                            }
                                        </ul>
                                        {/* links */}
                                        <div className="py-4 px-6 flex  space-x-4">
                                            <a href={project.github_url} target="_blank" rel="noreferrer"  >
                                                <FiGithub className="h-5 w-5 text-color3 " />
                                            </a>
                                            <a href={project.deployed_url} target="_blank" rel="noreferrer"  >
                                                <FiExternalLink className="h-5 w-5 text-color3 " />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
                {/* All project Container  */}
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps= async () => {
    
    return {
        props: {
            projects:projectsData
        }
    };
}

export default Projects;
