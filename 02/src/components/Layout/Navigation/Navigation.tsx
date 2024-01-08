"use client";
import {Brand, Location, Menu, Settings} from "layout/Navigation"
import { tImage } from "ts/types";
import css from "layout/Navigation/Navigation.module.scss";
import { useContext } from "react";
import { LayoutContext } from "context/LayoutContext";

type tNavigation = {
    brand: { 
        image:tImage;
        uri:string;
    },
    location : {
        address:string;
        url:string;
    };
    menu:{
        label:string;
        uri:string;
        submenu?:{
            label:string;
            uri:string;
        }[];
    }[];
    settings:{
        menuButton:string;
    }
}

export default function Navigation(props:tNavigation){
    const context = useContext(LayoutContext);
    return(
        <nav className={css.wrapper} data-open-nav={context.menu.isOpen}>
            <div className={css.brand}>
                <Brand
                    {...props.brand}
                />
            </div>
            <div className={css.location}>
                <Location
                    {...props.location}
                />
            </div>
            <div className={css.settings}>
                <Settings
                    {...props.settings}
                />
            </div>
            <div className={css.menu}>
                <Menu
                    menu={props.menu}
                />
            </div>
        </nav>
    )
}