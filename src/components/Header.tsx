import React from 'react';
import { Logo, Nav, MobileNav, Account,  Language} from "@/components/"
import styles from '@/styles/header.module.scss'
import {performRequest} from "@/lib/datocms";
import {AllLogos, Navigation, AllLanguages} from "@/queries";

const Header = async () => {
    const { data: { logo: { logoImage } } } = await performRequest({ query: AllLogos });
    const { data: { allNavigations } } = await performRequest({ query: Navigation });
    const { data: { allLanguages } } = await performRequest({ query: AllLanguages });
 return (
   <header className={`${styles.header} container mx-auto py-[11px] px-[15px] z-50`}>
       <nav className="flex justify-start items-center" suppressHydrationWarning>
           <Logo image={logoImage}/>
           <Nav nav={allNavigations}/>
           <Account/>
           <Language languages={allLanguages}/>
           <MobileNav nav={allNavigations}/>
       </nav>
   </header>
  );
}

export default Header;
