import { tImage } from "ts/types";
import Offer from "views/ServicesPage/Offers/Offer/Offer";

type tOffers = {
    cards : {
        button:string;
        content:string;
        image:tImage;
        title:string;
        uri:string;
    }[];
    content:string;
    title:string;
}

export default function Offers(props:tOffers){
    return(
        <div>
            <section>
                <h2 dangerouslySetInnerHTML={{__html:props.title}} />
                <p dangerouslySetInnerHTML={{__html:props.content}} />
            </section>
            <ul>
                {props.cards.map((item,index) => {
                    return(
                        <Offer
                            {...item}
                            key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}