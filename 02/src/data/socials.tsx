import { FaFacebook, FaInstagram } from "react-icons/fa6";

type tSocial = {
    backgroundColor:string;
    icon:React.ReactNode;
    label:string;
    url:string;
}

export const socials:tSocial[] = [
    {
        backgroundColor:"#0866ff",
        icon:<FaFacebook />,
        label:"Facebook",
        url:"#"
    },
    {
        backgroundColor:"#fd207f",
        icon:<FaInstagram />,
        label:"Instagram",
        url:"#"
    },
]