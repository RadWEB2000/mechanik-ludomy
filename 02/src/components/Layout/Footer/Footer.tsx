import { socials } from "data/socials";
import { Author, Socials } from "layout/Footer";


export default function Footer() {
    return(
        <footer>
            <h2>stopka</h2>
            <Socials socials={socials} />
            <Author/>
        </footer>
    )
}