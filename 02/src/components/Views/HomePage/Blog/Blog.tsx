'use client';
import { motion } from 'framer-motion';
import { ReadMoreButton } from 'app/components/Utils/Buttons';
import { BlogCard } from 'utils/Cards';
import css from 'views/HomePage/Blog/Blog.module.scss';
import { tImage } from 'ts/types';
import { useEffect, useState } from 'react';

type tBlog = {
    title: string;
    content: string;
    button: string;
    uri: string;
    cards: {
        title: string;
        uri: string;
        image: tImage;
        button: string;
        excerpt: string;
    }[];
};

export default function Blog(props: tBlog) {
    const [getDeviceSize, setDeviceSize] = useState<number>(2);

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1100) {
                    setDeviceSize(4);
                } else if (window.innerWidth >= 900) {
                    setDeviceSize(3);
                } else {
                    setDeviceSize(2);
                }
            });

            if (window.innerWidth >= 1100) {
                setDeviceSize(4);
            } else if (window.innerWidth >= 900) {
                setDeviceSize(3);
            } else {
                setDeviceSize(2);
            }
        }
    }, []);

    return (
        <div className={css.wrapper}>
            <section className={css.container}>
                <h2 className={css.title}>{props.title}</h2>
                <p className={css.content} dangerouslySetInnerHTML={{ __html: props.content }} />
                <ReadMoreButton iconify label={props.button} theme="primary" uri={props.uri} />
            </section>
            <motion.div className={css.cards__wrapper}>
                <motion.ul className={css.cards}>
                    {props.cards.slice(0, getDeviceSize).map((item, index) => {
                        return (
                            <BlogCard
                                title={item.title}
                                button={item.button}
                                key={index}
                                image={item.image}
                                uri={item.uri}
                                excerpt={item.excerpt}
                                theme="regural"
                            />
                        );
                    })}
                </motion.ul>
            </motion.div>
        </div>
    );
}
