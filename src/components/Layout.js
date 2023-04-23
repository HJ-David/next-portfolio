import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-transparent p-32 dark:bg-transparent relative xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
  )
}

export default Layout