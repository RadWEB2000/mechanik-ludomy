import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type tMenuItem = {
    label:string;
    uri:string;
} & (
    {
        isOpenDropdown:boolean;
        toggleExpand:() => void;
        theme:"expand"
    } |
    {
        theme:"regural"
    } |
    {
        closeExpand:() => void;
        theme:"submenu"
    }
)

export default function MenuItem(props:tMenuItem){
    if(props.theme === "expand"){
        return(
            <div>
                <Link href={props.uri}>
                    {props.label}
                </Link>
                <button onClick={props.toggleExpand}>
                    {props.isOpenDropdown ? <FaAngleDown /> : <FaAngleUp /> }
                </button>
            </div>
        )
    } else if(props.theme === "regural"){
        return (
            <li>
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }else if(props.theme === "submenu"){
        return (
            <li>
                <Link href={props.uri} onClick={props.closeExpand}>
                    {props.label}
                </Link>
            </li>
        )
    }
}