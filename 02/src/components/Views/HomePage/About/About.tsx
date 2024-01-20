import Image, { StaticImageData } from 'next/image';
import css from 'views/HomePage/About/About.module.scss';
import { ReadMoreButton } from 'utils/Buttons';

type tAbout = {
    button?: {
        label: string;
        uri: string;
    };
    content: string;
    slogan: string;
    image: {
        alt: string;
        src: string | StaticImageData;
        title: string;
    };
    title: string;
};

export default function About(props: tAbout) {
    return (
        <div className={css.wrapper}>
            <section className={css.box}>
                <h2 className={css.title}>{props.title}</h2>
                <p className={css.content} dangerouslySetInnerHTML={{ __html: props.content }} />
                {props.button && (
                    <ReadMoreButton
                        iconify
                        label={props.button.label}
                        theme="secondary"
                        uri={props.button.uri}
                    />
                )}
            </section>
            <p className={css.motto} dangerouslySetInnerHTML={{ __html: props.slogan }} />
            <figure className={css.image}>
                <Image
                    alt={props.image.alt}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={props.image.src}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={props.image.title}
                    quality={75}
                />
            </figure>
        </div>
    );
}
