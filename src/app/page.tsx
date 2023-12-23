import { About, Hero, Services, Workplace } from "views/Home"
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
      <About
        content="Praesentium quam veritatis omnis molestias corrupti. Eos pariatur quisquam. Voluptas optio fuga eos aut velit molestiae eos aut qui. Est voluptatum rerum ab vero dolorum. Et qui odio quasi eos non. Cum dicta earum. Inventore ex inventore ad est laboriosam rem repudiandae qui autem. Beatae quibusdam voluptatem. Maiores aliquid quia officia rerum illo qui. Delectus ipsa omnis rerum voluptatem expedita maxime voluptas dolor. Possimus sint tenetur qui hic ut voluptatem beatae voluptas."
        image={{
          altText:"",
          sourceUrl:"https://img.freepik.com/premium-photo/man-red-jacket-working-car_662214-340199.jpg?w=360",
          title:""
        }}
        title="O firmie"
      />
      <Services
        button="więcej"
        content={`Nihil rem autem ea laboriosam perferendis labore. Inventore vel quia. Ut ipsum error magnam magnam enim unde voluptates at. Voluptatibus dolor sed distinctio veniam distinctio. Tenetur eveniet quo dolor dicta. Placeat quisquam expedita sed temporibus cupiditate. Rerum laboriosam sed sint est ut eveniet dolor vel sint. Eligendi qui ea sint totam. Placeat ea nobis dolores omnis quia aspernatur dolore voluptas autem. Ut sapiente est sint veniam expedita occaecati.`}
        title="Usługi <br/> mechanika w Ludomach"
        cards={[
          {
            content:"",
            image:{
              altText:"",
              sourceUrl:"",
              title:""
            },
            title:"",
            isBig:true,
            uri:""
          }
        ]}
      />
    </>
  )
}