'use client';
import React, {useState} from 'react';
import classes from "@/styles/filter.module.scss";
import {FilterForm} from "@/components";

const Categories = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {id: 1, title: 'All'},
        {id: 2, title: 'New'},
        {id: 3, title: 'Used'}
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className={`${classes.filter} p-[24px]`}>
            <ul className='flex justify-center mb-[24px]'>
                {tabs.map((tab, i) =>
                    <li key={i}
                        id={tab.id}
                        className={`${currentTab === `${tab.id}` ? classes.active : ''} ${classes.primary_color} flex justify-center cursor-pointer text-[20px] w-[120px]`}
                        onClick={(handleTabClick)}>{tab.title}</li>
                )}
            </ul>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <FilterForm tab={tab.title}/>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default Categories;
