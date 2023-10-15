import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout-site';
import './footer.scss';
import logo from "../../../images/vecteezy_secretary-bird-logo_11631942.jpg"
export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer >
      <a href="https://mohammedyousuf.rf.gd" target="_blank" >
        Made with ♡ by MohammedYousuf
        <span>{serverTime.value.date}</span>
      </a>
      <div class="right-reserved">
        All right reserved Titastar
        <div class=""> 
          <h6> <img src={logo} alt="sbirdtech" class="logo" /> </h6>
        </div>
      </div>
    </footer>
  );
});
