import { About, Hero, Workplace } from "views/Home"
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
      {/* <Workplace
        title="Godziny otwarcia"
        hours={[
            {
              day:"Poniedziałek",
              end:"18:00",
              start:"10:00"
            },
            {
              day:"Wtorek",
              end:"18:00",
              start:"10:00"
            },
            {
              day:"Środa",
              end:"18:00",
              start:"10:00"
            },
            {
              day:"Czwartek",
              end:"18:00",
              start:"10:00"
            },
            {
              day:"Piątek",
              end:"18:00",
              start:"10:00"
            },
        ]}
      /> */}
      <About/>
        
    </>
  )
}