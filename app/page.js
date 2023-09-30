"use client"
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Navbar from './components/navbar';
import Particle from './components/particle';
import Image from 'next/image';
import part from './config/part';
import data from './config/action';

function Home() {

  const el = React.useRef(null);
  const nw = React.useRef(null)
  
  React.useEffect(() => {
    const type = new Typed(nw.current, {
      strings: part,
      typeSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      type.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar className="fixed"/>
      <section id='Home'>
        <Particle/>
        <div className='absolute top-28 left-16 z-10'>
          <p className='text-yellow-500 text-6xl font-bold'><span className='text-cyan-950'>Hi There, I'm</span><br/> Salman Alfarizqi</p>
          <p className='text-black text-3xl'>I am Into <span ref={nw}/></p>
          <div className='mt-10'>
            <a
              href='#about'
              className="rounded-3xl bg-[#3b71ca] px-8 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              About Me
            </a>
          </div>
        </div>
      </section>
      <section id='about' className='duration-700 h-[100vh] relative z-10 top-[620px] overflow-x-hidden bg-slate-600'>
        <div className='flex px-56 mt-32'>
          <div className='px-10'>
            <Image
            src="/av.jpg"
            width={300}
            height={600}
            className='rounded-xl'
            />
          </div>
          <div className='w-[450px] px-10'>
            <h1 className='text-3xl font-bold mb-4'>Im Salman Alfarizqi</h1>
            <p>I am a developer programmer based in Surabaya, Indonesia. I am a Software Engineering vocational high school graduate from SMK 17 August 1945. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using Next Js. Working on myself to improve my skills. Enjoy creating Full-Stack clones.</p>
            <div className='mt-10'>
              <a
                href='#'
                className="rounded-3xl bg-[#3b71ca] px-8 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                Resume
              </a>
          </div>
          </div>
        </div>
      </section>
      <section id='skills' className='duration-700 relative z-10 top-[620px] overflow-x-hidden bg-[Rgb(85,4,167)]'>
        <h1 className='text-center text-white text-5xl mt-10 font-bold'>Skills & <span className='text-yellow-400'>Abilities</span></h1>
        <div className='flex flex-wrap bg-[Rgb(50,2,115)] rounded-md my-20 mx-32 p-11' >
          {data.map((item) => (
            <div className='w-[142px] h-[118px] bg-[Rgba(0,0,22,0.9)] m-3 rounded-md hover:bg-neutral-950'>
              <div className='flex justify-center'>
                <Image 
                  src={item.image} 
                  width={80} 
                  height={80} 
                  className='rounded-lg'/>
              </div>
              <p className='text-center'>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section id='edu' className='duration-700 h-[100vh] relative z-10 top-[620px] overflow-x-hidden bg-[#E5ECFB]'>
        <h1 className='text-center text-black text-5xl mt-10 font-bold'>My <span className='text-[Rgb(85,4,167)]'>Education</span></h1>
        <div className='w-[60vw] mt-10 mx-60 bg-[#FCFCFC] rounded-md flex shadow-lg hover:shadow-2xl hover:duration-100'>
          <Image
            src="/sekolah.jpg" 
            width={190} 
            height={150}
            className='rounded-lg'
          />
          <div className='ml-5 my-4'>
            <p className='text-4xl font-bold text-[#012970]'>graduate of Software Engineer</p><br/>
            <p className='text-base text-black'>vocational high school 17 Agustus 1945 Surabaya</p>
            <p className='text-xl mt-3 text-[#2B730A] font-semibold'>2021 - 2024 | Pursuing</p>
          </div>
        </div>
      </section>
      <section id='project' className='duration-700 h-[100vh] relative z-10 top-[620px] overflow-x-hidden bg-[#000031]'>
        <h1 className='text-center text-white text-5xl mt-10 font-bold'>Project <span className='text-[#FFD900]'>Made</span></h1>
        <div className='flex justify-center mt-10'>
          <div className='rounded-lg'>
            <Image src='/sekolah.jpg' width={250} height={250} className='rounded-t-xl'/>
            <div className='bg-[#FFD900] rounded-b-lg'>
              <p className='text-black text-lg font-semibold ml-3'>Project Chat GPT</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='duration-700 relative z-10 top-[620px] overflow-x-hidden'>        
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                  <div class="mb-6 md:mb-0">
                      <a href="#" class="flex items-center">
                          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Salman Alfarizqi</span>
                      </a>
                      <p className='mt-10'>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> Keep Rising 🚀. Connect with me over live chat!</p>
                  </div>
                  <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Link</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-2">
                                  <a href="#" class="hover:underline">Home</a>
                              </li>
                              <li className="mb-2">
                                  <a href="#about" class="hover:underline">About</a>
                              </li>
                              <li className="mb-2">
                                  <a href="#skills" class="hover:underline">Skill</a>
                              </li>
                              <li className="mb-2">
                                  <a href="#edu" class="hover:underline">Education</a>
                              </li>
                              <li className="mb-2">
                                  <a href="#project" class="hover:underline">My Project</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Info</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium">
                              <li class="mb-4">
                                  <p class="hover:underline ">+62 81235506839</p>
                              </li>
                              <li>
                                  <p class="hover:underline">salmanalfarizqi64@gmail.com</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Designed With ❤️ By Salman Alfarizqi</a>. All Rights Reserved.
                  </span>
                  <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                      <a href="https://www.facebook.com/profile.php?id=100078049204059" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                          <span class="sr-only">Facebook page</span>
                      </a>
                      <a href="https://x.com/SalmanA1526" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                        </svg>
                          <span class="sr-only">Twitter page</span>
                      </a>
                      <a href="https://github.com/salmanalfarizqi" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                          </svg>
                          <span class="sr-only">GitHub account</span>
                      </a>
                      <a href="https://www.instagram.com/salmankok1/" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                          <span class="sr-only">Instagram account</span>
                      </a>
                  </div>
              </div>
            </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
