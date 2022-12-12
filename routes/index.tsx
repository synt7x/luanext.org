import { Head, asset } from "$fresh/runtime.ts";
import Hero from "../islands/Hero.tsx";
import Nav from "../islands/Nav.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>LuaNext Programming Language</title>
        <link rel="stylesheet" href={asset("styles/global.css")} />
        <meta name="title" content="LuaNext Programming Language" />
        <meta name="description" content="LuaNext is a compiler toolchain that allows you to compile, transpile, lint, and format the next generation of Lua. It has support for static compilation, Lua versions dating back to 5.0, and Luau." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luanext.deno.dev/" />
        <meta property="og:title" content="LuaNext Programming Language" />
        <meta property="og:description" content="LuaNext is a compiler toolchain that allows you to compile, transpile, lint, and format the next generation of Lua. It has support for static compilation, Lua versions dating back to 5.0, and Luau." />
        <meta property="og:image" content="https://luanext.deno.dev/assets/promo.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://luanext.deno.dev/"/>
        <meta property="twitter:title" content="LuaNext Programming Language"/>
        <meta property="twitter:description" content="LuaNext is a compiler toolchain that allows you to compile, transpile, lint, and format the next generation of Lua. It has support for static compilation, Lua versions dating back to 5.0, and Luau."/>
        <meta property="twitter:image" content="https://luanext.deno.dev/assets/promo.png"/>
      </Head>
      <div id="hero" class="shadow">
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
