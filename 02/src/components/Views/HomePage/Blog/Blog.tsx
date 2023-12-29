import { ReadMoreButton } from "app/components/Utils/Buttons";
import { BlogCard } from "utils/Cards";
import css from "views/HomePage/Blog/Blog.module.scss";

export default function Blog(){
    return(
        <div className={css.wrapper}>
            <section className={css.container}>
                <h2 className={css.title}>Blog</h2>
                <p className={css.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit error nisi reprehenderit officiis vitae fuga? Incidunt et laborum in quis qui minus facilis sapiente fugiat necessitatibus reprehenderit dignissimos mollitia nostrum expedita maiores ipsam ab similique, quas cum, iure quisquam ducimus quibusdam perferendis.</p>
                <ReadMoreButton
                    iconify
                    label="Wszystkie wpisy"
                    theme="primary"
                    uri="#"
                />
            </section>
            <div className={css.cards__wrapper}>
                <ul className={css.cards}>
                    <BlogCard
                        title="Internal Usability Strategist"
                        button="czytaj"
                        image={{
                            altText:"",
                            sourceUrl:"https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1703875597~exp=1703876197~hmac=18897ecea0e6a8fedb95f7d96504c05c82704f3b2ebcbf81f6b856a5b48ba0bb",
                            title:""
                        }}
                        uri="#"
                        excerpt={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi ab eius aut placeat odit, quasi quibusdam velit atque pariatur sit, asperiores doloremque nemo maxime temporibus odio rerum, aliquam quam molestias! Et illum nisi ea harum quod ipsum dolore fugit, quibusdam, nemo similique esse ab! Autem assumenda vel tempora? Corrupti, voluptatem?`}
                        theme="regural"
                    />               
                    <BlogCard
                        title="Internal Usability Strategist"
                        button="czytaj"
                        image={{
                            altText:"",
                            sourceUrl:"https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1703875597~exp=1703876197~hmac=18897ecea0e6a8fedb95f7d96504c05c82704f3b2ebcbf81f6b856a5b48ba0bb",
                            title:""
                        }}
                        uri="#"
                        excerpt={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi ab eius aut placeat odit, quasi quibusdam velit atque pariatur sit, asperiores doloremque nemo maxime temporibus odio rerum, aliquam quam molestias! Et illum nisi ea harum quod ipsum dolore fugit, quibusdam, nemo similique esse ab! Autem assumenda vel tempora? Corrupti, voluptatem?`}
                        theme="regural"
                    />               
                    <BlogCard
                        title="Internal Usability Strategist"
                        button="czytaj"
                    
                        image={{
                            altText:"",
                            sourceUrl:"https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1703875597~exp=1703876197~hmac=18897ecea0e6a8fedb95f7d96504c05c82704f3b2ebcbf81f6b856a5b48ba0bb",
                            title:""
                        }}
                        uri="#"
                        excerpt={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi ab eius aut placeat odit, quasi quibusdam velit atque pariatur sit, asperiores doloremque nemo maxime temporibus odio rerum, aliquam quam molestias! Et illum nisi ea harum quod ipsum dolore fugit, quibusdam, nemo similique esse ab! Autem assumenda vel tempora? Corrupti, voluptatem?`}
                        theme="regural"
                    />               
                    <BlogCard
                        title="Internal Usability Strategist"
                        button="czytaj"
                    
                        image={{
                            altText:"",
                            sourceUrl:"https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1703875597~exp=1703876197~hmac=18897ecea0e6a8fedb95f7d96504c05c82704f3b2ebcbf81f6b856a5b48ba0bb",
                            title:""
                        }}
                        uri="#"
                        excerpt={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi ab eius aut placeat odit, quasi quibusdam velit atque pariatur sit, asperiores doloremque nemo maxime temporibus odio rerum, aliquam quam molestias! Et illum nisi ea harum quod ipsum dolore fugit, quibusdam, nemo similique esse ab! Autem assumenda vel tempora? Corrupti, voluptatem?`}
                        theme="regural"
                    />               
                    <BlogCard
                        title="Internal Usability Strategist"
                        button="czytaj"
                    
                        image={{
                            altText:"",
                            sourceUrl:"https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1703875597~exp=1703876197~hmac=18897ecea0e6a8fedb95f7d96504c05c82704f3b2ebcbf81f6b856a5b48ba0bb",
                            title:""
                        }}
                        uri="#"
                        excerpt={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa excepturi ab eius aut placeat odit, quasi quibusdam velit atque pariatur sit, asperiores doloremque nemo maxime temporibus odio rerum, aliquam quam molestias! Et illum nisi ea harum quod ipsum dolore fugit, quibusdam, nemo similique esse ab! Autem assumenda vel tempora? Corrupti, voluptatem?`}
                        theme="regural"
                    />   
                </ul>
            </div>            
        </div>
    )
}

