import { ReadMoreButton } from "utils/Buttons";
import Link from "next/link";
import { tImage } from "ts/types";
import Image from "next/image";
import css from "views/HomePage/Services/Services.module.scss";

type tServices = {
    button:string;
    content:string;
    excerpt:string;
    items:{
        button:string;
        image:tImage;
        title:string;
        uri:string;
    }[];
    uri:string;
    title:string;
}

export default function Services(props:tServices){
    return(
        <div
            className={css.wrapper}
        >
            <div className={css.container}>
                <h2 className={css.title}>{props.title}</h2>
                <p className={css.excerpt} dangerouslySetInnerHTML={{__html:props.excerpt}} />
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="secondary"
                    uri={props.uri}
                />
                <ul className={css.cards}>
                    {props.items.map((item,index) => {
                        return(
                            <li className={css.card} key={index}>
                                <figure className={css.image}>
                                     <Image
                                        alt={item.image.altText}
                                        blurDataURL=""
                                        fill
                                        loading="lazy"
                                        src={item.image.sourceUrl}
                                        style={{
                                            objectFit:"cover",
                                            objectPosition:"center"
                                        }}
                                        title={item.image.altText}
                                        quality={75}
                                    />
                                </figure>
                                <h3 className={css.title}>{item.title}</h3>
                                <Link className={css.button} href={item.uri}>
                                    {item.button}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
            </div>
        </div>    
    )
}