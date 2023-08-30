"use client";
import React from 'react';
import Select, { type DropdownIndicatorProps, components } from "react-select";

const LocationSelect = () => {
    const location = [
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'USA', label: 'USA' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Great Britain', label: 'Great Britain' }
    ]
    const LocationIcon = () => {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
    };
    const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
        return (
            <components.DropdownIndicator {...props}>
                <LocationIcon />
            </components.DropdownIndicator>
        );
    };
 return (
     <Select className={`basis-[33%] mr-[2%] mt-[18px] max-h-[48px]`}
             id="location"
             instanceId="location"
             name="location"
             classNamePrefix="select"
             options={location}
             placeholder="Location"
             components={{ DropdownIndicator }}
     />
  );
}

export default LocationSelect;
