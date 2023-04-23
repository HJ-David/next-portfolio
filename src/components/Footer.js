import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full z-50 border-t-2 border-solid border-dark/10 font-light text-sm dark:text-light dark:border-light/10 sm:text-sm
    "
    >
      <Layout className="py-3 flex items-center justify-between lg:flex-col lg:py-3">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          by&nbsp;
          <Link
            href="https://"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Hunjin
          </Link>
        </div>
      
      </Layout>
    </footer>
  );
};

export default Footer;
