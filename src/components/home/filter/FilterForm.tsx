"use client";
import React, { useState } from 'react';
import Select, { type DropdownIndicatorProps, components } from "react-select";
import MultiRangeSlider from "multi-range-slider-react";
import classes from "@/styles/filter.module.scss";
import Image from "next/image";
import { LocationSelect } from "@/components";

const FilterForm = (props) => {
    const { tab }  = props;
    const options = {
        placeholder: "Model"
    };
    const models = [
        { value: 'Ford', label: 'Ford' },
        { value: 'Mazda', label: 'Mazda' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Volkswagen', label: 'Volkswagen' }
    ]
    const brand = [
        { value: 'Ford', label: 'Ford' },
        { value: 'Mazda', label: 'Mazda' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Volkswagen', label: 'Volkswagen' }
    ]
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(300000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const CaretDownIcon = () => {
        return (
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.31445 1L9.31445 9L17.3145 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
    };

    const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon />
            </components.DropdownIndicator>
        );
    };

    return (
        <form className={`flex flex-wrap`}>
            <label htmlFor="search" className={`${classes.search_label} basis-[48%] mr-[2%] relative`}>
                <Image className={`absolute top-[50%] left-[20px] translate-y-[-50%]`}
                    src="/images/search.svg"
                       width={20}
                       height={20}
                       alt="search-icon"
                />
                <input className={`${classes.search} max-h-[48px] w-[100%] focus-visible:outline-none p-[12px] pl-[56px] font-semibold text-[18px] cursor-pointer`}
                       name="search"
                       type="text"
                       placeholder="Search"
                       required
                />
            </label>
            <Select className={`${classes.model} font-semibold text-[14px] basis-[24%] mr-[2%] max-h-[48px]`}
                    id="model"
                    instanceId="model"
                    name="model"
                    classNamePrefix="select"
                    options={models}
                    placeholder="Model"
                    components={{ DropdownIndicator }}
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            <Select className={`${classes.model} font-semibold text-[14px] basis-[24%] max-h-[48px]`}
                    id="brand"
                    instanceId="brand"
                    name="brand"
                    classNamePrefix="select"
                    options={brand}
                    placeholder="Brand"
                    components={{ DropdownIndicator }}
            />
            <LocationSelect />
            <div className={`flex w-[100%] min-w-[48%] basis-[48%] mr-[2%] mt-[18px]`}>
                <div className={`range-info grow-0 mr-[16px] text-[18px]`}>
                    <div className="range-title">Price Range</div>
                    <div className="range-limits">
                        $<span className={`range-min`}>0</span>-$<span  className={`range-max`}>3,000,000.00</span>
                    </div>
                </div>
                <MultiRangeSlider className={`grow`}
                    min={0}
                                  max={300000}
                                  step={500}
                                  minValue={minValue}
                                  maxValue={maxValue}
                                  onInput={(e) => {
                                      handleInput(e);
                                  }}
                />
            </div>
            <button className={`${classes.submit} text-[15px] py-[15px] px-[60px] rounded-[4px] basis-[15%] mt-[18px]`}>Search</button>
        </form>
    );
}

export default FilterForm;
