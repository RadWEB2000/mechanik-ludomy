import { tImage } from "app/types/types";
import { FaCar, FaHandsHelping } from 'react-icons/fa';

type t_offers = {
    button:string;
    content:string;
    image:tImage;
    title:string;
    uri:string;
} & (
    {
        isMain:true;
        icon:JSX.Element;
        excerpt:string;
    } |
    {
        isMain:false
    }
)

export const offers:t_offers[] = [
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/photo-infiniti-g37-coupe-outdoors_158538-24741.jpg?w=1060&t=st=1704461774~exp=1704462374~hmac=b28d7612c3925fdde047fe48718fe0b9276f849820165aff443dab0f2601d569",
            title:"",
        },
        title:"Naprawa aut",
        excerpt:'Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol',
        isMain:true,
        icon:<FaCar />,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/young-man-delivering-christmas-tree-car_1303-19511.jpg?w=1060&t=st=1704461779~exp=1704462379~hmac=f8559708b4daeb3b4230bd2f5ad3e69e25953c2f492c4ba281c06cd9976213a6",
            title:"",
        },
        excerpt:'Optio excepturi cum temporibus nostrum mollitia sint non. Non quas dol',
        title:"Doradztwo",
        isMain:true,
        icon:<FaHandsHelping />,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/premium-photo/modern-subcompact-crossover-suv-beautiful-wheels_263957-421.jpg?w=1060",
            title:"",
        },
        title:"Wymiana zawieszeń",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/stylish-led-headlight-white-automobile_23-2147963763.jpg?w=1060&t=st=1704461781~exp=1704462381~hmac=417efb3e5a3cc53396607bf1cd684565952aade034d5c0bf3d3dc44f8dd9fa41",
            title:"",
        },
        title:"Wymiana rozrządu",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/aerial-view-car-riding-through-road-forest-with-tall-green-dense-trees_181624-37805.jpg?w=996&t=st=1704461782~exp=1704462382~hmac=0967c2ac4b58cf1790d4ede79372d96df4708bc6818d8d7eac1cd3143869c00d",
            title:"",
        },
        title:"Wymiana układu hotelowego",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/luxury-car-parked-outside-elegant-modern-building-generative-ai_188544-8050.jpg?w=1060&t=st=1704461791~exp=1704462391~hmac=8e1b1a3b89d2a02a6c6d9d4f0ba4745253a50ec6f4d3e108270520613dbb3a46",
            title:"",
        },
        title:"Wymiana oleju",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/row-new-cars-port_335224-806.jpg?w=1380&t=st=1704461783~exp=1704462383~hmac=5ce231fa344cbdbdca9d1b49977e74a0b178e93aee6dcac198184e3b8c15b617",
            title:"",
        },
        title:"Wymiana klocków hamulcowych",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/black-luxury-sport-car-driving-accross-forest_114579-4039.jpg?w=1060&t=st=1704461787~exp=1704462387~hmac=57a26874fe8da4a3e057d32bd2e376afcd9b517a4fc4f6558691d7dd7a554804",
            title:"",
        },
        title:"Naprawa zawieszeń",
        isMain:false,
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/person-traveling-road_1112-214.jpg?w=996&t=st=1704461790~exp=1704462390~hmac=95efe161dc8805dd5e45cf4fdbcd4192a82a3118129965a2156d2572b65099bd",
            title:"",
        },
        isMain:false,
        title:"Naprawa silników",
        uri:"#"
    },
    {
        button:"więcej",
        content:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam optio possimus reprehendeg elit. Nostrum quisquam optio possimus reprehende`,
        image:{
            altText:"",
            sourceUrl:"https://img.freepik.com/free-photo/car-is-driving-road-mountainous-area_169016-28475.jpg?w=1380&t=st=1704461788~exp=1704462388~hmac=dc83d2f4efac24b4c55533e7ce8e3391ce527a374213595a240fa05dc6555b48",
            title:"",
        },
        isMain:false,
        title:"Diagnostyka komputerowa",
        uri:"#"
    },
]