import { JSX } from "preact";

export default function NavItem(props: JSX.HTMLAttributes<HTMLAnchorElement>, url: string) {
    return (
        <>
            <li class="py-2 px-4 text-gray-600 rounded bg-white hover:bg-gray-200 shadow shadow-md">
                <a {...props}></a>
            </li>
        </>
    )
}