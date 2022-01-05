import { languages } from "../Data";
import { ISkill } from "../interface";

const Resume = () => {    
    return (
        <div className="pt-6 py-10 px-1 md:px-10" >
            <h1 className="text-color3  text-3xl fx font-popi font-semibold font-popi space-x-4 tracking-wider">
                <span className="text-2xl text-color1  font-mono font-normal mr-1 " >02.</span> Skills
                <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden w-[300px]" />
            </h1>
            <div className="md:pl-5 pt-6 md:pt-8 ">
                <h2 className="text-2xl font-semibold font-popi text-color2" >Education</h2>
                <h3 className="text-base font-popi font-medium py-2 w-full md:w-[73%] text-color2" > {`I'm currently in my fourth year (out of five) studying computer science at University Of Gondar.`}</h3>
                <h1 className="text-base text-color2 font-popi font-normal py-4 " >Here are a few technologies I’ve been working with recently:</h1>
                <div className="grid grid-cols-2 max-w-[400px] " >
                    {languages.map(({Icon,name,level}) => (
                        <div key={name} className="fx select-none animate-pulse  duration-300  py-1 hover:font-semibold" >
                            <Icon className="h-3 text-color1 " />
                            <h1 className="text-sm font-mono text-color2 font-medium ">{name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resume
