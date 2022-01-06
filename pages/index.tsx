import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { AboutData } from '../Data';

const  Home = ({about})=> {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About page created by natnaelOPQ full info about natnael" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="px-2 md:px-8 pt-5 pb-10 space-y-4 ">
          <h3 className="pb-2 font-mono text-base normal  text-color1" >{about.name}</h3>
          <h1 className="text-3xl md:text-[65px] leading-none text-h font-bold text-color3" >{about.title1}</h1>
          <h1 className="text-3xl md:text-[65px] leading-none font-bold text-color2" >{about.title2}</h1>
          <p className="pt-2 text-color2 w-full md:w-[70%] font-medium text-sm font-popi  break-words py-8" >{about.description}</p>
          {/* check out projects */}
          <Link scroll={false}  passHref href="/projects" >
            <button className="px-5 py-[14px] mt-4 text-[14px] border rounded-md border-color1 text-color1 hover:bg-color1 hover:bg-opacity-10 fx font-normal font-popi" >
              {about.buttonText}
              <ChevronDoubleRightIcon className="h-5 ml-2" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const about = AboutData;
  
  return {
    props: {
      about,
    },
    // revalidate:10,
  };
}

export default Home;