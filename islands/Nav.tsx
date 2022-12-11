import Logo from "../components/Logo.tsx";
import Navigation from "./Navigation.tsx";

export default function Nav() {
    return (
        // Navbar component
        <>
            <header class=" py-4 px-11 ">
                <div class="mx-auto max-w-screen-lg flex gap-3 justify-between text-lg">
                    <a href="/">
                        <Logo />
                    </a>
                    <Navigation />
                </div>
            </header>
        </>
    );
}