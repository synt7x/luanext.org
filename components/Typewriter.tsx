import { useState, useEffect } from "preact/hooks";
import { LuaNext } from "./Syntax.tsx";

export function Typewriter(props: { children: string[] }) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    
    const code = props.children.join("");

    // Typewriter effect with a 100ms delay
    useEffect(() => {
        if (index <= code.length) {
            setText(code.substring(0, index));
            setTimeout(() => setIndex(index + 1), 50);
        }
    }, [index]);





    
    return <LuaNext>{text}</LuaNext>;
}