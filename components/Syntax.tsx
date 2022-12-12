
interface token {
    type: string,
    value: string
}

function highlight(text: string, pattern: RegExp): token[] {
    const tokens = text.split(pattern);
  
    if (tokens.length <= 1) {
      return [
        {value: text, type: "text"}
    ];
    }
  
    const matches = text.match(pattern);
    const fragment: token[] = []
    
    tokens.forEach((token, i) => {
        
        if (token) fragment.push({ type: "text", value: token })
        if (!matches![i]) return;

        const context = tokens[i + 1] || '';

        if (matches![i].startsWith("--")) {
            fragment.push({ type: "comment", value: matches![i] })
            return;
        }

        if (matches![i]) {
            switch (matches![i]) {
                case "function": case "local": case "end":
                case "if": case "then": case "else":
                case "elseif": case "for": case "class":
                case "in": case "do": case "while": case "repeat":
                case "until": case "return": case "break": case "goto": case "and": case "or": case "not": case "self":
                case "super": case "import": case "export":
                case "as": case "from": case "default": case "constructor": case "new":
                case "switch": case "case": case "try":
                case "catch": case "finally": case "throw": 
                case "method": case "define": case "extends":
                case "=": case "==": case "!=": case ">": case "<": case ">=": case "<=":
                case "+": case "-": case "*": case "/": case "%": case "^": case "#":
                    fragment.push({ type: "keyword", value: matches![i] })
                    return;
                case "true": case "false": case "nil":
                    fragment.push({ type: "literal", value: matches![i] })
                    return;
            }

            switch (matches![i][0]) {
                case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
                    fragment.push({ type: "number", value: matches![i] })
                    return;
                case '"': case "'":
                    fragment.push({ type: "string", value: matches![i] })
                    return;
            }

            if (context.startsWith('(') || context == '.') {
                fragment.push({ type: "call", value: matches![i] })
                return;
            } else if (context == ':') {
                fragment.push({ type: "class", value: matches![i] })
                return;
            }

            fragment.push({ type: 'identifier', value: matches![i] })
        }
    })

    return fragment
  }

export function LuaNext(props: { children: string }) {
    const code = props.children;
    const fragment = highlight(code, /\b[^ .:()\n]+\b|"[^"]*"?|--[^\n]*|=/g);

    return (<>
        {fragment.map((token: token) => (
            <span class={"token-" + token.type}>{token.value == "\n" ? <br/> : token.value}</span>
        ))}
    </>)
}