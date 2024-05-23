// app/header.tsx

// Import necessary modules
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaCode, FaMailBulk, FaHamburger } from 'react-icons/fa';

// Define the Header component
export default function Navbar() {
  return (
    <header className="h-min py-4 z-50 mb-10">
      <FaHamburger className='peer w-8 h-8 hover:opacity-80 absolute top-3 left-3 text-white' />
      <div className="hidden peer-hover:flex hover:flex container flex-col mx-auto px-4 justify-center items-center bg-black p-6 border-lg w-2/12 md:w-1/12 top-4 left-3 absolute">
        <nav className="flex mx-auto">
          <ul className="flex-col flex gap-y-2 gap-x-2 lg:gap-y-6 lg:gap-x-6">
            <li>
              <Link aria-label='Projects' href="/projects">
                <FaCode className='text-white hover:text-blue-800 w-8 h-8'/>
              </Link>
            </li>
            <li>
              <Link aria-label='Contact' href="mailto:kylekelley711@gmail.com" >
                <FaMailBulk className="text-white w-8 h-8 hover:text-blue-800" />
              </Link>
            </li>
            <li>
              <Link 
                aria-label='LinkedIn'
                href="https://www.linkedin.com/in/kyle-kelley1992/"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <FaLinkedin className="text-white w-8 h-8 hover:text-blue-800" />
              </Link>
            </li>
            <li>
              <Link 
                aria-label='Github'
                href="https://github.com/Kyle-Kelley/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="text-white w-8 h-8 hover:text-blue-800" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

