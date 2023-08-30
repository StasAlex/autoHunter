import React from 'react';
import Image from 'next/image'
import classes from "@/styles/nav.module.scss";
import Link from "next/link";

const Nav = ({nav}) => {
 return (
       <ul className="flex items-center space-x-10 ml-16 hidden lg:flex" suppressHydrationWarning={true}>
        {nav.map(item => (
            <li key={item.navItem.id} className={`${classes['item']} ${item.navItem.children ? classes['has_child']: ''}`}>
                <Link href={item.navItem.url}
                   className="nav-item text-white-300 hover:underline rounded-md ml-3 pr-3 py-2 text-sm font-medium relative ease-in duration-200"
                >
                    {item.navItem.label}
                    {item.navItem.children ?
                        <div>
                            <Image src="/images/dropdown.svg"
                                   className={`${classes.dropdown_after} absolute right-[-12px] top-[50%] translate-y-[-50%]`}
                                   width={16}
                                   height={8}
                                   alt="dropdown-arrow"
                            />
                            <ul className={classes.dropdown} >
                                {item.navItem.children.map(item => (
                                    <li key={item.id} className="px-3 py-2" >
                                        <a href={item.url} className="hover:underline" >{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        :
                        ''
                    }
                </Link>
            </li>
           ))}
       </ul>
 )}
export default Nav;
