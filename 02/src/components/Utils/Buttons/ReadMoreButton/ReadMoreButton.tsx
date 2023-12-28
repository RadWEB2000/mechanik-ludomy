"use client"
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import {motion} from "framer-motion";
import css from "utils/Buttons/ReadMoreButton/ReadMoreButton.module.scss";

type tReadMoreButton = {
    iconify:boolean;
    label:string;
    theme:"primary"|"secondary";
    uri:string;
}

export default function ReadMoreButton(props:tReadMoreButton){
    return (
        <div className={css.wrapper}>
            <Link href={props.uri} legacyBehavior>
                <motion.a 
                    className={css.container} 
                    data-icon={props.iconify} 
                    data-theme={props.theme} 
                    whileTap={{
                        scale:.92
                    }}
                >
                    <span className={css.label} >
                        {props.label}
                    </span>
                    {
                        props.iconify &&
                        <i className={css.icon}>
                            <FaAngleRight />
                        </i>
                    }
                </motion.a>
            </Link>
        </div>
    )
}