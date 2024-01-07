import { articles } from "data/articles";
import { ContentBox } from "utils/Parts";
import { FeaturedImage, Hero,RecommendedArticles } from "views/PostPage";

export default function HomePage() {
    console.log(articles[0])
    console.log(articles[2])
    return (
        <div>
            <Hero/>
            <FeaturedImage/>
            <ContentBox/>
            <RecommendedArticles
                next={articles[0]}
                prev={articles[2]}
            />
        </div>
    );
}
