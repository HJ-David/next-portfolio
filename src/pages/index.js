import AnimatedText from '@/components/AnimatedText';
import { BsCloudDownload } from "react-icons/bs";
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Link from 'next/link';
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import Tools from "@/components/Tools";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Home() {
  const [mode, setMode] = useThemeSwitcher();
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Head>
        <title>Hunjin&apos;s portfolio website</title>
        <meta
          name='description'
          content="Hunjin's portfolio website, showing how he is developing his skills from a front-end developer to a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />

      <main className='flex items-center text-dark w-full h-screen min-h-screen dark:text-light sm:items-start'>
        <div className='absolute md:w-full w-3/4 top-0 right-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          >
            <source src='home_bg.mp4' type='video/mp4' />
          </video>
        </div>

        <div
          className={`absolute z-10 h-[500px] inset-0 bg-gradient-to-l from-transparent via-white/90 via-white to-white ${
            mode === "dark" ? "dark:hidden" : "dark:block"
          }`}
        ></div>
        <div
          className={`absolute z-10 h-[500px] inset-0 bg-gradient-to-b from-transparent to-white ${
            mode === "dark" ? "dark:hidden" : "dark:block"
          }`}
        ></div>
        <div
          className={`absolute z-10 h-[500px] top-[500px] inset-0 bg-gradient-to-b from-white via-white to-white ${
            mode === "dark" ? "dark:hidden" : "dark:block"
          }`}
        ></div>

        {/* Top-gradation */}
        <div className='absolute z-10 h-[500px] inset-0 dark:bg-gradient-to-b from-purple-900/10 to-green-800'></div>
        <div className='absolute z-5 h-[500px] inset-0 dark:bg-gradient-to-l from-green-800/20 via-purple-900/70 to-green-800'></div>
        <div className='absolute z-5 h-[500px] inset-0 dark:bg-gradient-to-l from-transparent via-purple-900/30 to-green-800'></div>
        <div className='absolute z-5 h-[500px] inset-0 dark:bg-gradient-to-l from-green-800/20 via-transparent to-green-800'></div>

        {/* Bottom-gradation */}
        <div className='absolute z-10 h-[1000px] inset-0 top-[500px] dark:bg-gradient-to-b from-green-800 to-purple-900'></div>
        <div className='absolute z-10 h-[1000px] inset-0 top-[500px] dark:bg-gradient-to-br from-transparent via-green-800/50 to-purple-900/70'></div>
        <motion.div
          style={{ y }}
          className='absolute z-40 inset-x-0 top-0 mx-auto max-w-full'
        >
          <Layout className='pt-20 z-30 md:pt-16 sm:pt-16'>
            <div className='flex items-center justify-between w-full lg:flex-col'>
              {/* <div className='w-1/2 md:w-full'>

            </div> */}
              <div className='w-1/2 flex flex-col items-center mt-20 self-center lg:w-full lg:text-center'>
                <AnimatedText
                  text='Hi, I am Hunjin'
                  className='!leading-tight !text-5xl !text-left 
                xl:!text-4xl lg:!text-center lg:!text=5xl md:!text-4xl sm:!text-2xl 
                '
                />
                <AnimatedText
                  text='Web developer'
                  className='!leading-tight !text-5xl !text-left 
                xl:!text-4xl lg:!text-center lg:!text=5xl md:!text-4xl sm:!text-2xl
                '
                />
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  As a front-end developer and aspiring full-stack developer, I
                  enjoy creating beautiful interfaces and building powerful web
                  applications.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link
                    href='/resumen_HJ_dev.pdf'
                    target={"_blank"}
                    className='flex items-center bg-dark text-light p-2 px-3 rounded-lg text-lg font-semibold
                  border-2 border-solid border-transparent hover:border-dark  hover:bg-light hover:text-dark
                  
                  dark:bg-light dark:text-dark
                  hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light 
                  md:p-2 md:px-4 md:text-base
                  '
                    download={true}
                  >
                    Resume <BsCloudDownload className='w-6 sm:w-4 ml-1' />
                  </Link>
                  <Link
                    href='mailto:hj@hunjin.site'
                    target={"_blank"}
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <Tools />
          </Layout>
        </motion.div>
      </main>
    </>
  );
}
