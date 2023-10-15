import { component$ } from '@builder.io/qwik';
interface ItemProps { 
    title: string,
    image: string
}
export default component$<ItemProps>(({ title, image }) => {
    return(
    <div class="product">
        <img class="product__icon" src={image} />
        <h3 class="product__title">{title}</h3>
        <button class="product__more">more</button>
    </div>
    )
}

)