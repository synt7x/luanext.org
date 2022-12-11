import Search from "./Search.tsx";
import NavItem from "../components/NavItem.tsx";
import { FaGithub, FaBars } from "react-icons/fa";

export default function Nav() {
    return (
        // URL part of the navbar
        <>
            <nav class="flex lg:hidden justify-center items-center text-3xl">
                <FaBars/>
            </nav>
            <nav class="flex hidden lg:flex">
                <ul class="flex justify-center items-center gap-4 mx-4 flex-wrap font-bold">
                    <NavItem href="/download">Download</NavItem>
                    <NavItem href="/docs">Docs</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/community">Community</NavItem>
                    <li class="flex-1">
                        <a href="https://github.com/luanext" class="text-gray-900 hover:text-gray-700  py-2 rounded-md text-lg font-medium">
                            <FaGithub class="w-5 h-5" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}