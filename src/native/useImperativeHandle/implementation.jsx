import { useState, forwardRef, useImperativeHandle } from "react";

// ref is pass as a second argument.
const Counter = (props, ref) => {
    const [counter, setCounter] = useState(0);

    const addOne = () => {
        setCounter(() => counter + 1);
    }

    const removeOne = () => {
        setCounter(() => counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    useImperativeHandle(ref, () => ({
        reset
    }));

    return (
        <div>
            <p>{counter}</p>
            <button onClick={removeOne}>remove one</button>
            <button onClick={addOne}>add one</button>
        </div>
    );
}

export default forwardRef(Counter);