import Image from "next/image";
import css from "utils/Parts/ContentBox/ContentBox.module.scss"
export default function ContentBox(){
    return(
        <main className={css.wrapper}>
            <h2 className={css.h2}>H2: Accusamus dolor dolorem officia.</h2>
            <h3 className={css.h3}>H3: Accusamus dolor dolorem officia.</h3>
            <h4 className={css.h4}>H4: Accusamus dolor dolorem officia.</h4>
            <h5 className={css.h5}>H5: Accusamus dolor dolorem officia.</h5>
            <p className={css.p}>Earum repellat a et sapiente. Laboriosam ex rem architecto quo earum aut. Consequatur odit consequatur error at numquam velit eligendi. Fugit error id dolor ipsam quasi. Qui ipsum aut repudiandae asperiores. Et pariatur repellat sequi provident consectetur.
 
Nulla et dolores dolore quo eligendi aut corrupti. Hic facilis natus. Ipsa aut odit velit recusandae nihil velit. Minima ea at.
 one eum beatae aliquam ducimus laudantium nemo ea dignissimos, qui est, sint repudiandae?
Maxime reprehenderit, magnam similique soluta delectus porro nesciunt sapiente saepe accusamus blanditiis libero? Laborum, in ea voluptate accusantium sit exercitationem voluptatibus distinctio? Porro dolorem reiciendis ratione voluptatibus ullam, molestias quidem!
Atque dignissimos minima corrupti repellat tempora qui quis repudiandae exercitationem itaque debitis blanditiis, veritatis fugiat ipsum est totam delectus aliquam, voluptatum consequuntur voluptatem vel tempore iure quaerat nihil. Ratione, repudiandae.
Omnis iusto amet, odio perferendis ipsum obcaecati inventore fugiat itaque accusantium quo eligendi. Enim necessitatibus debitis dolor, neque dolore saepe eaque sit facere quas dolores corporis, odio explicabo soluta ipsum?
Quo reprehenderit qui ab eum eaque laborum illo. Voluptate corrupti, esse quae accusamus suscipit qui minima accusantium laboriosam reprehenderit aperiam eligendi molestiae illum nobis facere corporis reiciendis velit tempore aut!
Facilis at esse suscipit. Quos neque ducimus atque saepe aperiam perspiciatis minus, beatae, officia corporis deleniti aut dolores delectus, illum aliquam perferendis. Eveniet, quidem officia consequatur corporis aspernatur dolor ratione.
Nisi quod nobis dolor eligendi saepe ipsa, laboriosam quae error, perspiciatis commodi, rem et! Numquam porro impedit labore quidem, fuga id magni consectetur nostrum voluptatem qui, inventore debitis harum doloribus?</p>
<b  className={css.b}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quo ipsam. Ex. </b>
<i  className={css.i}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quo ipsam. Ex. </i>
<em className={css.i}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quo ipsam. Ex. </em>
<strong className={css.b}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quo ipsam. Ex. </strong>
<a className={css.a} href="#">Lorem, ipsum dolor.</a>
<figure className={css.img}>
    <Image
                    alt={""}
                    blurDataURL=""
                    fill
                    loading="lazy"
                    src={`https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    title={""}
                    quality={75}
                />
</figure>

<ul className={css.ul}>
    <li className={css.li}>1</li>
    <li className={css.li}>2</li>
    <li className={css.li}>3</li>
</ul>
<ol className={css.ol}>
    <li className={css.li}><b className={css.b}>1</b></li>
    <li className={css.li}>2</li>
    <li className={css.li}>3</li>
</ol>
        </main>
    )
}