import { HeroButton } from "utils/Buttons";
import styles from "views/HomePage/Hero/Hero.module.scss";

type tHero = {
    buttons?:{
        label:string;
        uri:string;
    }[];
    slogan:string;
    title:string;
    video:string;
}


export default function Hero(props:tHero){
    return(
        <div className={styles.wrapper}>
            <section className={styles.content}>
                <hgroup className={styles.headings}>
                    <h1 
                        className={styles.title} 
                        dangerouslySetInnerHTML={{__html:props.title}} 
                    />
                    <h2 
                        className={styles.slogan} 
                        dangerouslySetInnerHTML={{__html:props.slogan}} 
                    />
                </hgroup>
                {
                    props.buttons &&
                    <ul className={styles.buttons}>
                        {props.buttons.map((item,index) => {
                            return(
                                <HeroButton {...item} key={index} />
                            )
                        })}
                    </ul>
                }
            </section>
            <figure className={styles.video__box}>
                <video 
                    autoPlay
                    className={styles.video}
                    loop
                    muted
                    src={props.video}
                />
            </figure>
        </div>
    )
}