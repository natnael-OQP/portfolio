import {projects as projectsData} from '../Data'
import {FiExternalLink, FiGithub} from 'react-icons/fi'
import Image from 'next/image';

const MediumCard = ({id,name,image_path,description,github_url,deployed_url,key_techs}) => {
    return (
        <div className="relative  flex items-center -space-x-20 py-10   "
            key={name}
            >
                {/* image */}
                <div className=" cursor-pointer transition duration-200 transform ease-in-out bg-[#112240]  sm:opacity-50 hover:opacity-90 sm:bg-color1  sm:relative w-full h-[350px]   sm:w-[72%] sm:h-[320px] overflow-hidden rounded-lg " >
                    <Image className="opacity-5 sm:opacity-50 sm:hover:opacity-100" src={image_path} layout="fill"  objectFit="cover" alt={name} />
                    {/* info */}
                    <div className=" sm:hidden absolute top-4 left-4 sm:w-[50%] z-50 flex flex-col items-start sm:items-end ">
                        <h6 className=" text-xs font-bold  text-color1 py-2 font-mono">Featured Project</h6>
                        <h1 className="text-2xl font-semibold font-popi text-color3" >{name}</h1>
                        <p className="sm:bg-[#112240] text-color2 py-4 sm:pr-4 sm:pl-6 rounded-lg font-semibold text-start sm:text-right my-2 sm:my-4 flex-grow">{description}</p>
                        <ul className="mt-4 sm:mt-0 flex sm:justify-end  gap-x-3 w-full  break-words whitespace-nowrap" >
                            {
                                key_techs.map((tech) => (
                                    <li className="text-sm font-mono text-color2 capitalize font-semibold" key={tech}>{tech}</li>
                                ))
                            }
                        </ul>
                        {/* links */}
                        <div className="py-4 sm:px-6 flex  space-x-4">
                            <a href={github_url} target="_blank" rel="noreferrer"  >
                                <FiGithub className="h-5 w-5 text-color3 " />
                            </a>
                            <a href={deployed_url} target="_blank" rel="noreferrer"  >
                                <FiExternalLink className="h-5 w-5 text-color3 " />
                            </a>
                        </div>
                    </div>
                </div>
                {/* info */}
                <div className="hidden  sm:w-[50%] z-50 sm:flex flex-col  items-end ">
                    <h6 className=" text-xs font-bold  text-color1 py-2 font-mono">Featured Project</h6>
                    <h1 className="text-2xl font-semibold font-popi text-color3" >{name}</h1>
                    <p className="bg-[#112240] text-color2 py-4 pr-4 pl-6 rounded-lg text-right my-4">{description}</p>
                    <ul className="flex justify-end  gap-x-3 w-full  break-words whitespace-nowrap" >
                        {
                            key_techs.map((tech) => (
                                <li className="text-sm font-mono text-color2 capitalize font-semibold" key={tech}>{tech}</li>
                            ))
                        }
                    </ul>
                    {/* links */}
                    <div className="py-4 px-6 flex  space-x-4">
                        <a href={github_url} target="_blank" rel="noreferrer"  >
                            <FiGithub className="h-5 w-5 text-color3 " />
                        </a>
                        <a href={deployed_url} target="_blank" rel="noreferrer"  >
                            <FiExternalLink className="h-5 w-5 text-color3 " />
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default MediumCard
