import { component$, Fragment } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
import "./navigation.scss"
export default component$(() => {
  const MenuItems = () => (
    <Fragment>
        <li class="navbar-nav__item"><Link href="/home">home</Link></li>
        <li class="navbar-nav__item"><Link href="/images">products</Link></li>
        <li class="navbar-nav__item"><Link href="/mockups" >About us</Link></li>
        <li class="navbar-nav__item"><Link href="/customers" >Customers</Link></li>
        <li class="navbar-nav__item"><Link href="/faq" >FAQ</Link></li> 
        <li class="navbar-nav__item"><Link href="/contactus" >Contact us</Link></li>
    </Fragment>
  )
  return (
    <header class="header">
      <div class="navbar">
        <div class="brand">
          <a href="/" title="qwik">
          </a>
        </div>

        <nav class="navbar__nav">
        <ul class="navbar-nav__list" role="list">
          <MenuItems/>
        </ul>
        </nav>
      </div>
    </header>
  );
});
