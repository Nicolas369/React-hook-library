import { useEffect, useLayoutEffect, useRef } from "react";

const componentCode = [
    `const DemoComponent = () => {`,
    ``,
    `    useEffect(() => console.log("useEffect"), []);`,
    ``,
    `    useLayoutEffect(() => console.log("useLayoutEffect"), []);`,
    ``,
    `    return ( ... )`,
    ``,
    `}`
];

const DemoComponent = () => {

    const executionCount = useRef(0);
    
    useEffect(() => console.log(++executionCount.current, "useEffect"), []);

    useLayoutEffect(() => {console.clear(); console.log(++executionCount.current, "useLayoutEffect")}, []);

    return (
        <div>
            <p> 
                useLayoutEffect runs synchronously after all DOM mutations. <br />
                runs after the Dom is updated and before the browser paint the changes
            </p>

            <pre style={{fontFamily: "monospace",padding: "25px", border: "solid 1px #ffffff", borderRadius: "6px", textAlign: "left"}}>
                {componentCode.join("\n")}
            </pre>
            
            <p>
                Thats why in this case the "useLayoutEffect" appears in the console first <br />
                and then the "useEffect" despite the hooks are in an inverse order.
            </p>
        </div>
    )
}

export default DemoComponent;