import { About, AutomotiveBrands,  Hero, Services, ServicesOverview } from 'views/HomePage';
import { FaCar, FaHandsHelping } from 'react-icons/fa';
import mechanicImage from 'assets/graphics/patryk-profile-image.jpg';
import { automotiveBrands } from 'data/automotiveBrands';

export default function HomePage() {
    const img =
        'https://img.freepik.com/premium-photo/colorful-poster-car-with-word-fast-it_447899-8737.jpg?w=740';
    return (
        <div>
            <Hero
                slogan="Patryk Łusiewicz"
                title="Mechanik Ludomy"
                video="/assets/movies/background.mp4"
                buttons={[
                    {
                        label: 'Blog',
                        uri: '#',
                    },
                    {
                        label: 'Usługi',
                        uri: '#',
                    },
                    {
                        label: 'Kontakt',
                        uri: '#',
                    },
                ]}
            />
            <main>
                <ServicesOverview
                    button="Więcej"
                    items={ [
                        {
                            content:
                                'Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol',
                            icon: <FaCar />,
                            title: 'Naprawa aut',
                            uri: '#',
                        },
                        {
                            content:
                                'Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol',
                            icon: <FaHandsHelping />,
                            title: 'Doradztwo',
                            uri: '#',
                        },
                    ]}
                />
                <About
                    button="Dowiedz się więcej"
                    content={`Qui odio labore. Repudiandae qui delectus. Quaerat vel sapiente occaecati laborum esse rerum. Pariatur quo deleniti possimus distinctio et. Rerum autem hic sint maxime itaque eaque aut. Aliquid et assumenda. Reiciendis asperiores veritatis non porro deserunt harum nulla consequatur. Vero nam beatae impedit cumque non soluta. Quo in sint explicabo deui.`}
                    image={{
                        altText: '',
                        sourceUrl: mechanicImage.src,
                    }}
                    motto="Twoje auto, nasza pasja"
                    title="O firmie"
                    uri="#"
                />
                <Services
                    button="Poznaj wszystkie"
                    content={`Quas maxime qui incidunt enim aliquam. Quis alias facilis ipsum dicta. Autem qui sequi odio nisi beatae repellendus odio consequatur doloremque. Laudantium deserunt at. Praesentium ut doloremque explicabo ut repellendus quasi. Odio et et sunt ab. Quidem illum neque beatae aut doloribus autem qui. Consequatur quos consectetur in laborum non dolorum et illum. Impedit et consequuntur repellat ab. Itaque consequuntur expedita reiciendis doloremque culpa quos est mollitia reiciendis. Velit veniam maiores soluta esse culpa. Aut ut porro vero eveniet natus amet. Et sit nihil molestiae qui. Quasi et incidunt ex dolorum ratione qui quo quia ut. Eligendi quasi reprehenderit numquam dignissimos et fugit asperiores. Voluptates temporibus et fugit ea molestiae at eos earum. Aliquid enim a animi quo sit rerum voluptatum deserunt. Sed et aut excepturi facere. Error expedita id cumque ad est nesciunt. Cumque pariatur qui rerum eligendi eius cupiditate rerum delectus. Culpa praesentium ea est consequuntur fugiat quia et deserunt quis. Rerum inventore tenetur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus aperiam quidem nam, animi iste labore culpa dicta a molestiae architecto beatae saepe reiciendis autem doloribus eum placeat quo quibusdam.
                    Optio aperiam, voluptates fugit consequuntur culpa, illum aliquam iure, velit quisquam minima impedit adipisci. Quis corporis, ipsa libero cupiditate blanditiis ullam odio voluptatem, debitis dignissimos vitae perferendis ad, commodi numquam?`}
                    excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi, quaerat, cupiditate magni illo commodi quis deleniti quas quasi similique sint necessitatibus dolorum facere vel quae nam accusantium itaque debitis!
                    Vero molestiae repudiandae veniam illo ipsum dolorem eius reiciendis velit exercitationem ex, non, sequi veritatis nemo nam amet earum voluptates rerum. Deleniti cumque ea incidunt dolores voluptatem in odit odio?
                    Quam vero aperiam labore "
                    items={[
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Naprawa aut',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Doradztwo',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Wymiana zawieszenia',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Wymiana rozrządu',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Wymiana układu hamulcowego',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Wymiana oleju',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Wymiana klocków hamulcowych',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Naprawa zawieszeń',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Naprawa silników',
                            uri: '#',
                        },
                        {
                            button: 'więcej',
                            image: {
                                altText: '',
                                sourceUrl: img,
                                title: '',
                            },
                            title: 'Diagnostyka komputerowa',
                            uri: '#',
                        },
                    ]}
                    title="Usługi mechanika w Ludomach"
                    uri="#"
                />
         
                <AutomotiveBrands cards={automotiveBrands} />
            </main>
        </div>
    );
}
