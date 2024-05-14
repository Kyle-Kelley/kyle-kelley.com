import React from 'react';
import Link  from 'next/link'; // If you're using React Router

interface Page {
  pageName: string;
  pageUrl: string;
}

const pages: Page[] = [
  {
    pageName: "Co-Worker Recognition",
    pageUrl: "/projects/friendviews",
  },
];

const Page: React.FC = () => {
  return (
    <div className="sctn w-11/12 sm:max-w-lg lg:max-w-5xl lg:basis-1/2 crd-cnt mx-auto">
      <div className="mx-auto">
        {pages.map((page) => (
          <div key={page.pageName} className="shadow-xl mb-20 p-10">
            <Link href={page.pageUrl}>{page.pageName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
