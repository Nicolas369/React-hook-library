import { useRef } from "react";
import Counter from "./implementation";

export const Container = () => {
    const childRef = useRef();

    const resetCounter = () => childRef.current?.reset();

    return <div>

        <Counter ref={childRef} />
        
        <button onClick={resetCounter}>reset</button>

        <p>
            In this case the function that reset the counter is passed up <br />
            from the Component that Implemented to the Container Component.
        </p>
        
    </div>
}