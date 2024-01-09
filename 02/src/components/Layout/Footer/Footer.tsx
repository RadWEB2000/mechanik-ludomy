import { menu } from "app/data/menu";
import { socials } from "data/socials";
import { Author, Company, Menu, Socials } from "layout/Footer";
import css from "layout/Footer/Footer.module.scss";

export default function Footer() {
    return(
        <footer className={css.wrapper}>
            <div className={css.company}>
                <Company
                     phone={{
                            label:"+48 500-361-007",
                            url:"tel:+48500361007"
                        }}
                    address="Ludomy 93, 64-603 Ludomy"
                    title="Mechanik Ludomy"
                />
                <Socials socials={socials} />
            </div>
            <div className={css.menu}>
                <Menu menu={menu} />
            </div>
            <div className={css.author}>
                <Author/>
            </div>
        </footer>
    )
}