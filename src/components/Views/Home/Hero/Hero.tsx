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
        <div>
            <div></div>
            <figure>
                <video
                    autoPlay
                    crossOrigin="anonymous"
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="metadata"
                    muted
                    loop
                >
                    <source src="heroMovie.mp4" type="mp4"/>
                </video>
            </figure>
        </div>
    )
}