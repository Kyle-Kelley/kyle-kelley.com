import React from 'react';
import Link  from 'next/link'; 
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
        {pages.map((page) => (
            <div className="mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg">
                <div key={page.pageName} className="mb-20 p-10">
                    <Link className='text-black hover:text-white' href={page.pageUrl}>{page.pageName}</Link>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Page;
