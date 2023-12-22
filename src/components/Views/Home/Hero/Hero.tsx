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
        <header className={styles.wrapper}>
            <div>
                <hgroup>
                    <h1>{props.title}</h1>
                    <h2>{props.slogan}</h2>
                </hgroup>
            </div>
            <figure>
                <video
                    autoPlay
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