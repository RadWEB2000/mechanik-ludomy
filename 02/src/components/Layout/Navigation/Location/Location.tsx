import Link from 'next/link';
import { FaRegMap } from "react-icons/fa6";

type tLocation = {
    address:string;
    url:string;
}

export default function Location(props:tLocation) {
    return (
        <div>
            <Link href={props.url}>
                <i>
                    <FaRegMap />
                </i>
                <address>{props.address}</address>
            </Link>
        </div>
    );
}
