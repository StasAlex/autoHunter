import React from 'react';
import Image from "next/image";
import classes from "@/styles/nav.module.scss";
import Link from "next/link";

const Account = () => {
 return (
   <Link href="/account" className="ml-auto flex items-center text-sm">
       <Image src="/images/account.svg"
              width={24}
              height={24}
              alt="dropdown-arrow"
       />
       <span className="ml-[3px] hidden lg:block">Sign In</span>
   </Link>
  );
}

export default Account;
