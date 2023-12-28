import { tImage } from "ts/types";
import Image from "next/image";
import css from "views/HomePage/About/About.module.scss";
import { ReadMoreButton } from "utils/Buttons";

type tAbout = {
    button:string;
    content:string;
    motto:string;
    image:tImage;
    title:string;
    uri:string;
}

export default function About(props:tAbout){
    return(
        <div className={css.wrapper}>
            <section className={css.box}>
                <h2 className={css.title}>{props.title}</h2>
                <p  className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="secondary"
                    uri={props.uri}
                />
            </section>
            <p className={css.motto} dangerouslySetInnerHTML={{__html:props.motto}} />
            <figure className={css.image}>
                <Image
                    alt={props.image.altText}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.altText}
                    quality={75}
                />
            </figure>
        </div>
    )
}