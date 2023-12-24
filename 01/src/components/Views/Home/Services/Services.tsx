import { ServiceCard } from "utils/Cards";
import { tImage } from "ts/types";

type tServices = {
    button:string;
    cards?: {
        image:tImage;
        content:string;
        isBig?:boolean;
        uri?:string;
        title:string;
    }[];
    content:string;
    title:string;
}

export default function Services(props:tServices){
    return(
        <section
        style={{
            backgroundColor:"rgb(238, 123, 0)",
            padding:"5rem 12rem"
        }}
        >
            <h2
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            <p
                dangerouslySetInnerHTML={{__html:props.content}}
            />
            {
                props.cards &&
                <ul>
                    {props.cards.map((item,index) => {
                        return (
                            <ServiceCard
                                button={props.button}
                                content={item.content}
                                image={item.image}
                                key={index}
                                theme={item.isBig ? "home-big" : "home-small"}
                                title={item.title}
                                uri={item.uri}
                            />
                        )
                    })}
                </ul>
            }
        </section>
    )
}