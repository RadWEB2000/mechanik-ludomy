import { ReadMoreButton } from "utils/Buttons";
// import Link from "next/link";
import { tImage } from "ts/types";
// import Image from "next/image";
import css from "views/HomePage/Services/Services.module.scss";
import Link from "next/link";


type tServices = {
    button:string;
    content:string;
    excerpt:string;
    items:tCard[];
    uri:string;
    title:string;
}

type tCard = {
    button:string;
    image:tImage;
    title:string;
    uri:string;
}

function Card(props:tCard) {
    return(
        <li className={css.card}
            style={{
                backgroundImage:`url('${props.image.sourceUrl}')`
            }}
        >
            <h3 className={css.title}>{props.title}</h3>
            <p className={css.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende
            </p>
            <div className={css.button__wrapper}>
                <Link className={css.button} href={props.uri}>
                    {props.button}
                </Link>
            </div>
        </li>
    )
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
                        return <Card
                            {...item}
                            key={index}
                        />
                    })}
                </ul>
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
            </div>
        </div>    
    )
}