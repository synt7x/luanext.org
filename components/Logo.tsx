import { asset } from "$fresh/runtime.ts";

export default function Nav() {
    return (
        // Navbar logo and name
        <>
            <div class="p-4 flex items-center">
                <img src={asset("assets/logo.svg")} alt="Logo" class="h-16 w-auto mr-3" />
                <h1 class="text-4xl">LuaNext</h1>
            </div>
        </>
    );
}