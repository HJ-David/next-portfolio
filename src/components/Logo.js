import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-4'>
      <MotionLink
        href='/'
        className='w-10 h-10 bg-transparent text-gray-600 dark:text-light flex items-center justify-center
        rounded-full text-lg font-bold border border-solid border-gray-600 dark:border-light
        '
        whileHover={{
          backgroundColor: [
            "rgba(131,58,180, 0)",
            "rgba(1, 140, 22, 0.5)",
            "rgba(66, 135, 245, 0.5)",
            "rgba(124, 21, 214, 0.5)",
            "rgba(138, 89, 181, 0.5)",
            "rgba(131,58,180, 0)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        HJ
      </MotionLink>
    </div>
  );
}

export default Logo