import { About, Hero, ServicesOverview } from "views/HomePage"
import { FaCar,FaHandsHelping } from "react-icons/fa";
import mechanicImage from "assets/graphics/patryk-profile-image.jpg";

export default function HomePage() {
    return (
        <div>
            <Hero
                slogan="Patryk Łusiewicz"
                title="Mechanik Ludomy"
                video="/assets/movies/background.mp4"
                buttons={[
                    {
                        label:"Blog",
                        uri:"#"
                    },
                    {
                        label:"Usługi",
                        uri:"#"
                    },
                    {
                        label:"Kontakt",
                        uri:"#"
                    },
                ]}
            />
            <main>
                <ServicesOverview
                    button="Więcej"
                    items={[
                        {
                            content:"Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol",
                            icon:<FaCar />,
                            title:"Naprawa aut",
                            uri:"#"
                        },
                        {
                            content:"Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol",
                            icon:<FaHandsHelping />,
                            title:"Doradztwo",
                            uri:"#"
                        },
                    ]}
                />
                <About
                    button="Dowiedz się więcej"
                    content={`Qui odio labore. Repudiandae qui delectus. Quaerat vel sapiente occaecati laborum esse rerum. Pariatur quo deleniti possimus distinctio et. Rerum autem hic sint maxime itaque eaque aut. Aliquid et assumenda. Reiciendis asperiores veritatis non porro deserunt harum nulla consequatur. Vero nam beatae impedit cumque non soluta. Quo in sint explicabo deui.`}
                    image={{
                        altText:"",
                        sourceUrl:mechanicImage.src
                    }}
                    motto="Twoje auto, nasza pasja"
                    title="O firmie"
                    uri="#"
                />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ullam possimus? Ea qui quibusdam labore culpa iusto nemo temporibus modi nihil dolorum amet aut neque doloremque nobis eius dolore, quidem a quaerat fuga cumque sit velit nam impedit at quasi? Ullam sed iste ad praesentium rem exercitationem quo quisquam corporis dolores quod. Corporis veniam magnam accusamus quos vel? Beatae qui rem eveniet eum tenetur dolor! Voluptatibus amet sint perferendis deleniti esse fugit autem, earum culpa nihil illo unde sunt natus sapiente vitae consectetur placeat, voluptate saepe odit nesciunt fuga magnam ullam? In eaque beatae aperiam animi est, obcaecati nisi necessitatibus sequi enim impedit voluptate tenetur earum eveniet sunt eos laboriosam velit vero dolore modi fuga eligendi totam? Earum, culpa velit.
            </main>
        </div>
    );
}
