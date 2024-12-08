import { Suspense, useState } from "react";

export default function SuspenseDemo() {
    
    const initialState = "Make request for new Data.";
    
    const [data, setData] = useState(initialState);

    const makeHTTPCall = () => {
        setData(null);
        setTimeout(() => { setData("Data response with status 200 OK.") }, 3000);
    }

    return (
        <>

            <button onClick={makeHTTPCall}>
                request data
            </button>

            <Suspense fallback={<Loading />}>
                <Component2 data={data} />
            </Suspense>

        </>
    );
}

const Component2 = (props) => {
    const { data } = props;
    
    if (!data) {
        // auto-resolve Promise for trigger Suspense Component;
        throw new Promise( resolve => resolve() );
    }

    return <h3>{ data }</h3>
}

function Loading() {
    return <h4> Loading...</h4>;
}