import { BlogCard } from "utils/Cards";
import { articles } from "data/articles";
import { Hero, Search } from "utils/Parts"

export default function HomePage() {
    return (
        <div>
            <Hero
                title="Blog"
            />
            <main className="container blog__container">
                <Search
                    label="Szukaj"
                    name="search"
                    placeholder="Wpisz tutaj"
                />
                <ul>
                    {articles.map((item,index) => {
                        return(
                            <BlogCard
                                button={item.button}
                                excerpt={item.excerpt}
                                image={item.image}
                                key={index}
                                title={item.title}
                                uri={item.uri}
                                theme="regural"
                            />
                        )
                    })}
                </ul>
            </main>
        </div>
    );
}
