import { Hero } from "utils/Parts"
import logo from "assets/graphics/logo.png"
import { About } from "views/ServicesPage";

export default function HomePage() {
    return (
        <div>
            <Hero
                title="Usługi"
            />
            <main className="container">
               <About
                    button="Poznaj nas"
                    content={`Vero aut id quidem aut magni voluptatem quae nemo. Temporibus magni et optio. Architecto laudantium earum. Facere est pariatur. Rerum omnis nostrum aut id recusandae veli Laboriosam cupiditate pariatur quibusdam iste animi. Expedita possimus quo. Cupiditate fugit non autem non quod. Et voluptate laudantium deleniti provident perspiciatis cupiditate expedita tempore consequatur. Sit eius dolorem ipsam praesentium dolorum rerum et neque velit. Facilis in ipsam itaque ut dolor blanditiis aut facere.`}
                    image={{
                        altText:"",
                        sourceUrl:logo.src,
                        title:""
                    }}
                    title="Mechanik Ludomy"
                    uri="#"
               />
            </main>
        </div>
    );
}
