import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
    active: string,
    setActive: Function,
    name: string,
    route: string,
}> = ({active,setActive,name,route}) => {
    return (
            active !== name && (
                <Link href={route} passHref >
                    <button className="navBtn" onClick={() => setActive(name)}>{name}</button>
                </Link>
        )
    )
}

const Navbar = () => {
    const {pathname} = useRouter();
    const [active, setActive] = useState<string>("About");
    useEffect(() => {
        if (pathname === "projects") setActive("Projects");
        if (pathname === "resume") setActive("Resume");
        
    },[])
    return (
        <div
            style={{ 
				marginLeft:'-1rem',
				marginRight:'-1rem',
			}}
            className="justify-between px-4 py-3 shadow-sm fx"
        >
            <h1 className="text-xl font-semibold tracking-wider border-b font-lg text-color1 border-color1" >{active}</h1>
            <div className="space-x-4 fx " >
                <NavItem active={active} setActive={setActive} name={'About'} route={'/'}  />
                <NavItem active={active} setActive={setActive} name={'Projects'} route={'projects'}  />
                <NavItem active={active} setActive={setActive} name={'Resume'} route={'resume'}  />
            </div>
        </div>
    )
}

export default Navbar
