import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
    return (
        <>
            <a {...props} class="shadow px-4 py-3 bg-blue-500 font-bold text-white border border-1 border-solid text-base text-lg font-medium rounded-md flex justify-center lg:m-0 lg:block"></a>
        </>
    );
}

export function InlineCode(props: JSX.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props} class="hidden lg:flex font-mono bg-gray-900 text-white rounded-md items-center pl-3 pr-4 py-3 border border-transparent md:text-lg shadow flex justify-between">

        </span>
    )
}

export function Code(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <pre class="h-full bg-gray-900 text-white rounded-md flex items-center px-3 py-3 border border-transparent text-base shadow flex justify-between">
            <code {...props} class="w-full h-full"></code>
        </pre>
    )
}