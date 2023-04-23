import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Hunjin&apos;s Portfolio | About Page</title>
        <meta
          name='description'
          content='Learn more about Hunjin, a web developer with a passion for 
        transforming ideas into reality.'
        />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Transforming Ideas Into Reality!'
            className='mb-16 !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I&apos;m Hunjin, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences.
              </p>

              <p className='my-4 font-medium'>
                I started to work as a freelance web designer in 2003 using
                html, css, javascript, php, and other graphic design tools. But
                from 2006, as I started to move to different places abroad, I
                worked as an English teacher, translator, and interpreter. In
                2021, I came back to web development field as learning modern
                web development skills.
              </p>

              <p className='my-4 font-medium'>
                As a Front&ndash;End Developer driven by curiosity and design, I
                try to bring digital products to life with both technical and
                visual flair. User experience and clean, accessible code matter
                to me, and I pay attention to details.
              </p>

              <p className='font-medium'>
                This is the quote I like with regard to my work. &quot;The art
                of simplicity is genius. Simple people see as simple what others
                see as complex. In classical Hebrew, the language of the Bible,
                the word for simple and for perfect are the same, because
                perfection lies in simplicity not in complexity.&quot;
              </p>
            </div>

            <div
              className='col-span-3 relative h-max rounded-xl border-2 border-solid border-dark
bg-light p-8 dark:bg-gray-500/50 dark:border-light xl:col-span-4 md:order-1 md:col-span-8
'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-dark/20' />
              <Image
                src={profilePic}
                alt='HJ'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm'
                >
                  projects
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm'
                >
                  years of experience
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm'
                >
                  Languages spoken
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
