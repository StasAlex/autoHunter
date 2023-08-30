import React from 'react';
import classes from "@/styles/filter.module.scss";
import { Categories } from "@/components"

const Filter = () => {
    return (
        <div className={`container mx-auto mt-[-110px] px-[15px] relative z-50`}>
            <Categories/>
        </div>
    );
}
export default Filter;
