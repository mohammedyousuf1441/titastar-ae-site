import { component$, useVisibleTask$,createContextId, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';


import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});


export type showModalContextData = {
  showModal: boolean;
}

  
export const showModalContextId ="lets.talk.context";
export const showModalContext = createContextId<showModalContextData>(showModalContextId);


export default component$(() => {
  const modalData =  useStore<showModalContextData>({
    showModal: false
  });
  useContextProvider(showModalContext, modalData);
  return (
    <div class="page">
      <div class="u-container">
            <Header />
            <main class="main-grid">
              <Slot />
            </main>
            <Footer />
      </div>
    </div>
  );
});
