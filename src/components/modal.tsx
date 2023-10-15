import {component$, Slot, useContext, useVisibleTask$} from '@builder.io/qwik';
// import {ShowModalContext} from '~/routes/layout';
import { showModalContext } from "~/routes/layout-site";

// import type { showModalContextData } from "~/routes/layout-site";
interface ModalProps  { 
    modalClass: string,
}
// interface Modal extends showModalContextData, ModalProps {}

export default component$<ModalProps>(({ modalClass }) => {
    const showModalCtx = useContext( showModalContext );


  useVisibleTask$(()=>{
    // document.onkeydown = function (event) {
      // event = event || window.Event;
      // if ( "key" in event ){
        
      //   isEscaped.value = (event.key === "Escape" || event.key === "Esc")
      // } else {
      //   isEscaped.value = ( event. === 27 )
      // }
    // }
  
    const onKeyUp = async ( e: KeyboardEvent )=> {

      const key = ( e as KeyboardEvent ).key || ( e as KeyboardEvent ).code

      if( key === "Escape" ){
        showModalCtx.showModal= false
      }
    }
    document.addEventListener('keyup', onKeyUp, true);

    return () => {
      document.removeEventListener('keyup', onKeyUp, true);
    }},
    { strategy: 'document-ready' 
  });

    return(
        <section class={modalClass} >
            <Slot />
        </section>
    )
})