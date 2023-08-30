import React from 'react';
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

export const Logo = async ({ image }) => {
    return (
        <Link href="/">
         <DatoImage data={image.responsiveImage}/>
        </Link>
  );
}

export default Logo;
