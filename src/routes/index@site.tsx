import { component$, $, useVisibleTask$, useSignal, useStore, useResource$, Resource  } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
// import  {  } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';
import FeaturedItems from "~/components/featured-items/featured-items";
import Header from "~/components/header/header";
import { gqlCall } from './gql-call';
import Hero from '~/components/hero/hero';
import MainActivites from "~/components/main-activites/main-activites";
import { createDirectus, rest, authentication,readItems} from '@directus/sdk';
// import { graphql } from '@directus/sdk/graphql';

interface SiteData {
  
}
interface Article {
	id: number;
	title: string;
	content: string;
}

interface Schema {
	articles: Article[];
}


// export const onGet: RequestHandler<any> =  async () => {
//   console.log("fetching data ...");

//   const res = await fetch("");
//   const data = await res.json();

//   return data;
// }


// const client = createDirectus('http://0.0.0.0:8055/articles').with(authentication()).with(rest());
// const client = createDirectus<Schema>('http://0.0.0.0:8055/graphql').with(graphql());


// const directuseData = useResource$(async ()=> {
//   const response = await fetch("http://0.0.0.0:8055/graphql");
//   const data = response.json()

//   return data;
// })

export default component$(() => {

// const endpointData = <>("http://0.0.0.0:8055/graphql");
  // const directuseData = useResource$(async ()=> {
    // const result = await client.query<any>(`
    //   query {
    //       articles {
    //           id
    //           title
    //           content
    //       }
    //   }
    // `);
    //   const response = await fetch("http://0.0.0.0:8055/graphql");
    //   const data = response.json()

    //   return data;
  // })
  
  return (
    // components inside main tag forget about header & footer
    <>
      <Hero />
      <MainActivites />
      <FeaturedItems />
      <div class="flex">
        {/* <Resource  
          value={res}
          onPending={()=> <h1 class="text-h1 text-primary-orange-400">loading</h1>}
          onRejected={(reasone)=> { console.log(reasone);  return(<h1 class="text-h1 text-accent-red-400">{ `${reasone} ` }cant connect to database</h1>)} }
          onResolved={data => {
            console.log(`${data}`)
            return data
          }}
        /> */}
      </div>
    </>
  );
});
// data.map( el => <h1>{el}</h1>


export const head: DocumentHead = {
  title: 'Titastar',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
