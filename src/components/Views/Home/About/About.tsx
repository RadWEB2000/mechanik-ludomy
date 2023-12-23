import Image from "next/image";
import styles from "views/Home/About/About.module.scss"


export default function About(){
    return(
        <div className={styles.wrapper}>
            <section className={styles.content}>
                <header className={styles.title__box}>
                    <h2 className={styles.title}>O firmie</h2>
                </header>
                <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias asperiores iusto quas itaque fugit deserunt, nostrum possimu m ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias asperiores iusto quas itaque fugit deserunt, nostrum possim</p>
            </section>
            <div className={styles.image__box}>
            <figure className={styles.image}>
               <Image
                alt={""}
                fill
                loading="eager"
                priority
                src="https://img.freepik.com/premium-photo/man-red-jacket-working-car_662214-340199.jpg?w=360"
                style={{
                    objectFit:"cover",
                    objectPosition:"center"
                }}
                title={""}
                quality={100}
            />
            </figure>
            </div>
        </div>
    )
}