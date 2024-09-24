import Link from 'next/link';
import Image from 'next/image';

import profilePic from '../../../public/img/about-image.png';

export default function Hero() {
  return (
    <section id='home' className='hero min-h-screen'>
      <div className='hero-content max-w-screen-2xl flex-col gap-4 px-2 lg:flex-row-reverse lg:px-4'>
        <Image
          src={profilePic}
          alt='picture of abhijeet jaiswal'
          className='w-full max-w-md rounded-lg shadow-2xl md:max-w-xl lg:w-1/2 lg:max-w-lg xl:max-w-xl'
        />
        <div className='flex w-full flex-col items-center text-justify lg:w-1/2 lg:items-start'>
          <h1 className='py-4 text-start text-2xl font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nisl augue, ornare ac pellentesque sit amet, mattis vitae lorem.
          </h1>
          <p className='py-2 text-xl font-medium'>
            Morbi sodales metus quam, accumsan ullamcorper mi rutrum eget.
            Suspendisse eleifend tempor nulla, quis eleifend ante feugiat sit
            amet. Phasellus est ex, luctus nec ex at, ullamcorper blandit justo.
          </p>
          <Link
            href='/#contact'
            role='button'
            className='btn btn-outline btn-primary btn-wide my-6'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
