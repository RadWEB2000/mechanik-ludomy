"use client";
import Brand from "layout/Navigation/Brand";
import { tBrand, tImage, tMenu } from "ts/types";
import Menu from "layout/Navigation/Menu";
import { MenuButton } from "utils/Buttons";
import styles from "layout/Navigation/Navigation.module.scss";
import { useContext } from "react";
import { LayoutContext } from "context/LayoutContext";

type tNavigation = {
    brand:tBrand & {
        image:tImage;
    };
    menu:tMenu[];
    settings: {
        menuButton:string;
    }
}

export default function Navigation(props:tNavigation){
    const {menu:{isOpen}} = useContext(LayoutContext);
    return(
        <nav className={styles.wrapper} data-open-menu={isOpen ? "open" : "close"}>
            <div className={styles.brand}>
                <Brand {...props.brand} />
            </div>
            <div className={styles.menu}>
                <Menu 
                    items={props.menu}
                />
            </div>            
            <div className={styles.settings}>
                <MenuButton 
                    label={props.settings.menuButton}
                />
            </div>
        </nav>
    )
}