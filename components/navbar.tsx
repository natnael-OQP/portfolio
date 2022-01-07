import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FadeUpTop } from '../motion';

const NavItem: FunctionComponent<{
    active: string,
    setActive: Function,
    name: string,
    route: string,
    id:string,
}> = ({active,setActive,name,route,id}) => {
    return (
            active !== name && (
                <div className="flex items-baseline space-x-1 ">
                    <span className="text-color1 text-xs font-mono" >{id}.</span>
                    <Link href={route} passHref scroll={false} >
                        <button className="navBtn" onClick={() => setActive(name)}>{name}</button>
                    </Link>
                </div>
        )
    )
}

const Navbar = () => {
    const {pathname} = useRouter();
    const [active, setActive] = useState<string>("About");
    useEffect(() => {
        if (pathname === "projects") setActive("Work");
        if (pathname === "resume") setActive("Resume");
        
    },[])
    return (
        <motion.div
            variants={FadeUpTop}
            initial="initial"
            animate="animate"
            style={{ 
				marginLeft:'-1rem',
				marginRight:'-1rem',
			}}
            className="justify-between px-6 py-3 shadow-sm fx"
        >
            <h1 className="text-xl font-semibold tracking-wider border-b font-lg text-color1 border-color1" >{active}</h1>
            <div
                className="space-x-4 fx " >
                <NavItem id='01' active={active} setActive={setActive} name={'About'} route={'/'}  />
                <NavItem id='02' active={active} setActive={setActive} name={'Resume'} route={'resume'}  />
                <NavItem id='03' active={active} setActive={setActive} name={'Work'} route={'projects'}  />
            </div>
        </motion.div>
    )
}

export default Navbar
