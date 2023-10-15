import { component$, createContextId, useContext, useStore, useResource$, Resource } from '@builder.io/qwik';// interface ItemProps { 
//     title: string,
//     image: string
// }
import { showModalContext } from "~/routes/layout-site";
import Modal from "../modal";
import "./letstalk.scss";
// import { Aboutme } from "../../constants/data";

export type showModalContextData = {
    showModal: boolean;
  }
interface variousProducts {

}


export default component$(({}) => {

    const ProdcutsData = useResource$( ()=> {

    })
   return(
    <section class="various-products">
        <h1 class="headtext_section">Various Products</h1>
        <div class="various-products__grid">
            <div class="various-products__card">
                <img src={} /> 
            <button><a href="" class="bg-natural-grey-500 py-[0.3em] px-space-4 rounded-xs">Buy</a></button>
            </div>
        </div>
    </section>
    )
})