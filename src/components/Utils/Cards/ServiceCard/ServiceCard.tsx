import Image from "next/image";
import { tImage } from "ts/types";

type tServiceCard = {
    button?:string;
    image:tImage;
    content:string;
    uri?:string;
    title:string;
    theme:"home-big"|"home-small"|"page"
} 

export default function ServiceCard(props:tServiceCard){
    return(
        <li data-theme={props.theme}>
            <figure>
                 <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    priority
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.title}
                    quality={100}
                />
            </figure>
            <section>
                <h3
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
        </li>
    )
}