'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaCode, FaMailBulk, FaHamburger, FaHome, FaSpinner } from 'react-icons/fa';
import { IconType } from 'react-icons';


type Page = {
  id: number,
  name: string;
  link: string;
  icon: IconType;
};

export default function Navbar() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPages = async () => {
        try {
          const response =  await fetch('/api/pages/route.ts');
          const data: Page[] = await response.json();
          setPages(data);
          console.log(pages);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching pages:', error);
          setLoading(false);
        }
    };
    fetchPages();
  }, []);
  


  return (
    <header className="h-min py-4 z-50 mb-10">
      <FaHamburger className='peer w-8 h-8 hover:opacity-80 absolute top-3 left-3 text-white' />
      <div className="hidden peer-hover:flex hover:flex container flex-col mx-auto px-4 justify-center items-center bg-black p-6 border-lg w-2/12 md:w-1/12 top-4 left-3 absolute">
        <nav className="flex mx-auto">
          <ul className="flex-col flex gap-y-2 gap-x-2 lg:gap-y-6 lg:gap-x-6">
            {pages.map(page => {
              const Icon = page.icon;
              return (
                <li key={page.id}>
                  <Link aria-label={page.name} href={page.link}>
                      <Icon className="text-slate-500 hover:text-blue-800 w-8 h-8" />
                  </Link>
                </li>
            )
          })}
            <li>
              <Link aria-label='Home' href="/">
                <FaHome className='text-white hover:text-blue-800 w-8 h-8'/>
              </Link>
            </li>
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

