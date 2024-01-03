import { tImage } from "ts/types";
import Image from "next/image";
import { ReadMoreButton } from "app/components/Utils/Buttons";

type tAbout = {
    image:tImage;
    title:string;
    uri:string;
    button:string;
    content:string;
}

export default function About(props:tAbout){
    return(
         <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <ReadMoreButton
                    iconify
                    label={props.button}
                    theme="primary"
                    uri={props.uri}
                />
            </div>
            <div>
                <figure>
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