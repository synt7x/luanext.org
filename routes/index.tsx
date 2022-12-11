import { Head, asset } from "$fresh/runtime.ts";
import Hero from "../islands/Hero.tsx";
import Nav from "../islands/Nav.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("styles/global.css")} />
      </Head>
      <div id="hero">
        <div class="w-screen" id="screen">
          <Nav />
          <Hero />
        </div>
      </div>
      <article class="max-w-screen-lg mx-auto my-10">
      </article>
    </>
  );
}
