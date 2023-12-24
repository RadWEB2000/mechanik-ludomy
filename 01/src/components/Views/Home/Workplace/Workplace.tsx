import styles from "views/Home/Workplace/Workplace.module.scss";

type tWorkspace = {
    hours : {
        day:string;
        start :string;
        end:string;
    }[];
    title:string;
    map?:string;
}

export default function Workplace(props:tWorkspace){
    return(
        <div className={styles.wrapper}>
            <section className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                {
                    props.hours &&
                    <ul className={styles.items}>
                        {props.hours.map((item,index) => {
                            return(
                                <li className={styles.item} key={index}>
                                    <strong className={styles.day}>{`${item.day}:`}</strong>
                                    <p className={styles.hours}>
                                        <span className={styles.start}>{item.start}</span>
                                        -
                                        <span className={styles.end}>{item.end}</span>
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                }
            </section>
            <div className={styles.map__box}>
                <iframe  
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.410962284905!2d16.809738876939043!3d52.76086121836884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47040d815c637f97%3A0x6a34ce0f09e16797!2sMechanika%20Pojazdowa%20Patryk%20%C5%81usiewicz!5e0!3m2!1spl!2spl!4v1703329736500!5m2!1spl!2spl" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}