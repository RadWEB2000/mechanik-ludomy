import { tImage } from "ts/types";
import Image from "next/image";
import { ReadMoreButton } from "app/components/Utils/Buttons";
import css from "views/ServicesPage/About/About.module.scss";

type tAbout = {
    image:tImage;
    title:string;
    uri:string;
    button:string;
    content:string;
}

export default function About(props:tAbout){
    return(
         <section className={css.wrapper}>
            <div className={css.box}>
                <h2 className={css.title}>{props.title}</h2>
                <p className={css.content}>{props.content}</p>
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="primary"
                    uri={props.uri}
                />
            </div>
            <div className={css.image__wrapper}>
                <figure className={css.image}>
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
                </figure>
            </div>
        </section>
    )
}