import { component$ } from '@builder.io/qwik';
// import {  }
interface ComponentProps { 
    data: {}
}
import {objectives} from "../../constants/data";
import images from "../../constants/images";
import "./featured-items.scss";

export default component$<ComponentProps>(({  }) => {
    // const test = () =>{
    //     for(const objective in objectives) { 
    //         if (objectives.hasOwnProperty(objective)) {

    //         return(
    //         <div >
    //             {objective.title}
    //         </div>
    //         )
    //         }
    //     }
    // }
    const objectivesArray = Object.keys(objectives);
    const OBJECTIVEStEST = ()=> objectivesArray.forEach((key, index)=> {
        console.log( `${key}: ${index}`)
    });

    return(
    <section class="objectives ">
        <h2 class="objectives__title headtext-section">Our Traits</h2>
        <div class="objectives__content w-full block">
            
                <OBJECTIVEStEST />
            
        </div>

    </section>
    )
}

)