import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { FaDollarSign, FaClipboard, FaCheck } from "react-icons/fa";

import { Button, InlineCode, Code } from "../components/UI.tsx";
import { Typewriter } from "../components/Typewriter.tsx"

export default function Hero(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <main class="pt-2 items-center block lg:grid gap-6 max-w-screen-lg my-0 mx-5 lg:mx-auto rounded py-16">
        <div class="max-w-lg m-auto">
          <h1 class="text-5xl m-2">LuaNext helps you...</h1>
          <p class="text-xl m-2">
            Compile, transpile, lint, and format your Lua code with a single engine. Use the next generation of Lua syntax to get things done quickly and more efficiently.
          </p>
          <div class="mt-5 lg:mt-8 flex gap-4">
            <Button class="flex lg:block lg:m-0 w-full lg:w-auto" href="/get-started">
              Get Started
            </Button>
            <Button class="flex lg:hidden w-full" href="/docs">
              Documentation
            </Button>
            <InlineCode>
              <div class="flex items-center">
                <FaDollarSign class="text-blue-400 mr-4" />
                luarocks install luanext
              </div>
              <FaClipboard id="copy" class="ml-4 cursor-pointer opacity-25" onClick={
                () => {
                  IS_BROWSER &&
                  navigator.clipboard.writeText("luarocks install luanext")

                  const copy = document.getElementById("copy")!;
                  const copied = document.getElementById("copied")!;


                  copy.classList.add("hidden");
                  copied.style.opacity = "1"
                  copied.classList.remove("hidden");

                  setTimeout(() => {
                    copied.style.opacity = "0.25"
                  }, 1000)
              }} />
              <FaCheck id="copied" class="hidden ml-4 cursor-pointer text-green-400 transition-opacity duration-1000" onClick={ () => {
                const copied = document.getElementById("copied")!;
                copied.style.opacity = "1"
                setTimeout(() => {
                  copied.style.opacity = "0.25"
                }, 1000)
              }} />
            </InlineCode>
          </div>
        </div>
        <div class="max-w-lg pt-5 h-64 hidden lg:block">
          <Code>
              <Typewriter>
              class Dog extends Animal{"\n"}
              {"\t"}constructor(name){"\n"}
              {"\t"}{"\t"}super(name){"\n"}
              {"\t"}end{"\n"}{"\n"}

              {"\t"}method bark(){"\n"}
              {"\t"}{"\t"}print("Woof!"){"\n"}
              {"\t"}end{"\n"}
              end{"\n"}{"\n"}

              local dog = new Dog("Fido"){"\n"}
              dog:bark() -- "Woof!"
              </Typewriter>
          </Code>
        </div>
      </main>
    </>
  );
}
