import { tBrand, tMenu } from 'ts/types';
import { ImPhone } from "react-icons/im";

type t_navigation = {
    brand: tBrand;
    location:string;
    menu: tMenu[];
    settings: {
        menuButton: string;
        phoneButton:{
            icon:React.ReactNode;
            label:string;
            uri:string;
        }
    };
};

const navigation: t_navigation = {
    brand: {
        label: 'Mechanik Ludomy',
        uri: '/',
    },
    location:'Ludomy 93, 64-603 Ludomy',
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
        phoneButton: {
            icon:<ImPhone />,
            label:"Numer telefonu",
            uri:"+48794100413"
        }
    },
};

export default navigation;
