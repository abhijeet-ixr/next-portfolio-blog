import Link from 'next/link';
import Image from 'next/image';

import SectionHeader from '../elements/sectionHeader';

import { characterLimit } from '../../../src/utils';
import projects from '../../data/projects.json';

export default async function Projects() {
  return (
    <section id='projects' className='py-6'>
      <SectionHeader header='Projects' />
      <div className='mx-auto my-10 max-w-screen-2xl place-content-center px-2 text-center md:px-4 lg:px-16'>
        <div className='grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                className='card-compact card transform bg-base-100 shadow-xl transition duration-500 hover:scale-105'
              >
                <figure>
                  <Image
                    className='aspect-auto h-48 w-full object-cover'
                    src={project.cover}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </figure>
                <div className='card-body text-left'>
                  <header className='mb-2 h-16'>
                    <h2 className='card-title'>{project.title}</h2>
                  </header>

                  <p className='mb-2 h-12'>{characterLimit(project.desc)}</p>

                  <div className='my-4 h-12 justify-start gap-8'>
                    {project.tech.map((item) => (
                      <div
                        key={`${project.id}-${item}`}
                        className='badge badge-outline mr-2 mt-2'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className='card-actions justify-end'>
                    <Link
                      href={project.github}
                      target='_blank'
                      passHref
                      className='btn btn-primary btn-outline'
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
