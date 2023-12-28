"use client"
import Link from "next/link";
import css from "views/HomePage/ServicesOverview/ServicesOverview.module.scss";
import {motion} from "framer-motion";
import { ReadMoreButton } from "app/components/Utils/Buttons";


type tServicesOverview = {
    button:string;
    items:{
        content:string;
        icon:React.ReactNode;
        title:string;
        uri:string;
    }[];
}

export default function ServicesOverview(props:tServicesOverview){
    return(
        <div className={css.wrapper}>
            <ul className={css.cards}>
                {
                    props.items.map((item,index) => {
                        return(
                            <li className={css.card} key={index}>
                                <span className={css.icon}>{item.icon}</span>
                                <h3 className={css.title}>{item.title}</h3>
                                <p className={css.content} dangerouslySetInnerHTML={{__html:item.content.substring(0,70)}} />
                                <ReadMoreButton
                                    iconify
                                    label={props.button}
                                    theme="primary"
                                    uri={item.uri}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}