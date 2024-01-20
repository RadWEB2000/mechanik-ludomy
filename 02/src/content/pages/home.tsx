import { StaticImageData } from 'next/image';
import aboutImage from 'graphics/patryk-profile-image.jpg';
import { FaCar, FaHandsHelping } from 'react-icons/fa';

type t_home = {
    hero: {
        title: string;
        slogan: string;
        buttons: {
            label: string;
            uri: string;
        }[];
        video: string;
    };
    mainOfferCards: {
        icon: React.ReactNode;
        title: string;
        content: string;
        button: {
            label: string;
            uri: string;
        };
    }[];
    about: {
        title: string;
        button?: {
            label: string;
            uri: string;
        };
        slogan: string;
        content: string;
        image: {
            alt: string;
            src: string | StaticImageData;
            title: string;
        };
    };
    services: {
        title: string;
        excerpt: string;
        content: string;
        button: {
            label: string;
            uri: string;
        };
        image: string;
        cards: {
            title: string;
            content: string;
            button: {
                label: string;
                uri: string;
            };
        }[];
    };
};

export const home: t_home = {
    hero: {
        buttons: [
            {
                label: 'Blog',
                uri: '/blog',
            },
            {
                label: 'Usługi',
                uri: '/uslugi',
            },
            {
                label: 'Kontakt',
                uri: '/kontakt',
            },
        ],
        slogan: 'Patryk Łusiewicz',
        title: 'Mechanik Ludomy',
        video: '/assets/movies/background.mp4',
    },
    about: {
        content: `Witaj w "Mechanik Ludomy", prowadzonym przez doświadczonego mechanika Patryka Łusiewicza. Nasz warsztat samochodowy w Ludomach k. Obornik specjalizuje się w kompleksowej naprawie aut, łącząc pasję do motoryzacji z najnowszymi technologiami. Gwarantuję pełen profesjonalizm i indywidualne podejście do każdego pojazdu.

        Stawiam na transparentność i dokładność w diagnozie i naprawie, zapewniając klientom bezpieczeństwo i satysfakcję. Nasza oferta obejmuje szeroki zakres usług, od rutynowych przeglądów po zaawansowaną diagnostykę komputerową. Odwiedź nas przy Ludomy 93 i zaufaj ekspertom, którzy traktują Twoje auto z należytą starannością. "Mechanik Ludomy" – synonim rzetelności i nowoczesności w serwisowaniu samochodów.`,
        image: {
            alt: 'O firmie - "Mechanik  Ludomy"',
            src: aboutImage.src,
            title: 'O firmie - "Mechanik  Ludomy"',
        },
        slogan: 'Twoje auto, nasza pasja',
        title: 'O firmie',
    },
    mainOfferCards: [
        {
            button: {
                label: 'więcej',
                uri: '/naprawa-aut',
            },
            content: `Kompleksowa obsługa, fachowość w każdym szczególe.`,
            icon: <FaCar />,
            title: 'Naprawa aut',
        },
        {
            button: {
                label: 'więcej',
                uri: '/doradztwo',
            },
            content: `Profesjonalne konsultacje - Twój przewodnik w świecie motoryzacji.`,
            icon: <FaHandsHelping />,
            title: 'Doradztwo',
        },
    ],
    services: {
        button: {
            label: 'Poznaj usługi',
            uri: '/uslugi',
        },
        cards: [],
        excerpt:
            'Tutaj każdy szczegół ma znaczenie, a pasja do samochodów spotyka się z najwyższym profesjonalizmem, Twoje auto znajdzie serwis na miarę swoich potrzeb. Od drobnych napraw po kompleksowe renowacje, nasz zespół ekspertów jest gotowy zapewnić Twojemu pojazdowi najlepszą możliwą opiekę. Niezależnie od wyzwania, "Mechanik Ludomy" to gwarancja, że Twoje auto jest w najlepszych rękach.',
        content: `
            W "Mechanik Ludomy" znajdziesz kompleksową ofertę usług, które zapewnią Twojemu pojazdowi długotrwałą sprawność i bezpieczeństwo na drodze. Nasz zespół specjalistów, wyposażony w najnowocześniejsze narzędzia i bogate doświadczenie, jest gotowy sprostać każdemu wyzwaniu, od rutynowej konserwacji po skomplikowane naprawy.

            <h3>Naprawa Aut</h3>
            Każdy samochód zasługuje na najlepszą opiekę, a w "Mechanik Ludomy" troska o detale i precyzja wykonania to standard. Niezależnie od marki czy modelu, naprawa aut odbywa się z zachowaniem najwyższych standardów jakości. Od drobnych napraw po kompleksowe renowacje, każda usługa jest wykonywana z myślą o maksymalnym bezpieczeństwie i zadowoleniu klienta.

            <h3>Doradztwo i Konsultacje Ws. Naprawy Aut</h3>
            Rozumiejąc, jak ważna jest jasna komunikacja i zrozumienie potrzeb pojazdu, oferujemy profesjonalne doradztwo i konsultacje. Eksperci z "Mechanik Ludomy" są zawsze gotowi, by udzielić szczegółowych wyjaśnień, pomóc w wyborze najlepszych rozwiązań i zaplanować przyszłe działania konserwacyjne, aby Twój samochód służył Ci jak najdłużej.

            <h3>Naprawa Układu Hamulcowego</h3>
            Bezpieczeństwo jest priorytetem, a układ hamulcowy jest jednym z najważniejszych elementów zapewniających bezpieczną jazdę. Specjaliści z "Mechanik Ludomy" dokładają wszelkich starań, aby system hamulcowy Twojego pojazdu był zawsze w optymalnym stanie. Od wymiany klocków hamulcowych po kompleksową naprawę układu – możesz liczyć na naszą precyzję i doświadczenie.

            <h3>Wymiana Zawieszeń</h3>
            Komfort i stabilność jazdy są kluczowe, a zawieszenie odgrywa w tym aspekcie centralną rolę. W "Mechanik Ludomy" wymiana zawieszeń odbywa się z dbałością o każdy szczegół, zapewniając, że każda podróż będzie płynna i bezpieczna. Dzięki naszym usługom, Twoje auto odzyska pełną sprawność i komfort jazdy.

            <h3>Naprawa Silników</h3>
            Serce Twojego pojazdu zasługuje na ekspertów, którzy rozumieją każdy jego bicie. Naprawa silników w "Mechanik Ludomy" to gwarancja, że Twój samochód odzyska pełnię swoich możliwości. Korzystając z najnowszych technologii diagnostycznych i najlepszych części zamiennych, przywracamy moc i wydajność każdego silnika.

            <h3>Wymiana Klocków Hamulcowych</h3>
            Każdy detal ma znaczenie, a klocki hamulcowe są kluczowe dla bezpieczeństwa. W "Mechanik Ludomy" wymiana klocków hamulcowych odbywa się z niezachwianą precyzją, zapewniając, że każde zatrzymanie będzie bezpieczne i pewne. Nie ryzykuj bezpieczeństwa – zaufaj specjalistom, którzy dbają o każdy aspekt Twojego pojazdu.

            W "Mechanik Ludomy" pasja do motoryzacji łączy się z profesjonalizmem, a zadowolenie klienta jest naszym priorytetem. Zapraszamy do skorzystania z naszych usług – bo Twój samochód zasługuje na najlepszą opiekę.
        `,
        image: 'https://img.freepik.com/premium-photo/colorful-poster-car-with-word-fast-it_447899-8737.jpg?w=740',
        title: 'Serwis samochodów',
    },
};
