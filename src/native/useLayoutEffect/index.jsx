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
    
    // runs second
    useEffect(() => console.log(++executionCount.current, "useEffect"), []);

    // runs first
    useLayoutEffect(() => {console.clear(); console.log(++executionCount.current, "useLayoutEffect")}, []);

    return (
        <div className="layout-effect-container">
            <span>open the console...</span>

            <p>
                useLayoutEffect runs synchronously after all DOM mutations.
                <br />It runs after the Dom is updated and before the browser paint the changes.
            </p>

            <pre className="layout-effect-code">{ componentCode.join("\n") }</pre>

            <p>
                That's why the 'useLayoutEffect' log appears in the console first, followed by the 'useEffect' log,
                <br />despite the fact that the hooks are defined in reverse order.
            </p>

            <img src="/React useEffect vs useLayoutEffect.jpg" alt="" />
        </div>
    );
}

export default DemoComponent;