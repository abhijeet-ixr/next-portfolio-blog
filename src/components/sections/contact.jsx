'use client';
import { useState } from 'react';

import SectionHeader from '../elements/sectionHeader';
import Socials from '../../data/socials.json';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(0);

  const submitData = async () => {
    setIsLoading(true);
    let response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    response = await response.json();

    if (response.status === 'ok') {
      setIsSuccess(1);
    } else {
      setIsSuccess(2);
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSuccess(0);
      setIsLoading(false);
    }, 5000);
  };

  const isDisabled =
    isLoading || isSuccess !== 0 || !name || !email || !message;

  return (
    <section id='contact' className='py-6'>
      <SectionHeader header='contact' />
      <div className='mx-auto my-10 max-w-screen-2xl place-content-center px-2 py-4 text-center md:px-4 lg:px-16'>
        <div className='flex flex-col justify-around gap-8 lg:flex-row'>
          <div className='card grid w-full place-items-center rounded-box bg-base-200 lg:w-1/2'>
            <div className='gap-6 p-4'>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nisl augue, ornare ac pellentesque sit amet, mattis
                vitae lorem.
              </p>
              <p className='mt-8'>
                Aenean magna arcu, vestibulum non ligula eget, viverra vehicula
                sem. Maecenas iaculis facilisis accumsan. Morbi rhoncus nulla
                ullamcorper orci suscipit dapibus. Nam mollis enim at nisl
                facilisis sodales.
              </p>
              <p className='mt-8 flex content-center justify-center gap-8 text-center'>
                {Socials.map(({ name, url, icon }) => (
                  <a
                    href={url}
                    className='text-gray-400 hover:text-gray-500'
                    key={name}
                  >
                    <svg
                      className='h-8 w-8'
                      fill='currentColor'
                      role='img'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>{name}</title>
                      <path d={icon} fillRule='evenodd' clipRule='evenodd' />
                    </svg>
                  </a>
                ))}
              </p>
            </div>
          </div>
          <div className='divider place-items-center lg:divider-horizontal'>
            OR
          </div>

          <div className='card grid w-full place-items-center gap-4 rounded-box bg-base-200 lg:w-1/2'>
            <div className='gap-6 p-4'>
              <input
                type='text'
                placeholder='Name'
                className='input input-bordered mb-2 w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                className='input input-bordered mb-2 w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder='Your Message'
                className='textarea textarea-bordered textarea-md mb-2 w-full'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              className={`btn btn-outline btn-primary btn-wide mb-8 ${isDisabled ? 'btn-disabled' : ''}`}
              disabled={isDisabled}
              onClick={submitData}
              role='button'
              aria-disabled={isDisabled}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {(isSuccess === 1 || isSuccess === 2) && (
        <div className='toast'>
          <div className='alert alert-info'>
            <span>
              {`${isSuccess ? 'Your message was sent. Please expect a reply within a day.' : 'Failed to send your message. Please try again after few minutes or try reaching via socials below.'}`}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
