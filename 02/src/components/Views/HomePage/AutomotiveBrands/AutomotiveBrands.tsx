import { tImage } from 'ts/types';
import Image from 'next/image';
import Link from 'next/link';
import css from 'views/HomePage/AutomotiveBrands/AutomotiveBrands.module.scss';

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

  

    return (
        <div className={css.wrapper}
        >
            <ul className={css.cards}

            >
                {props.cards.map((item, index) => {
                    return <AutomotiveBrand {...item} key={index} />;
                })}
            </ul>
        </div>
    );
}
