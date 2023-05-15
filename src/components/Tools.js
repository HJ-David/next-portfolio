import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiTailwindcss,
  SiStrapi,
  SiMongodb,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FaReact,
  FaPython,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandCss3 } from "react-icons/tb";
import { Sanity, Fcpx, Cloudinary } from "./Icons";
import { GrMysql } from "react-icons/gr";


const Tools = () => {
  return (
    <div className='z-50 w-full mx-auto justify-center items-center pt-10 sm:text-xs'>
      <p className='text-2xl flex justify-center items-center'>
        Tools & Skills
      </p>
      <div className='z-50 w-full flex justify-center items-center px-10 sm:text-xs '>
        <div className='grid w-full justify-center items-center py-5 '>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiJavascript className='w-10 h-10' />
            JavaScript
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <TbBrandCss3 className='w-10 h-10' />
            CSS
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiStrapi className='w-10 h-10' />
            Strapi
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiMongodb className='w-10 h-10' />
            MongoDB
          </div>
        </div>

        <div className='grid w-full justify-center items-center py-5'>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaReact className='w-10 h-10' />
            React
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaSass className='w-10 h-10' />
            SASS
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <Sanity className='w-10 h-10' />
            Sanity
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <Cloudinary className='w-10 h-10' />
            Cloudinary
          </div>
        </div>

        <div className='grid w-full justify-center items-center py-5'>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <TbBrandNextjs className='w-10 h-10' />
            NextJS
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiTailwindcss className='w-10 h-10' />
            tailwindcss
          </div>
          <div className='flex flex-col px-2 items-center justify-center sm:py-7'>
            <FaNodeJs className='w-10 h-10' />
            NodeJS
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiAdobeillustrator className='w-10 h-10' />
            Illustrator
          </div>
        </div>

        <div className='grid w-full justify-center items-center py-5'>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <AiOutlineHtml5 className='w-10 h-10' />
            HTML
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaBootstrap className='w-10 h-10' />
            Bootstrap
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <GrMysql className='w-10 h-10' />
            MySQL
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <SiAdobephotoshop className='w-10 h-10' />
            PhotoShop
          </div>
        </div>

        <div className='grid w-full justify-center items-center py-5'>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaPython className='w-10 h-10' />
            Python
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaWordpress className='w-10 h-10' />
            WordPress
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <FaGithub className='w-10 h-10' />
            GitHub
          </div>
          <div className='flex flex-col p-2 items-center justify-center sm:py-7'>
            <Fcpx className='w-10 h-10' />
            FinalCutPro
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools