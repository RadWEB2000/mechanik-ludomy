import { ReadMoreButton } from "utils/Buttons";
import Link from "next/link";
import { ContentBox, Hero } from "utils/Parts"

export default function HomePage() {
    return (
        <div>
            <Hero
                title="Wymiana opon"
            />
            <main className="container services__page">
                <article>
                    <ContentBox/>
                </article>
                <aside>
                    <div>
                        <h2>Skontaktuj się z nami</h2>
                        <address>
                            Ludomy 12, 64-020 Ludomy
                        </address>
                        <Link href="#">+48 794-100-413</Link>
                        <Link href="#">radoslaw.adamczyk@gmail.com</Link>
                        <ReadMoreButton
                            iconify
                            label="Zadzwoń"
                            uri="#"
                            theme="primary"
                        />
                    </div>
                    <div>
                        <h2>Godziny otwarcia</h2>
                        <ul>
                            <li><b>Pn-Pt</b><span>8:00-16:00</span></li>
                            <li><b>Sb-Nd</b><span>Nieczynne</span></li>
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
}
