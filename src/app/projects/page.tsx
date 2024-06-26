import React from 'react';
import Link  from 'next/link'; 
import Counter from '../components/Counter';
import ToDoApp from '../components/ToDoApp';
import StateLifter from '../components/StateLifter';

interface Page {
  pageName: string;
  pageUrl: string;
}

const pages: Page[] = [
  {
    pageName: "Co-Worker Recognition",
    pageUrl: "/projects/reviews",
  }
];

const Page: React.FC = () => {
  return (
    <div className="sctn w-11/12 sm:max-w-lg lg:max-w-5xl lg:basis-1/2 crd-cnt mx-auto">
        <div className="mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg">
            <h2 className='text-slate-300'>Everyone needs a Counter!</h2>
            <Counter />
        </div>
        {pages.map((page) => (
            <div key={page.pageName} className="mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg">
                <div className="p-10">
                    <Link className='text-slate-300 hover:text-white' href={page.pageUrl}>
                      <h2>
                        {page.pageName}
                      </h2>
                    </Link>
                </div>
            </div>
        ))}
        <ToDoApp />
        <StateLifter />
        <div className="mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg p-10">
          <Link className='text-slate-300 hover:text-white' href='/projects/yext/'>
            <h2>
              Yext Playground
            </h2>
          </Link>
        </div>
    </div>
  );
};

export default Page;
