import { Hero } from "utils/Parts"
import logo from "assets/graphics/logo.png"
import { About,Offers } from "views/ServicesPage";
import { offers } from "data/offers";

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
               <Offers
                    cards={offers}
                    content={`Iure minus sint accusamus. Facere eligendi aut blanditiis. Veritatis cumque vitae cumque iste dolor est et pariatur ea. Sequi est temporibus autem provident labore rerum. Qui minima doloribus dicta doloremque et doloribus accusantium aut. Nostrum quisquam qui non ipsa tenetur laudantium. Nihil sed et et iusto incidunt maiores. Quia qui maiores nobis animi quod quidem cumque provident. Ratione necessitatibus atque et molestiae ut necessitatibus odio tempore. Dignissimos minima consequatur quos eaque neque ex blanditiis tenetur aliquam. Quia magni nobis quae aut cumque. Eos autem ipsum quis quo delectus recusandae. Laboriosam id amet ut laboriosam et nam. Perferendis sit soluta cumque eos fuga consequatur quo.`}
                    title="Oferta mechanika samochodowego"
               />
            </main>
        </div>
    );
}
