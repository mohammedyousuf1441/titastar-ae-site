import { component$ } from '@builder.io/qwik';


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

    return (
        <>
    
       <div class={   "card card--colle " + cardClass }>
            <div class="card__body card__body--colle">
                <img class="card__media card__media--colle" src={image} alt={imageAlt} />
            </div>
            <h3 class="card__header card__header--colle">{ title || "Website Presentation Mockup Template" }</h3>
        </div>

        </>
    )

})