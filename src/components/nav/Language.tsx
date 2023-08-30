import React from 'react';
import classes from "@/styles/nav.module.scss";
import { Image as DatoImage } from "react-datocms";
import Image from 'next/image';
import Link from "next/link";

const Language = ({languages}) => {
 return (
     <div className={`${classes.language} relative lg-ml-[38px] ml-[20px]`}>
         <div className="flex items-center cursor-pointer pr-0 lg-pr-3 py-2">
             <Image src="/images/world.svg"
                    className="mr-[5px]"
                    width={16}
                    height={16}
                    alt="dropdown-arrow"
             />
             <span className="mr-[5px] text-sm">EN</span>
             <Image src="/images/dropdown.svg"
                    className={classes.dropdown_after}
                    width={16}
                    height={8}
                    alt="dropdown-arrow"
             />
         </div>
         <ul className={`${classes.dropdown}`}>
             {languages &&
                 languages.map(language => (
                     <li key={language.id} className={classes.language_item}>
                         <Link href={language.url} className="flex items-center px-3 py-2 hover:underline">
                             <span className="max-w-[20px] max-h-[15px] flex mr-[10px]">
                                  <DatoImage data={language.image.responsiveImage} layout={"responsive"}/>
                             </span>
                             <span>{language.label}</span>
                         </Link>
                     </li>
                 ))
             }
         </ul>
     </div>

  );
}

export default Language;
