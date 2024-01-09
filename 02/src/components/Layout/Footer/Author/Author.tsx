import Link from "next/link";

export default function Author(){
    return(
        <div>
            <Link href="https://rad-web.pl" rel="index follow" target="_blank">
                RadWEB
            </Link>
            <p>
                &copy; 2023 - {new Date().getFullYear()}
            </p>
        </div>
    )
}