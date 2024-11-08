
import { createContext, useContext } from "react";

const defaultValue = {}; // default static last resource value;
const ContextProvider = createContext(defaultValue);


const InsideComponent1 = () => {
    const { context } = useContext(ContextProvider)[0];
    return (
        <>
            <p> context value: { context }</p>
        </> 
    );
}

const InsideComponent2 = () => {
    const { context } = useContext(ContextProvider)[1];
    return  (
        <>
            <p> context value: { context } <br /></p>
        </> 
    );
}

const InsideComponent3 = () => {
    const { context } = useContext(ContextProvider)[2];
    return (
        <>
            <p> context value: { context }</p>
        </> 
    );
}

const DemoUseContext = () => {
    const context = [
        {
            context: 1,
        },
        {
            context: 2,
        },
        {
            context: 3,
        }
    ];

    return (
        <div>
            <ContextProvider.Provider value={context}>
                <InsideComponent1 /> 
                <InsideComponent2 />
                <InsideComponent3 />
            </ContextProvider.Provider>
        </div>
    );
}

export default DemoUseContext;