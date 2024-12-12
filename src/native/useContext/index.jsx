import { createContext, useContext } from "react";

const defaultValue = {}; // default static last resource value;
const ContextProvider = createContext(defaultValue);


const InsideComponent1 = () => {
    const { value } = useContext(ContextProvider)[0];
    return (
        <>
            <p> context value: { value }</p>
        </> 
    );
}

const InsideComponent2 = () => {
    const { value } = useContext(ContextProvider)[1];
    return  (
        <>
            <p> context value: { value } <br /></p>
        </> 
    );
}

const InsideComponent3 = () => {
    const { value } = useContext(ContextProvider)[2];
    return (
        <>
            <p> context value: { value }</p>
        </> 
    );
}

const DemoUseContext = () => {
    const context = [
        {
            value: 1,
        },
        {
            value: 2,
        },
        {
            value: 3,
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