"use client"
import Brand from "layout/Navigation/Brand";
import { tBrand, tImage, tMenu } from "ts/types";
import Menu from "layout/Navigation/Menu";
import { MenuButton, PhoneNavButton } from "utils/Buttons";
import styles from "layout/Navigation/Navigation.module.scss";
import { useContext } from "react";
import { LayoutContext } from "context/LayoutContext";
import Link from "next/link";
import { RiMapPin2Fill } from "react-icons/ri";

type tNavigation = {
    brand:tBrand & {
        image:tImage;
    };
    location:string;
    menu:tMenu[];
    settings: {
        menuButton:string;
        phoneButton:{
            icon:React.ReactNode;
            label:string;
            uri:string;
        }
    }
}

export default function Navigation(props:tNavigation){
    const {menu:{isOpen}} = useContext(LayoutContext);
    const googleMaps:string = "https://maps.app.goo.gl/39hib97q6H9WigVD6";
    return(
        <nav className={styles.wrapper} data-open-menu={isOpen ? "open" : "close"}>
            <div className={styles.location}>
                <Link 
                    href={googleMaps}
                    target="_blank"
                    rel="noindex nofollow noopener noreferrer"
                >
                    <i>
                        <RiMapPin2Fill />
                    </i>
                    <span>
                        {props.location}
                    </span>
                </Link>
            </div>
            <div className={styles.brand}>
                <Brand {...props.brand} />
            </div>
            <div className={styles.menu}>
                <Menu 
                    items={props.menu}
                />
            </div>            
            <div className={styles.settings}>
                <PhoneNavButton {...props.settings.phoneButton} />
                <MenuButton 
                    label={props.settings.menuButton}
                />
            </div>
        </nav>
    )
}