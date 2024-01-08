// "use client";
import { LayoutContext } from "context/LayoutContext";
import { useContext } from "react";

type tMenuButton = { 
    label:string;
}

export default function MenuButton(props:tMenuButton){
    const context = useContext(LayoutContext)
    return(
        <div>
            <label htmlFor="menuButton">{props.label}</label>
            <button data-open={context.menu.isOpen} id="menuButton" name="menuButton" onClick={() => context.menu.toggle()} >
                {context.menu.isOpen ? "ok" : "nie"}
            </button>
        </div>
    )
}