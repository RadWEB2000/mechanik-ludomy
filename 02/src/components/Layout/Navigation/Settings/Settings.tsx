import { MenuButton } from "utils/Buttons";
import css from "layout/Navigation/Settings/Settings.module.scss";

type tSettings = {
    menuButton:string;
}

export default function Settings(props:tSettings){
    return (
        <div className={css.wrapper}>
            <MenuButton
                label={props.menuButton}
            />
        </div>
    )
}