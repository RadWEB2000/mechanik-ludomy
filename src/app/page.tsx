import { Hero } from "views/Home"
import heroImage from "assets/mechanik-ludomy-hero.webp"

export default function HomePage(){
  console.log(heroImage.src)
  return(
    <>
      <Hero
        address="Ludomy 93,<br/> 64-603 Ludomy"
        // buttons={[
        //   {
        //     label:"Zadzwoń"  ,
        //     uri:"tel:+48794100413"
        //   },
        //   {
        //     label:"Usługi",
        //     uri:"/uslugi"
        //   }
        // ]}
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
      <div>
        <h1>
          strona glowna
        </h1>
      </div>
    </>
  )
}