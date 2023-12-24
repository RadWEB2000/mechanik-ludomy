import { LayoutContext } from "context/LayoutContext";
import { useContext } from "react";
import styles from "utils/Buttons/MenuButton/MenuButton.module.scss";
import {motion} from "framer-motion"

type tMenuButton = {
    label:string;
}

export default function MenuButton(props:tMenuButton){
    const {menu:{isOpen,toggle}} = useContext(LayoutContext);
    return(
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="menu_button">
                {props.label}
            </label>
            <motion.button 
                className={styles.button} 
                data-open-menu={isOpen ? "open" : "close"}             
                id="menu_button" 
                onClick={toggle} 
                name="menu_button" 
                whileHover={{
                    scale:1.05
                }}
                whileTap={{
                    scale:.94
                }}
            >
                <span className={styles.line} />
                <span className={styles.line} />
            </motion.button>
        </div>
    )
}