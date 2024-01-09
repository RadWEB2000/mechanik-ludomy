import Link from "next/link";
import css from "layout/Footer/Author/Author.module.scss"

export default function Author(){
    return(
        <div className={css.wrapper}>
            <Link href="https://rad-web.pl" rel="index follow" target="_blank">
                RadWEB
            </Link>
            <p>
                &copy; 2023 - {new Date().getFullYear()}
            </p>
        </div>
    )
}