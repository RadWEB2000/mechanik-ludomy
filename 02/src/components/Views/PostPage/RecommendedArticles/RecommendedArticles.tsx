
import { BlogCard } from "utils/Cards";
import css from "views/PostPage/RecommendedArticles/RecommendedArticles.module.scss"
type tArticle = {
    title:string;
    uri:string;
}

type tRecommendedArticles = {
    next:tArticle;
    prev:tArticle;
}


export default function RecommendedArticles(props:tRecommendedArticles){
    return(
        <div className={css.wrapper}>
            <BlogCard
                title={props.prev.title}
                uri={props.prev.uri}
                direction="left"
                theme="receommended"
            />
            <BlogCard
                title={props.next.title}
                uri={props.next.uri}
                direction="right"
                theme="receommended"
            />
        </div>
    )
}