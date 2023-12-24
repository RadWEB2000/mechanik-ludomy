import Image from "next/image";
import Link from "next/link";
import {tBrand as tBrandData,tImage } from "ts/types";
import styles from "layout/Navigation/Brand/Brand.module.scss";
type tBrand = tBrandData & {
    image:tImage;
}

export default function Brand(props:tBrand){
    return (
        <Link className={styles.wrapper} href={props.uri} title={props.label}>
            <Image
                alt={props.image.altText}
                fill
                loading="eager"
                priority
                src={props.image.sourceUrl}
                style={{
                    objectFit:"contain",
                    objectPosition:"center"
                }}
                title={props.image.title}
                quality={100}
            />
        </Link>
    )
}