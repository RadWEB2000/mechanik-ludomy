import { tImage } from "ts/types";
import Offer from "views/ServicesPage/Offers/Offer/Offer";
import css from "views/ServicesPage/Offers/Offers.module.scss"

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
        <div className={css.wrapper}>
            <section className={css.container}>
                <h2 className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
                <p className={css.content} dangerouslySetInnerHTML={{__html:props.content}} />
            </section>
            <ul className={css.cards}>
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