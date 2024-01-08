import { MenuItem, Submenu } from "layout/Navigation";
import css from "layout/Navigation/Menu/Menu.module.scss";

type tMenu = {
    menu:{
        label:string;
        uri:string;
        submenu?:{
            label:string;
            uri:string;
        }[];
    }[];
}

export default function Menu(props:tMenu){
    return (
        <menu className={css.wrapper} >
            {props.menu.map((item,index) => {
                if(item.submenu){
                    return(
                        <Submenu
                            key={index}
                            label={item.label}
                            submenu={item.submenu}
                            uri={item.uri}
                        />
                    )
                }else{
                    return (
                        <MenuItem
                            key={index}
                            label={item.label}
                            theme="regural"
                            uri={item.uri}
                        />
                    )
                }
            })}
        </menu>
    )
}