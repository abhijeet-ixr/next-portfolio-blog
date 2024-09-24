import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import SectionHeader from '../elements/sectionHeader';

export default async function Projects() {
  return (
    <section id="projects" className="py-6">
      <SectionHeader header="Projects" />
      <div className="mx-auto my-10 max-w-screen-2xl place-content-center px-2 text-center md:px-4 lg:px-16">
        <div className="grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* call github api to show projects as cards and on click take to project details page where render the github readme file */}
          <p>coming soon</p>
        </div>
        {/* <div className="mt-8 pt-8">
          <Link
            href="/blog"
            role="button"
            className="btn btn-outline btn-primary btn-wide"
          >
            View More
          </Link>
        </div> */}
      </div>
    </section>
  );
}
