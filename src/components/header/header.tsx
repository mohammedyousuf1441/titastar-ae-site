import { component$, Fragment, useVisibleTask$, useSignal, useContext } from '@builder.io/qwik';
import { useLocation, useContent } from '@builder.io/qwik-city';
import { Link } from "@builder.io/qwik-city";
import { mainMenu } from "../../constants/data";
import images from "../../constants/images"
import "./header.scss"
import { showModalContext } from "~/routes/layout-site";
import { MainLogo } from "~/images/logo";


export default component$(() => {

  const { menu }  = useContent();
  const { url } = useLocation();

  const toggleMenu = useSignal(false);
  // const isEscaped = useSignal(false);
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
    }
    { strategy: 'document-ready' }
  });
  const MenuItems = () => (
    <Fragment>
      { menu 
        ? menu.items?.map( (item) => (
          <>
            {
              item.items?.map((item) => (
                <li key={item.href} class= "navbar-nav__item  xs:block text-base sm:text-lg md:text-h6 font-bold text-grey-200">
                  <a href={item.href} 
                    class={{
                      'is-active': url.pathname === item.href
                    }}                  
                  > {item.text} </a>
                </li>      
              ))
            }

          </>
        ) )
      :null}
    </Fragment>
  )
  return (
    <header class="header flex">
      <div class="navbar items-center p-space-3">
        <div class="brand">
          <a href="/" title="tita star">
            <MainLogo />
          </a>
        </div>
        <nav class="navbar__nav">
          <ul class="navbar-nav__list" role="list">
            <MenuItems/>
          </ul>
        </nav>
        <button type="button" onClick$={ ()=> toggleMenu.value = true } >menu</button>
      </div>
      { toggleMenu.value == true && (
        <div class="mobile-menu slide-bottom">
          <button class="mobile-menu__close-btn" type="button" onClick$={ ()=> toggleMenu.value = !toggleMenu.value } >close</button>
          <nav class="navbar__nav navbar__nav--mobile">
            <ul class="navbar-nav__list navbar-nav__list--mobile" role="list">
              <MenuItems/>
            </ul>
          </nav>
        </div>
      ) }

    </header>
  );
});
