import { component$, createContextId, Slot, useContext, useStore } from '@builder.io/qwik';// interface ItemProps { 
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



export default component$(({}) => {
    const showModalCtx = useContext( showModalContext );
    // useContext(showModalContext)
    let  MobileImage ;
    let  TabletImage ;
    let  DesktioImage ;
        // switch (Aboutme) {
        //     case "IconProfessionProplemS":
                
        //     MobileImage = <Image />;
        //     TabletImage = <Image />;
        //     DesktioImage = <Image />;
        //         break;
        //     case "IconProfessionUiUx":
        //         Image = <IconProfessionUiUx/>
        //         break;
        //     case "IconProfessionBackEnd":
        //         Image = <IconProfessionBackEnd/>
        //         break;
        //     case "IconProfessionFrontEnd":
        //         Image = <IconProfessionFrontEnd/>
        //         break;
        //     default:
        //         break;
        // }
    return(
        <>{
            
            showModalCtx.showModal && (
                <Modal modalClass="lets-talk">
                <div class="modal modal--lets-talk block">
                    <button class="mobile-menu__close-btn absolute z-50" type="button" onClick$={ ()=> showModalCtx.showModal = !showModalCtx.showModal } >close</button>
                    <div class="flex h-full">
                        <div class="[ modal__main ]  justify-center gap-3 w-full px-12 h-full">
                        <h2>auto onboarder service</h2>
                        <span>welcome </span>
                        </div>
                        <div class="[ modal__side-menu ] flow-side-section border-2 w-3/12 h-full bg-yellow-600">
                            <h3 class="modal__title text-center p-4 w-full bg-blue-200">live chat</h3>
                            <form action="" class="flex flex-col space-between"  >
                            <label for="live-chat-email" >your email</label>
                            <input type="email" name="live-chat-email" class="livechat__email" placeholder="enter your email ..."/>
                            <input type="submit" name="live-chat-submit"  class="live-chat__submit" value="start chat" />
                            </form>
                        </div>
                    </div>
                </div>
                </Modal>
            )
        }

        </>
    )
})