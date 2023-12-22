import styles from "views/Home/Hero/Hero.module.scss";

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
        <header className={styles.wrapper}>
            <hgroup className={styles.headings}>
                <h1 className={styles.title}>{props.title}</h1>
                <h2 className={styles.slogan}>{props.slogan}</h2>
            </hgroup>
            <figure className={styles.movie__box}>
                <video
                    autoPlay
                    className={styles.movie}
                    crossOrigin="anonymous"
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="metadata"
                    muted
                    src="heroMovie.mp4"
                    loop
                />
            </figure>
        </header>
    )
}