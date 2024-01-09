"use client";
import { MenuItem } from "layout/Navigation";
import { useState } from "react";
import { AnimatePresence ,motion} from "framer-motion"
import css from "layout/Navigation/Menu/Submenu/Submenu.module.scss";

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
        <li className={css.wrapper} onMouseLeave={() => toggleOpenDropdown(false)}>
            <MenuItem
                isOpenDropdown={isOpenDropdown}
                label={props.label}
                toggleExpand={() => toggleOpenDropdown(!isOpenDropdown)}
                theme="expand"
                uri={props.uri}
                />
            <AnimatePresence>
                {
                    isOpenDropdown &&
                    <motion.ul 
                        className={css.box}
                        initial={{
                            height:0,
                            opacity:0,
                            padding:"0",
                            visibility:"hidden"
                        }}
                        animate={{
                            height:"auto",
                            opacity:1,
                            visibility:"visible",
                            padding:"2rem",
                        }}
                        exit={{
                            height:0,
                            opacity:0,
                            padding:"0",
                            visibility:"hidden"
                        }}
                    >
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
                    </motion.ul>        
                }
            </AnimatePresence>
            
        </li>
    )
}