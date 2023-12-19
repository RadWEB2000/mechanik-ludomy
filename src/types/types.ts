import { StaticImageData } from 'next/image';

export type tBrand = {
    label: string;
    uri: string;
};

export type tImage = {
    altText: string;
    sourceUrl: string | StaticImageData;
    title: string;
};

export type tMenu = {
    label: string;
    uri: string;
    submenu?: {
        label: string;
        uri: string;
    }[];
};
