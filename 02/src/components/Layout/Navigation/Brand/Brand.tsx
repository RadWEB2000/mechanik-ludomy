import { tImage } from "ts/types";
import Image from "next/image";
import Link from "next/link";
import css from "layout/Navigation/Brand/Brand.module.scss";

type tBrand = {
    image:tImage;
    uri:string;
}

export default function Brand(props:tBrand){
    return(
        <Link className={css.wrapper} href={props.uri}>
            <Image
                alt={props.image.altText}
                fill
                src={props.image.sourceUrl}
                style={{
                    objectFit:"contain",
                    objectPosition:"center"
                }}
                title={props.image.title}
            />
        </Link>
    )
}