import { About, Hero } from "views/Home"
import heroImage from "assets/mechanik-ludomy-hero.webp"

export default function HomePage(){
  console.log(heroImage.src)
  return(
    <>
      <Hero
        image={heroImage.src}
        openingHours={{
            title:"Godziny otwarcia:",
            hours:[
              {
                day:"Poniedziałek: ",
                hours:"10:00 - 18:00"
              },
              {
                day:"Wtorek: ",
                hours:"10:00 - 18:00"
              },
              {
                day:"Środa: ",
                hours:"10:00 - 18:00"
              },
              {
                day:"Czwartek: ",
                hours:"10:00 - 18:00"
              },
              {
                day:"Piątek: ",
                hours:"10:00 - 18:00"
              },
               {
                day:"Sobota - Niedziela: ",
                hours:"Nieczynne"
              },
            ]
        }}
        slogan="Patryk Łusiewicz"
        title="Mechanik Ludomy"
      />
      <About/>
      <div>
        <h1>
          strona glowna
        </h1>
      </div>
    </>
  )
}