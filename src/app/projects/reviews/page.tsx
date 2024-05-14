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

const Page: React.FC<PageProps> = ({ searchParams }) => {
  const [views, setViews] = useState<View[]>([]);
  const xata = getXataClient();

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const viewsData = await xata.db.friendviews.getAll();
        // Cast the fetched data to the View type
        const mappedViews = viewsData.map((item: any) => ({
          id: item.id,
          title: item.title,
          reviewBody: item.reviewBody
        }));
        setViews(mappedViews);
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="lg:fixed bottom-0 left-0  flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className="w-full max-w-5xl mt-16">
        <h1 className="text-center mb-4">I promise I did not write these!</h1>
        {views.length === 0 && <p>No blog posts found</p>}
        {views.map((view) => (
          <div key={view.id} className=" mb-4 lg:mb-16 shadow-xl p-4 md:p-10">
            <h2 className="text-2xl mb-2 text-center">
              <Link href={`friendViews/${view.id}`}>{view.title}</Link>
            </h2>
            <p className="dark:text-purple-200 mb-5 text-center">
              {view.reviewBody}
            </p>
            <Link
              href={`/projects/friendviews/${view.id}`}
              className="px-4 py-2 block font-semibold text-sm text-white dark:text-purple-200 rounded-lg shadow-sm text-center"
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
