import Link from "next/link";
import { CgFormatSlash } from "react-icons/cg";
import css from "views/PostPage/Hero/Hero.module.scss";

export default function Hero(){
    return(
        <section className={css.wrapper}>
            <ul className={css.breadcrumbs}>
                <li>
                    <Link href="#">Start</Link><span><CgFormatSlash /></span>
                </li> 
                <li>
                    <Link href="#">Blog</Link>
                </li> 
            </ul>
            <p className={css.release}><time>23 paź 2023</time></p>
            <h1 className={css.title}>Jak zablokować wolne terminy w Zilo podczas urlopu?</h1>
            <div className={css.category}>
                <Link href="#">
                    Pielęgnacja i konserwacja
                </Link>
            </div>
            <p className={css.excerpt}
                dangerouslySetInnerHTML={{__html:`In libero sapiente vitae molestiae dolor. Eos nihil voluptates non dolor dolores tenetur sed. Quia sed ea laudantium nobis ut et non. Et quaerat quaerat nam. Nemo voluptas qui rerum ratione. Est sunt recusandae eum maiores quia minima exercitationem maiores.
 
                Omnis unde aut iure id ut omnis. Tempore illum numquam quas dolor doloremque voluptate maiores voluptas. Similique et vitae voluptatem quia minima. Excepturi perferendis nam atque explicabo enim. Provident ad debitis consequatur mollitia mollitia aperiam inventore asperiores. Quod ea laborum dignissimos aspernatur nobis occaecati.`}}
            />
        </section>
    )   
}