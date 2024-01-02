"use client"
import { tImage } from 'ts/types';
import Image from 'next/image';
import Link from 'next/link';
import css from 'views/HomePage/AutomotiveBrands/AutomotiveBrands.module.scss';
import { motion,useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type tAutomotiveBrand = {
    label: string;
    image: tImage;
    uri: string;
};

type tAutomotiveBrands = {
    cards: tAutomotiveBrand[];
};

function AutomotiveBrand(props: tAutomotiveBrand) {
    return (
        <li className={css.card} title={props.label}>
            <Link href={props.uri} title={props.label}>
                <Image
                    alt={props.image.altText}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                    title={props.image.altText}
                    quality={75}
                />
            </Link>
        </li>
    );
}

export default function AutomotiveBrands(props: tAutomotiveBrands) {

    const container = useAnimation();
    const scrollContainer = async () => {
        while(true){
           await container.start({ x: -10 * (props.cards.length - 1) });
            await container.start({ x: 0, transition: { duration: 2, ease: 'linear' } });
    
        }
    }

    useEffect(() => {
        const stopScroll = () => container.stop();
        const resumeScroll = () => scrollContainer();

        scrollContainer();

        return () => container.stop();
    }, []);


    return (
        <div className={css.wrapper}
        >
            <motion.ul className={css.cards}
                  whileHover={{ scale: 1.05 }}

      animate={container}
            >
                {props.cards.map((item, index) => {
                    return <AutomotiveBrand {...item} key={index} />;
                })}
            </motion.ul>
        </div>
    );
}
