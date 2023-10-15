import { component$ } from '@builder.io/qwik';
// import {  }
interface ComponentProps { 
    data: {}
}
import {featuredItems} from "../../constants/data";
import images from "../../constants/images";
import "./featured-items.scss";

export default component$<ComponentProps>(({  }) => {
    return(
    <section class="featured-items ">
        <h2 class="featured-items__title headtext-section">Featured Products</h2>
        <div class="featured-items__content w-full block">
            <div class="featured-items__group-container flow-flex-row justify-between relative" >
                <div class="featured-items__first-group flow-grid-featured w-[60%] max-w-full mt-space-4">
                    <div class="gap-element"/>
                    {/* <div class="gap-element"/> */}
                    {featuredItems.map(item => 
                    <div key={item.name} class="featured-items__card flow-flex-col justify-center bg-natural-white p-space-2 h-auto rounded-ss">
                        <img src={item.image} />
                        <div class="block">
                            <h4 class="card__title text-primary-orange-500 text-h5 font-bold text-center">{item.name}</h4>
                            <p>describtion</p>
                        </div>
                        <div class="flow-flex-row justify-around">
                            <span class="text-primary-blue-500 text-h5 font-black" >{item.price}</span>
                            <button><a href="" class="bg-natural-grey-500 py-[0.3em] px-space-4 rounded-xs">Buy</a></button>
                        </div>
                    </div>
                    )}

                </div>
                <img class="-z-20 absolute right-0" src={images.bigStore} alt="Our Stores" />
            </div>
           
            <div class="featured-items__second-group">

            </div>
        </div>

    </section>
    )
}

)