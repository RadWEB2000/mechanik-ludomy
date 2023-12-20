import { tImage } from "ts/types";
import Image from "next/image";
import styles from "views/Home/Hero/Hero.module.scss";
import Link from "next/link";

type tHero = {
    image:string;
    slogan:string;
    title:string;
    openingHours:{
        title:string;
        hours:{
            day:string;
            hours:string;
        }[];
    }
}

export default function Hero(props:tHero){
    return (
        <header 
            className={styles.wrapper} 
            style={{
                backgroundImage:`url('${props.image}')`
            }}
        >
                <hgroup className={styles.headings}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <h2 className={styles.slogan}>{props.slogan}</h2>
                </hgroup>
                <dl className={styles.hours}>
                    <h4 className={styles.title} dangerouslySetInnerHTML={{__html:props.openingHours.title}} />
                    <ul className={styles.items}>
                        {props.openingHours.hours.map((item,index) => {
                            return(
                                <div className={styles.item} key={index}>
                                    <dt className={styles.day}
                                        dangerouslySetInnerHTML={{__html:item.day}}
                                    />
                                    <dd className={styles.hour}
                                        dangerouslySetInnerHTML={{__html:item.hours}}
                                    />
                                </div> 
                            )
                        })}
                    </ul>
                </dl>
        </header>
    )
}