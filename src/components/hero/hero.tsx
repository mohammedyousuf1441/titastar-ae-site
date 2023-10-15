import { component$, useSignal } from '@builder.io/qwik';
import  './hero.scss';
import { heroData } from "../../constants/data";
import images from "../../constants/images"
// import { ourTradingInfoGraphic, mainLogo, package1, package2, bigStore } from "../../constants/images"
import { Link } from "@builder.io/qwik-city";
import { WorldTradeGraphic } from "~/images/svg--worldmap";
export default component$(({}) => {
  // const toggleMenu = useSignal(false);
  return (
    <section class="hero flex-flow-row py-space-4 relative justify-between mt-space-4">
       <div class="left-side flow-flex-col absolute md:relative p-space-4 flex-1  items-start  md:max-w-[40%] ">
              <h1 class="what-who__title headtext-main text-left">{heroData.leftside.display.text}</h1>
              <p class="what-who__desc text-natural-grey-200">{heroData.leftside.description.text}</p>
              <button class="what-who__btn text-h6 text-natural-grey-600 bg-natural-grey-100 py-space--1 px-space-5 rounded-ss"  ><Link href={heroData.leftside.cta.url}> {heroData.leftside.cta.text} </Link></button>
        </div> 
        <div class="right-side top-space-10 md:max-w-[60%] -z-20">
              <div class="global-trading">
                {/* <img class="global-trading__img-containers" src={images.ourTradingInfoGraphic} alt="goods containers" /> */}
                <div class="hero__infographic__bg" />
                <WorldTradeGraphic  />
                {/* <img class="global-trading__img-map" src="" alt="world map" />
                <img class="global-trading__bg" src="" alt="gradiant bg" /> */}
                {/* <p>goods containers</p> */}
              </div>
        </div>
    </section>
  );  
});
