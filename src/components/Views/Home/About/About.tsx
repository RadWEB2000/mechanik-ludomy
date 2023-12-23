import { tImage } from "ts/types";
import Image from "next/image";
import styles from "views/Home/About/About.module.scss"

type tAbout = {
    content:string;
    image:tImage;
    title:string;
}

export default function About(props:tAbout){
    return(
        <div className={styles.wrapper}>
            <section className={styles.content}>
                <header className={styles.title__box}>
                    <h2 
                        className={styles.title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                </header>
                <p 
                    className={styles.text}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            <figure className={styles.image}>
               <Image
                    alt={props.image.altText}
                    fill
                    loading="eager"
                    priority
                    src={props.image.sourceUrl}
                    style={{
                        objectFit:"cover",
                        objectPosition:"center"
                    }}
                    title={props.image.title}
                    quality={100}
                />
            </figure>
        </div>
    )
}