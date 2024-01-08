import { MenuButton } from "utils/Buttons";

type tSettings = {
    menuButton:string;
}

export default function Settings(props:tSettings){
    return (
        <div>
            <MenuButton
                label={props.menuButton}
            />
        </div>
    )
}