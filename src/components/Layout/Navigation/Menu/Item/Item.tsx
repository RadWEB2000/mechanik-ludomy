import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "layout/Navigation/Menu/Item/Item.module.scss";

type tItem = {
    label:string;
    uri:string;
} & (
    {
        handleOpenDropdown:() => void;
        isOpenDropdown:boolean;
        theme:"expand"
    } | {
        theme:"regural"
    } | {
        closeOpenDropdown?:() => void;
        theme:"submenu"
    } 
)

export default function Item(props:tItem){
    if(props.theme === "expand"){   
        return(
            <div className={styles.expand}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
                <button onClick={props.handleOpenDropdown}>
                    {
                        props.isOpenDropdown ?
                        <IoIosArrowUp /> :
                        <IoIosArrowDown />
                    }
                </button>
            </div>
        )
    } else if(props.theme === "regural"){
        return(
            <li className={styles.regural}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    } else if(props.theme === "submenu"){
        return(
            <li className={styles.submenu}>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }
}