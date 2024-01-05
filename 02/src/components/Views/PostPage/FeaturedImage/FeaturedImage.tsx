import Image from "next/image";

export default function FeaturedImage(){
    return (
        <figure>
             <Image
                    alt={""}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={`https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={""}
                    quality={75}
                />
        </figure>
    )
}