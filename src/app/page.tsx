import React from "react";
import Typewriter from "./components/typewriter";
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
      <div className="bg-blue-800 mx-auto mt-4 w-11/12 lg:w-3/4 md:w-1/2 text-center text-black rounded-lg ">
        {/* <Image src="" alt=""/> */}
        <h1>Hi! I'm Kyle Kelley</h1>
        <Typewriter
          className="mt-10 text-black"
          text={header}
          delay={125}
          wordPause={150}
        />
      </div>
      <div className="bg-blue-800 p-8 mx-auto mt-4 w-11/12 lg:w-3/4 md:w-1/2 text-center text-black rounded-lg ">
        <Link href="/projects/reviews/" className="text-black hover:text-white">
          <h2>Co-Worker Recognition</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
