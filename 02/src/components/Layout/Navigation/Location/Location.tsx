import Link from 'next/link';
import { FaRegMap } from "react-icons/fa6";
import css from "layout/Navigation/Location/Location.module.scss";

type tLocation = {
    address:string;
    url:string;
}

export default function Location(props:tLocation) {
    return (
        <Link className={css.wrapper} href={props.url} target='_blank' rel="noindex nofollow">
            <i className={css.icon} >
                <FaRegMap />
            </i>
            <address className={css.label} >{props.address}</address>
        </Link>
    );
}
