import {FiFolder,FiExternalLink, FiGithub} from 'react-icons/fi'


const SmallCard = ({name,description,github_url,deployed_url,key_techs}) => {
    return (
        <a
            href={deployed_url}
            target="_blank" rel="noreferrer"
            className="bg-[#112240] text-color2 flex flex-col mx-auto  px-4 py-6 rounded-md w-full md:max-w-[310px] lg:max-w-[300px] h-[320px] transform-gpu  transition duration-500 hover:-translate-y-1"

        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <FiFolder className="h-7 w-7 text-color1 " />
                <div className="flex items-center space-x-3" >
                    <a href={github_url} target="_blank" rel="noreferrer"  >
                        <FiGithub className="hover:text-color1  h-5 w-5 text-color3 " />
                    </a>
                    <a href={deployed_url} target="_blank" rel="noreferrer"  >
                        <FiExternalLink className="hover:text-color1  h-5 w-5 text-color3 " />
                    </a>
                </div>
            </div>
            {/* heading */}
            <h2 className="text-lg text-color3 font-semibold font-popi pt-6" >{name}</h2>
            {/* description */}
            <p className="text-sm font-medium pt-3 flex-grow " >{description}</p>
            {/* key techs */}
            <ul className="flex  flex-wrap  gap-x-3 w-full  " >
                {
                    key_techs.map((tech) => (
                        <li className="text-sm font-mono text-color2 capitalize font-medium" key={tech}>{tech}</li>
                    ))
                }
            </ul>
        </a>
    )
}

export default SmallCard
