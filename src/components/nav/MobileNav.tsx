'use client';
import React, {useState} from 'react';
import classes from "@/styles/nav.module.scss";
import Image from "next/image";
import Link from "next/link";

const MobileNav = ({nav}) => {
    const [display, setDisplay] = useState(false);
    const toggleMobileNav = () => setDisplay((prevDisplay) => !prevDisplay)

    return (
        <div className={classes.mobile_nav}>
            <Image src="/images/burger.svg"
                className={`${classes.mobile_nav} block lg:hidden text-white ml-[20px] cursor-pointer`}
                width={20}
                height={20}
                alt="burger-icon"
                onClick={toggleMobileNav}
            />
            <ul className={`${display ? classes.opened : classes.closed} flex flex-col justify-center items-start absolute
             top-0 ease-in-out duration-300 py-7 px-5`} suppressHydrationWarning>
                <Image src="/images/close.svg"
                       className={`${classes.dropdown_after} absolute top-4 right-4 cursor-pointer`}
                       width={16}
                       height={8}
                       alt="dropdown-arrow"
                       onClick={toggleMobileNav}
                />
                {nav.map(item => (
                    <li key={item.navItem.label} className={`${classes['item']} py-2`}>
                        <Link href={item.navItem.url}
                           className="nav-item text-white-300 hover:underline ml-3 text-sm font-medium relative ease-linear duration-200"
                        >
                            {item.navItem.label}
                        </Link>
                        {item.navItem.children ?
                            <ul className="ml-5 pt-1">
                                {item.navItem.children.map(item => (
                                    <li key={item.label} className="px-3 py-1" >
                                        <Link href={item.url} className="hover:underline text-sm font-medium" >{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                            :
                            ''
                        }
                    </li>
                ))}
            </ul>
     </div>
  );
}

export default MobileNav;
