import { useEffect, useRef, useState } from "react";

const DemoUseEffect = (props) => {
    useEffect(() => {
        // component did mount, run time mounted

        console.log(
            props.count ? `component did update` : `component did mount`
        );

        return () => {
            // component will unmount, runs when unmounted the component 
            console.log(`component will unmount`);
            
            if (props.count === 4) {
                console.warn(`reset cycle`);
            }
        }

    }, [
        // component did update (run callback in dependencies change)
        props.count
    ]);

    return (<p>open the console <br/> {props.count}</p>)
}


const DemoComponent = () => {
    const [count, setCount] = useState(0);
    const interval = useRef(null);
    
    const startInterval = () => {
        const countSetter = (prevCount) => prevCount >= 4 ? 0 : prevCount +1;
        interval.current = setInterval(() => setCount(countSetter), 1000);
    }
    
    useEffect(() => {
        !count && startInterval();
        return () => clearInterval(interval.current);
    },[]);

    return (count <= 4) ? <DemoUseEffect count={count}/> : <></>
}

export default DemoComponent;