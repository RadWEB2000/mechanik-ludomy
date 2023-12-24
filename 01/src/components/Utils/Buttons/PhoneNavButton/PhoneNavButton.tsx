import Link from "next/link";
import styles from "utils/Buttons/PhoneNavButton/PhoneNavButton.module.scss"
import {motion} from "framer-motion";

type tPhoneNavButton = {
    icon:React.ReactNode;
    label:string;
    uri:string;
}

export default function PhoneNavButton(props:tPhoneNavButton){
    return(
        <Link aria-label={`${props.label} tel:${props.uri}`} href={`tel:${props.uri}`} title={`${props.label} tel:${props.uri}`}>
            <motion.a
                className={styles.wrapper}
                whileHover={{
                    filter: 'brightness(125%)',
                    scale:1.05
                }}
                whileTap={{
                    scale:0.92
                }}
            >
                {props.icon}
            </motion.a>
        </Link>
    )
}