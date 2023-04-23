import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic2 from "../../public/images/profile/profile2.jpg";
import HireMe from "@/components/HireMe";


const about = () => {
  return (
    <>
      <Head>
        <title>Hunjin&apos;s Portfolio | Contact Page</title>
        <meta
          name='description'
          content='Learn more about Hunjin, a web developer with passion for 
        transforming ideas into reality.'
        />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Contact'
            className='mb-16 !leading-tight lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8'
          />
          <HireMe />
          <div className='flex justify-center items-center gap-10 md:flex-col sm:flex-col'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'></h2>
              <a
                href='tel:+1 302-208-0088'
                target={"_blank"}
                className='mt-1 ml-1 font-bold text-2xl sm:text-2xl'
              >
                Mobile: +1 302 208 0088
              </a>

              <a
                href='mailto:david.hoonjin.jang@gmail.com'
                target={"_blank"}
                className='my-10 ml-1 font-bold text-2xl sm:text-2xl'
              >
                Email: david.hoonjin.jang@gmail.com
              </a>

              <p className='my-4 font-medium'></p>

              <p className='font-medium'></p>
            </div>

            <div
              className='w-[500px] sm:w-[350px] col-span-3 relative h-max rounded-xl border-1 border-solid border-dark
bg-light p-6 dark:bg-gray-500 dark:border-light xl:col-span-4 md:order-1 md:col-span-8
'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-dark/50' />
              <Image
                src={profilePic2}
                alt='HJ'
                className='w-full h-auto rounded-xl'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
