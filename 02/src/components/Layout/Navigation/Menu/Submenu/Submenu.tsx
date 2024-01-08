"use client";
import { MenuItem } from "layout/Navigation";
import { useState } from "react";

type tSubmenu = {
    label:string;
    uri:string;
    submenu:{
        label:string;
        uri:string;
    }[];
}

export default function Submenu(props:tSubmenu){
    const [isOpenDropdown,toggleOpenDropdown] = useState<boolean>(false);
    return (
        <li>
            <MenuItem
                isOpenDropdown={isOpenDropdown}
                label={props.label}
                toggleExpand={() => toggleOpenDropdown(!isOpenDropdown)}
                theme="expand"
                uri={props.uri}
            />
            <ul data-expand={isOpenDropdown}>
                {props.submenu.map((item,index) => {
                    return(
                        <MenuItem
                            closeExpand={() => toggleOpenDropdown(false)}
                            label={item.label}
                            key={index}
                            theme="submenu"
                            uri={item.uri}
                        />
                    )      
                })}
            </ul>
        </li>
    )
}