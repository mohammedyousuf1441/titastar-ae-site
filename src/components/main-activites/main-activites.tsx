import { component$ } from '@builder.io/qwik';
import "./main-activites.scss";
// interface ItemProps { 
//     title: string,
//     image: string
// }
import { mainActivites } from "../../constants/data"
export default component$(({  }) => {
    return(
    <section class="main-activites mt-space-8">
        <h2 class="headtext-section">Main Activities:</h2>
        <div class="main-activites__grid ">
            {            
            mainActivites.map( activite => 
            <div class="activite__card flex flex-wrap border-natural-grey-200 p-space-5">
                <img class="main-activites__icon" src="" />
                <h3 class="main-activites__title text-lg font-bold">{ activite.title || "Activite Title"}</h3>
            </div> )
            }
        </div>

    </section>
    )
}

)