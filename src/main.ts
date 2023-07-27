/// <reference types="vite/client" />
import { parse } from "@babel/parser";

const match = (n: any, ...p: Function[]) => {
    let map: Map<any, Function> = new Map();
    let other: Function = null;
    for (let i of p) {
        let funString = i.toString();
        let ast = parse(funString);
        if (ast.program.body[0].type === "ExpressionStatement") {
            if (ast.program.body[0].expression.type === "ArrowFunctionExpression") {
                let p = ast.program.body[0].expression.params;
                if (p[0].type === "AssignmentPattern") {
                    map.set(eval(p[0].right.extra.raw as string), i);
                }
                if (p[0].type === "Identifier" && p[0].name === "_") {
                    other = i.bind(null, n);
                }
            }
        }
    }

    let fun = map.has(n) ? map.get(n) : other;
    return fun();
};

export default match;
