import { tBrand, tMenu } from 'ts/types';

type t_navigation = {
    brand: tBrand;
    menu: tMenu[];
    settings: {
        specialButtons?: {
            label: string;
            uri: string;
        }[];
        menuButton: string;
    };
};

const navigation: t_navigation = {
    brand: {
        label: 'Mechanik Ludomy',
        uri: '/',
    },
    menu: [
        {
            label: 'Start',
            uri: '/',
        },
        {
            label: 'O firmie',
            uri: '/o-firmie',
        },
        {
            label: 'Naprawa aut',
            uri: '/naprawa-aut',
        },
        {
            label: 'Doradztwo',
            uri: '/doradztwo-mechaniki-samochodowej',
        },
        {
            label: 'Usługi',
            uri: '/uslugi',
            submenu: [
                {
                    label: 'Wymiana zawieszenia',
                    uri: '/uslugi/wymiana-zawieszenia',
                },
                {
                    label: 'Wymiana rozrządu',
                    uri: '/uslugi/',
                },
                {
                    label: 'Wymiana układu hamulcowego',
                    uri: '/uslugi/',
                },
                {
                    label: 'Wymiana oleju',
                    uri: '/uslugi/',
                },
                {
                    label: 'Wymiana klocków hamulcowych',
                    uri: '/uslugi/',
                },
                {
                    label: 'Naprawa zawieszeń',
                    uri: '/uslugi/',
                },
                {
                    label: 'Naprawa silnika',
                    uri: '/uslugi/',
                },
                {
                    label: 'Diagnostyka komputerowa',
                    uri: '/uslugi/',
                },
            ],
        },
        {
            label: 'Blog',
            uri: '/blog',
        },
        {
            label: 'Kontakt',
            uri: '/kontakt',
        },
    ],
    settings: {
        menuButton: 'MENU',
        specialButtons: [
            {
                label: 'Kontakt',
                uri: '/kontakt',
            },
            {
                label: 'Zadzwoń',
                uri: 'tel:+48500361007',
            },
        ],
    },
};

export default navigation;
