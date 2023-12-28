import Link from "next/link";

type tMenuItem = {
    label:string;
    uri:string;
} & (
    {
        theme:"expand"
    } |
    {
        theme:"regural"
    } |
    {
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
                <button></button>
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
                <Link href={props.uri}>
                    {props.label}
                </Link>
            </li>
        )
    }
}