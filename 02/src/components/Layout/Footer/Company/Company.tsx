import Link from "next/link";
import { IoMailOutline,IoMapOutline, IoPhonePortraitOutline } from "react-icons/io5";
import css from "layout/Footer/Company/Company.module.scss"

type tCompany = {
    address:string;
    mail?:{
        label:string;
        url:string;
    };
    phone?:{
        label:string;
        url:string;
    };
    title:string;
}

export default function Company(props:tCompany){
    return(
        <div className={css.wrapper}>
            <h4  className={css.title}>{props.title}</h4>
            <address className={css.address} >
                <i><IoMapOutline /></i>
                <span dangerouslySetInnerHTML={{__html:props.address}} />
            </address>
            {
                props.phone &&
                <Link  className={css.contact}  href={props.phone.url}>
                    <i><IoPhonePortraitOutline /></i>
                    <span dangerouslySetInnerHTML={{__html:props.phone.label}} />
                </Link>
            }
            {
                props.mail &&
                <Link className={css.contact}  href={props.mail.url}>
                    <i><IoMailOutline /></i>
                    <span dangerouslySetInnerHTML={{__html:props.mail.label}} />
                </Link>
            }
        </div>
    )
}