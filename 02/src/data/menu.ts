type t__menu = {
    label:string;
    submenu?:{
        label:string;
        uri:string;
    }[];
    uri:string;

}

export const menu:t__menu[] = [
    {
        label:"Start",
        uri:"/"
    },
    {
        label:"Naprawa aut",
        uri:"/uslugi/naprawa-aut"
    },
    {
        label:"Doradztwo",
        uri:"/uslugi/doradztwo"
    },
    {
        label:"Usługi",
        uri:"/uslugi",
        submenu: [
            {
                label:"Wymiana zawieszeń",
                uri:"/uslugi/wymiana-zawieszen"        
            },
            {
                label:"Wymiana rozrządu",
                uri:"/uslugi/wymiana-rozrzadu"        
            },
            {
                label:"Wymiana układu hamulcowego",
                uri:"/uslugi/wymiana-ukladu-hamulcowego"        
            },
            {
                label:"Wymiana oleju",
                uri:"/uslugi/wymiana-oleju"        
            },
            {
                label:"Wymiana klocków hamulcowych",
                uri:"/uslugi/wymiana-klockow-hamulcowych"        
            },
            {
                label:"Naprawa silników",
                uri:"/uslugi/naprawa-silnikow"        
            },
            {
                label:"Naprawa zawieszeń",
                uri:"/uslugi/naprawa-zawieszen"        
            },
            {
                label:"Diagnostyka komputerowa",
                uri:"/uslugi/diagnostyka-komputerowa"        
            },
        ]
    },
    {
        label:"Blog",
        uri:"/blog"
    },
    {
        label:"Kontakt",
        uri:"/kontakt"
    }
]