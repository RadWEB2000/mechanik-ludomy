"use client"
import {AnimatePresence,motion} from "framer-motion";
import { useState } from "react";
import Item from "layout/Navigation/Menu/Item";
import styles from "layout/Navigation/Menu/Submenu/Submenu.module.scss";


type tSubmenu = {
    label:string;
    uri:string;
    submenu:{
        label:string;
        uri:string;
    }[];
}

export default function Submenu(props:tSubmenu){
    const [isOpenDropdown,setIsOpenDropdown] = useState(false);
   
    return(
        <li className={styles.wrapper}>
            <Item
                handleOpenDropdown={() => setIsOpenDropdown(!isOpenDropdown)}
                isOpenDropdown={isOpenDropdown}
                label={props.label}
                theme="expand"
                uri={props.uri}
            />
            {
                isOpenDropdown &&
                <AnimatePresence>
                    <motion.ul className={styles.box}>
                        {
                            props.submenu.map((item,index) => {
                                return(
                                    <Item
                                        key={`${item.label}-${item.uri}-${index+1}`}
                                        label={item.label}
                                        theme="submenu"
                                        uri={item.uri}
                                    />
                                )
                            })
                        }
                    </motion.ul>
                </AnimatePresence>
            }
            
        </li>
    )
}