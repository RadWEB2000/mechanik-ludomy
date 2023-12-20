import Image from "next/image";

export default function About(){
    return(
        <div>
            <section>
                <header>
                    <h2>O firmie</h2>
                </header>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias asperiores iusto quas itaque fugit deserunt, nostrum possimus. Enim eveniet numquam saepe aliquam, dignissimos laudantium harum nobis odio laborum corrupti.
                Modi obcaecati minima laborum vitae sit odio iure voluptate totam vel culpa a animi ex quidem praesentium deserunt molestiae recusandae excepturi consequatur ratione sequi, nobis quibusdam voluptatibus quam? Cupiditate, tempore?
                Excepturi vel, labore sed deleniti sequi tempora. Fugit omnis temporibus quidem nostrum, error quod aliquam vitae eaque consectetur sunt accusantium odit, recusandae soluta ut, exercitationem ducimus nobis reiciendis eum.</p>
            </section>
            <figure>
               <Image
                alt={""}
                fill
                loading="eager"
                priority
                src="https://img.freepik.com/premium-photo/man-red-jacket-working-car_662214-340199.jpg?w=360"
                style={{
                    objectFit:"cover",
                    objectPosition:"center"
                }}
                title={""}
                quality={100}
            />
            </figure>
        </div>
    )
}