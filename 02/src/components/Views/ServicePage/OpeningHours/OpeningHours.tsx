import css from "views/ServicePage/OpeningHours/OpeningHours.module.scss"

type tOpeningHours = {
    title:string;
    days: {
        title:string;
        content:string;
    }[];
}

export default function OpeningHours(props:tOpeningHours){
    return(
        <div className={css.wrapper} >
            <h2 className={css.title}  dangerouslySetInnerHTML={{__html:props.title}} />
            <ul className={css.days} >
                {props.days.map((item,index) => {
                    return(
                        <li className={css.day}  key={index}>
                            <b dangerouslySetInnerHTML={{__html:item.title}} />
                            <span dangerouslySetInnerHTML={{__html:item.content}} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}