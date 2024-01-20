import { About, AutomotiveBrands, Hero, Services, ServicesOverview } from 'views/HomePage';
import { FaCar, FaHandsHelping } from 'react-icons/fa';
import { automotiveBrands } from 'data/automotiveBrands';
import { home } from 'app/content/pages/home';

export default function HomePage() {
    const img =
        'https://img.freepik.com/premium-photo/colorful-poster-car-with-word-fast-it_447899-8737.jpg?w=740';
    return (
        <div>
            <Hero {...home.hero} />
            <main>
                <ServicesOverview
                    button="Więcej"
                    items={[
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
                <About {...home.about} />
                <Services
                    button="Poznaj wszystkie"
                    content={home.services.content}
                    excerpt={home.services.excerpt}
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
