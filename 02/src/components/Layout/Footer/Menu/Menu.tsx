import Link from "next/link";
import css from "layout/Footer/Menu/Menu.module.scss";
type tMenu = {
    menu:{
        label:string;
        submenu?:{
            label:string;
            uri:string;
        }[];
        uri:string;
    }[]
}

export default function Menu(props:tMenu){
    return(
        <menu className={css.wrapper}>
            {props.menu.map((item,index) => {
                return(
                    <>
                        <Link className={css.item} href={item.uri} key={index}>
                            {item.label}
                        </Link>
                        {item.submenu && item.submenu.map((item,index) => {
                            return(
                                <Link className={css.item}  href={item.uri} key={index}>
                                    {item.label}
                                </Link>
                            )
                        })}
                    </>
                )
            })}
        </menu>
    )
}