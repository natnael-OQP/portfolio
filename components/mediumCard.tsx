import {projects as projectsData} from '../Data'
import {FiExternalLink, FiGithub} from 'react-icons/fi'
import Image from 'next/image';

const MediumCard = ({id,name,image_path,description,github_url,deployed_url,key_techs}) => {
    return (
        <div className="  flex items-center -space-x-20 py-10 "
            key={name}
            >
                {/* image */}
                <div className=" cursor-pointer transition duration-200 transform ease-in-out opacity-50 hover:opacity-90 bg-color1  relative w-[72%]  h-[320px] overflow-hidden rounded-lg " >
                    <Image className="opacity-50 hover:opacity-100" src={image_path} layout="fill"  objectFit="cover" alt={name} />
                </div>
                {/* info */}
                <div className=" w-[50%] z-50 flex flex-col items-end ">
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
