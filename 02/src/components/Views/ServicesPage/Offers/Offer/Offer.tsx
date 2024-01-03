import { tImage } from "ts/types";
import Image from "next/image";
import { ReadMoreButton } from "utils/Buttons";
import css from "views/ServicesPage/Offers/Offer/Offer.module.scss";

type tOffer = {
    button:string;
    content:string;
    image:tImage;
    title:string;
    uri:string;
}   

export default function Offer(props:tOffer){
    return(
        <section className={css.wrapper}>
            <div className={css.container}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="secondary"
                    uri={props.uri}
                />
            </div>
            <figure className={css.image}>
                <Image
                    alt={props.image.altText}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.altText}
                    quality={75}
                />
            </figure>
        </section>
    )
}