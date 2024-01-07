import { tImage } from "ts/types";
import Image from "next/image";
import Link from "next/link";
import css from "utils/Cards/BlogCard/BlogCard.module.scss"
import {FaChevronLeft, FaChevronRight } from "react-icons/fa";

type tBlogCard = {
  
    title:string;
    uri:string;
} & (
    {
        direction:"left"|"right";
        theme:"receommended",
        
    } |{
        button:string;
        excerpt:string;
        image:tImage;
        theme:"regural"
    } 
)

type tRecommendedBlogCard = {
    direction:"left"|"right";
    title:string;
    uri:string;
}

type tReguralBlogCard = {
    image:tImage;
    title:string;
    excerpt:string;
    button:string;
    uri:string;
}



function RecommendedBlogCard(props:tRecommendedBlogCard){
    return(
        <div  className={css.recommended__wrapper} data-direction={props.direction}>
            <Link href={props.uri}>
                <i>
                    {props.direction === "left" ? <FaChevronLeft />
 : <FaChevronRight />
 }
                </i>
                <p>{props.title}</p>
            </Link>
        </div>
    )
}


function RegularBlogCard(props:tReguralBlogCard){
    return(
        <li className={css.regular__wrapper}>
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
    if(props.theme === "regural"){ return <RegularBlogCard {...props} />}
    else if(props.theme === "receommended"){ return <RecommendedBlogCard {...props} />}
}