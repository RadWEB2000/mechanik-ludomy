import { Hero } from "utils/Parts"
import { Information, OpeningHours } from "views/ServicePage";
export default function HomePage() {
    return (
        <div>
            <Hero
                title="Kontakt"
            />
            <main className="container contact">
               <article>
                     <Information
                        phone={{
                            label:"+48 500-361-007",
                            url:"tel:+48500361007"
                        }}
                        address="Ludomy 93, 64-603 Ludomy"
                        button="Zadzwoń"
                        title="Skontaktuj się z nami"
                        uri="tel:+48794100413"
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
               </article>
               <aside>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.411142250019!2d16.809738876695764!3d52.76085797212531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47040d815c637f97%3A0x6a34ce0f09e16797!2sMechanika%20Pojazdowa%20Patryk%20%C5%81usiewicz!5e0!3m2!1spl!2spl!4v1704807907961!5m2!1spl!2spl" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
               </aside>
            </main>
        </div>
    );
}
