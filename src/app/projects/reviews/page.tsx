import React, { useEffect, useState } from "react";
import { getXataClient } from "../../../xata";
import Link from "next/link";

interface View {
  id: string;
  title: string;
  reviewBody: string;
}

interface PageProps {
  searchParams: { q: string; id: string };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const xata = getXataClient();

  const views = await xata.db.friendviews.getAll();



  return (
    <div className="mx-auto flex w-11/12 items-end justify-center lg:static lg:h-auto">
      <div className="w-full max-w-5xl mt-16">
        <h1 className="text-center mb-4">I promise I did not write these!</h1>
        {views.length === 0 && <p>No blog posts found</p>}
        {views.map((view) => (
          <div key={view.id} className=" mb-4 lg:mb-16 bg-blue-800 p-4 md:p-10 rounded-xl">
            <h2 className="text-2xl mb-2 text-center">
              <Link className="hover:text-black" href={`projects/reviews/${view.id}`}>{view.title}</Link>
            </h2>
            <p className="dark:text-purple-200 mb-5 text-center">
              {view.reviewBody}
            </p>
            <Link
              href={`/projects/reviews/${view.id}`}
              className="px-4 py-2 block font-semibold text-sm text-white hover:text-black text-center"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Page;
