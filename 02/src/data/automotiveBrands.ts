import { tImage } from 'ts/types';
import audi from 'assets/graphics/automotiveBrands/audi.png';
import citroen from 'assets/graphics/automotiveBrands/citroen.png';
import fiat from 'assets/graphics/automotiveBrands/fiat.png';
import hyundai from 'assets/graphics/automotiveBrands/hyundai.png';
import man from 'assets/graphics/automotiveBrands/man.png';
import mercedes from 'assets/graphics/automotiveBrands/mercedes.png';
import opel from 'assets/graphics/automotiveBrands/opel.png';
import skoda from 'assets/graphics/automotiveBrands/skoda.png';
import tata from 'assets/graphics/automotiveBrands/tata.png';
import volkswagen from 'assets/graphics/automotiveBrands/volkswagen.png';

type tAutomotiveBrands = {
    label: string;
    image: tImage;
    uri: string;
};
export const automotiveBrands: tAutomotiveBrands[] = [
    {
        image: {
            altText: '',
            sourceUrl: audi.src,
            title: '',
        },
        label: 'Audi',
        uri: '/marki/audi',
    },
    {
        image: {
            altText: '',
            sourceUrl: citroen.src,
            title: '',
        },
        label: 'Citroen',
        uri: '/marki/citroen',
    },
    {
        image: {
            altText: '',
            sourceUrl: fiat.src,
            title: '',
        },
        label: 'Fiat',
        uri: '/marki/fiat',
    },
    {
        image: {
            altText: '',
            sourceUrl: hyundai.src,
            title: '',
        },
        label: 'Hyundai',
        uri: '/marki/hyundai',
    },
    {
        image: {
            altText: '',
            sourceUrl: man.src,
            title: '',
        },
        label: 'MAN',
        uri: '/marki/man',
    },
    {
        image: {
            altText: '',
            sourceUrl: mercedes.src,
            title: '',
        },
        label: 'Mercedes',
        uri: '/marki/mercedes',
    },
    {
        image: {
            altText: '',
            sourceUrl: opel.src,
            title: '',
        },
        label: 'Opel',
        uri: '/marki/opel',
    },
    {
        image: {
            altText: '',
            sourceUrl: skoda.src,
            title: '',
        },
        label: 'Skoda',
        uri: '/marki/skoda',
    },
    {
        image: {
            altText: '',
            sourceUrl: tata.src,
            title: '',
        },
        label: 'TATA',
        uri: '/marki/tata',
    },
    {
        image: {
            altText: '',
            sourceUrl: volkswagen.src,
            title: '',
        },
        label: 'volkswagen',
        uri: '/marki/volkswagen',
    },
];
