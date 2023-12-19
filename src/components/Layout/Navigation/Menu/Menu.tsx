import { tMenu as tMenuData } from "app/types/types"
import Item from "layout/Navigation/Menu/Item";
import Submenu from "layout/Navigation/Menu/Submenu";
import styles from "layout/Navigation/Menu/Menu.module.scss";

type tMenu = {
    items:tMenuData[];
}

export default function Menu(props:tMenu){
    return(
        <menu className={styles.wrapper}>
            {props.items.map((item,index) => {
                if(item.submenu){
                    return (
                        <Submenu
                            key={`${item.label}-${item.uri}-${index+1}`}    
                            label={item.label}
                            submenu={item.submenu}
                            uri={item.uri}    
                        />
                    )
                }else{
                    return (
                         <Item
                            key={`${item.label}-${item.uri}-${index+1}`}    
                            label={item.label}
                            uri={item.uri}
                            theme="regural"
                        />
                    )
                }
            })}
        </menu>
    )   
}