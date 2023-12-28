import { ReadMoreButton } from "utils/Buttons";
import Link from "next/link";
import { tImage } from "ts/types";
import Image from "next/image";

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
            style={{
                backgroundColor:"red"
            }}
        >
            <div>
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{__html:props.excerpt}} />
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="secondary"
                    uri={props.uri}
                />
                <ul>
                    {props.items.map((item,index) => {
                        return(
                            <li key={index}>
                                <figure>
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
                                <h3>{item.title}</h3>
                                <Link href={item.uri}>
                                    {item.button}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <p dangerouslySetInnerHTML={{__html:props.content}} />
            </div>
        </div>    
    )
}