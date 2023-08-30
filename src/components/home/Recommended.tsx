"use client";
import React, { useState } from 'react';
import classes from "@/styles/filter.module.scss";
import Image from "next/image";
import Link from "next/link";

const Recommended = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const [url, setUrl] = useState('new')
    const title = "Recommended Cars"
    const tabs = [
        {id: 1, title: 'New', url: 'new'},
        {id: 2, title: 'Used',  url: 'used'}
    ];

    const handleTabClick = (e) => {
        console.log(e.target.id);
        setCurrentTab(e.target.id);
    }

    return (
        <div className={`container mx-auto my-[90px] px-[15px]`}>
            <div className={`widget-title font-bold text-[24px] mb-[24px]`}>{title}</div>
            <div className={`widget-header flex justify-between mb-[24px]`}>
                <ul className='flex justify-start'>
                    {tabs.map((tab, i) =>
                        <li key={i}
                            id={tab.id}
                            className={`${currentTab === `${tab.id}` ? classes.active : ''} ${classes.primary_color} flex justify-center cursor-pointer text-[20px] w-[120px]`}
                            onClick={(handleTabClick)}>{tab.title}</li>
                    )}
                </ul>
                {tabs.map((tab, i) =>
                    <Link key={i} href={`${currentTab === `${tab.id}` ? `${tab.url}` : ''}`}
                          className={`${classes.primary_color} cursor-pointer relative pr-[10px] ${currentTab === `${tab.id}` ? `block` : 'hidden'}`}>
                        <span>See more</span>
                        <Image src="/images/right.svg"
                               className={`absolute top-[1px] right-[-10px]`}
                               width={12}
                               height={12}
                               alt="right-arrow"
                        />
                    </Link>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div>{tab.title}</div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default Recommended;
