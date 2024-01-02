import backgroundBlog from "assets/graphics/background-blog.jpg";
import css from "utils/Parts/Hero/Hero.module.scss";

type tHero = {
    title:string;
}

export default function Hero(props:tHero){
    return(
        <div
            className={css.wrapper}
            style={{
                backgroundImage:`url("${backgroundBlog.src}")`  
            }}
        >
            <header className={css.container}>
                <h1 className={css.title}>{props.title}</h1>
            </header>
        </div>
    )
}