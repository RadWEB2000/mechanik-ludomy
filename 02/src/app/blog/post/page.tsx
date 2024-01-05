import { ContentBox } from "utils/Parts";
import { FeaturedImage, Hero } from "views/PostPage";

export default function HomePage() {
    return (
        <div>
            <Hero/>
            <FeaturedImage/>
            <ContentBox/>
        </div>
    );
}
