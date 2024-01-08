import { ReadMoreButton } from "utils/Buttons";
import Link from "next/link";
import { IoMailOutline,IoMapOutline, IoPhonePortraitOutline } from "react-icons/io5";
import css from "views/ServicePage/Information/Information.module.scss"

type tInformation = {
    address:string;
    button:string;
    mail?:{
        label:string;
        url:string;
    };
    phone?:{
        label:string;
        url:string;
    };
    title:string;
    uri:string;
}

export default function Information(props:tInformation){
    return(
        <div className={css.wrapper} >
            <h2  className={css.title} dangerouslySetInnerHTML={{__html:props.title}} />
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
            <ReadMoreButton
                iconify
                label={props.button}
                uri={props.uri}
                theme="primary"
            />
        </div>
    )
}