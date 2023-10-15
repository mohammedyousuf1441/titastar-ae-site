import { $, component$,  useVisibleTask$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';
import { RouterHead } from './components/router-head/router-head';

import './global.scss';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const resizeStore = useStore({ windowWidth: 0, windowHeight: 0, clientWidth: 0, clientHeight: 0, containerW: 0 });
  console.log(resizeStore)

  useVisibleTask$(()=>{
    // if (typeof window !== "undefined") {
      
      function handleResize() {
        const container = document.querySelector<HTMLElement>(".container");
         resizeStore.windowWidth =  window.innerWidth * 0.01;
         resizeStore.windowHeight = window.innerHeight * 0.01;

         resizeStore.clientWidth =  document.documentElement.clientWidth * 0.01;
         resizeStore.clientHeight = document.documentElement.clientHeight * 0.01;
         if ( container !== null ) {
            resizeStore.containerW = container.offsetWidth;
          }

         document.documentElement.style.setProperty('--wvw', `${resizeStore.windowWidth}px`);
         document.documentElement.style.setProperty('--wvh', `${resizeStore.windowHeight}px`);
   
         document.documentElement.style.setProperty('--cvw', `${resizeStore.clientWidth}px`);
         document.documentElement.style.setProperty('--cvh', `${resizeStore.clientHeight}px`);
         
         document.documentElement.style.setProperty('--containerw', `${resizeStore.containerW}px`);
        console.log("working...." + resizeStore.windowWidth +" "+ resizeStore.windowHeight, resizeStore.containerW  )
      }
      
      handleResize()
      window.addEventListener("resize", handleResize);
      //  resizeStore.currentWidth = window.innerWidth;


     
    // }
    console.log( resizeStore ,document.documentElement.clientWidth , "container width: " + resizeStore.containerW);

    { strategy: 'document-ready' }
  })
  
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
  
});
