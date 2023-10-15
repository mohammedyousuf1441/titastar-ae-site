import { component$ } from '@builder.io/qwik';
// import styles from './heroCard.module.css';

let imagesURL: string ;
interface CardProps {
    title?: string;
    image?: string;
    imageAlt?: string;
    cardType?: string;
    cardClass?: string;
}
export default component$<CardProps>((props) => {
    const { title, image, imageAlt, cardType, cardClass }= props
    // const bluberint = {
    //     "featured": {
    //         "h1": {"class": "hero__featured__h1"}
    //     }
    // }
    // for (const key in bluberint) {
        
    // }
    return (
        <>
    
       <div class={ "card card--hero " + cardClass }>
            <h3 class="card__header">{title || "card title"}</h3>
            <div class="card__body">
                <img class="card__media" src={image} alt={imageAlt} />
            </div>
        </div>

        </>
    )

})