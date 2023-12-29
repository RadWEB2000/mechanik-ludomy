import { tImage } from "ts/types";
import Image from "next/image";
import Link from "next/link";
import css from "utils/Cards/BlogCard/BlogCard.module.scss"

type tBlogCard = {
  
    image:tImage;
    title:string;
    excerpt:string;
    button:string;
    uri:string;
} & (
    {
        theme:"receommended",
        category:{
            label:string;
            uri:string;
        };
    } |{
        theme:"regural"
    } 
)


type tReguralBlogCard = {
    image:tImage;
    title:string;
    excerpt:string;
    button:string;
    uri:string;
}



function RegularBlogCard(props:tReguralBlogCard){
    return(
        <li className={css.recommended__wrapper}>
            <figure>
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
            <div>
              
                <h4>{props.title}</h4>
                <p dangerouslySetInnerHTML={{__html:props.excerpt.substring(0,150) + "..."}} />
                <Link href={props.uri}>
                    {props.button}
                </Link>
            </div>
        </li>
    )
}



export default function BlogCard(props:tBlogCard){
    if(props.theme === "regural") return <RegularBlogCard {...props} />
}