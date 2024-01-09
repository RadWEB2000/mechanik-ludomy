"use client"
import Link from "next/link";
import css from "layout/Footer/Socials/Socials.module.scss";
import {motion} from "framer-motion"

type tSocials = {
    socials : {
        backgroundColor:string;
        icon:React.ReactNode;
        label:string;
        url:string;
    }[];
}

export default function Socials(props:tSocials){
    return(
        <ul className={css.wrapper}>
            {props.socials.map((item,index) => {
                return(
                    <Link  
                        href={item.url} 
                        legacyBehavior
                        key={index} 
                     
                    >
                        <motion.a
                            className={css.item} 
                            style={{
                                backgroundColor:item.backgroundColor,
                            }}
                            whileHover={{
                                filter:"brightness(125%)",
                                boxShadow:`0 0 3rem ${item.backgroundColor}`

                            }}
                            whileFocus={{
                                filter:"brightness(125%)",
                                boxShadow:`0 0 3rem ${item.backgroundColor}`

                            }}
                            whileTap={{
                                scale:.94
                            }}
                        >
                            <i className={css.icon}>{item.icon}</i>
                            <span className={css.label}>{item.label}</span>
                        </motion.a>
                    </Link>
                )
            })}
        </ul>
    )
}