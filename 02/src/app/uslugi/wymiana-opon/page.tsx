import { ContentBox, Hero } from "utils/Parts"
import { Information, OpeningHours } from "views/ServicePage";

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
                    <Information
                        phone={{
                            label:"+48 500-361-007",
                            url:"tel:+48500361007"
                        }}
                        address="Ludomy 93, 64-603 Ludomy"
                        button="Zadzwoń"
                        title="Skontaktuj się z nami"
                        uri="#"
                    />
                    <OpeningHours
                        days={[
                            {
                                content:"8:00-16:00",
                                title:"Pn-Pt"
                            },
                            {
                                content:"Nieczynne",
                                title:"Sb-Nd"
                            },
                        ]}
                        title="Godziny otwarcia"
                    />
                </aside>
            </main>
        </div>
    );
}
