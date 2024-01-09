// "use client";
import { LayoutContext } from "context/LayoutContext";
import { useContext } from "react";
import css from "utils/Buttons/MenuButton/MenuButton.module.scss";

type tMenuButton = { 
    label:string;
}

export default function MenuButton(props:tMenuButton){
    const context = useContext(LayoutContext)
    return(
        <div className={css.wrapper}>
            <label className={css.label} data-open={context.menu.isOpen} htmlFor="menuButton">{props.label}</label>
            <button className={css.box} data-open={context.menu.isOpen} id="menuButton" name="menuButton" onClick={() => context.menu.toggle()} >
                <span  className={css.line} />
                <span  className={css.line} />
            </button>
        </div>
    )
}