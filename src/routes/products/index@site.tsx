import { component$, $, useVisibleTask$, useSignal, useStore, useTask$  } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import  { RequestHandler } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';
import FeaturedItems from "~/components/featured-items/featured-items";
import Header from "~/components/header/header";

import Hero from '~/components/hero/hero';
import MainActivites from "~/components/main-activites/main-activites";


export default component$(() => {

// const endpoint = useEndpoint<typeof onGet>("http://0.0.0.0:8055/graphql");

  return (
    // components inside main tag forget about header & footer
    <>
      <h1>Products</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Titastar',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
