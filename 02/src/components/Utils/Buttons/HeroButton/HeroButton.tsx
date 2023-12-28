"use client"
import Link from "next/link";
import { GrNext } from "react-icons/gr";
import css from "utils/Buttons/HeroButton/HeroButton.module.scss"
import {motion} from "framer-motion";

type tHeroButton = {
    label:string;
    uri:string;
}

export default function HeroButton(props:tHeroButton){
    return(
        <Link href={props.uri} legacyBehavior>
            <motion.a
                className={css.wrapper}
                whileHover={{
                    scale:1.1
                }}
                whileTap={{
                    scale:.95
                }}
            >
                <span>{props.label}</span>
                <i>
                    <GrNext />
                </i>
            </motion.a>
        </Link>
    )
}