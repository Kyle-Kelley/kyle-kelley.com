import React from "react";
import Typewriter from "./components/Typewriter";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  const header: string[] = [
    "(mostly) front end developer ;)",
    "problem solver",
    "chess enthusiast",
  ];

  return (
    <>
      <div className="bg-blue-800 mx-auto mt-4 w-11/12 lg:w-3/4 md:w-1/2 text-center rounded-lg ">
        {/* <Image src="" alt=""/> */}
        <h1 className="text-slate-300">Hi! I&apos;m Kyle Kelley</h1>
        <Typewriter
          className="mt-10 text-slate-300"
          text={header}
          delay={125}
          wordPause={150}
        />
      </div>
      <div className="bg-blue-800 p-8 mx-auto mt-4 w-11/12 lg:w-3/4 md:w-1/2 text-center text-black rounded-lg ">
        <Link href="/projects/" className="text-slate-300 hover:text-black">
          <h2>Projects</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
