import { lazy, Suspense, useState } from "react"

function LazyLoading() {

    const [current, setPage] = useState(0);

    const changePage = () => {
        setPage( prevState => {
            return prevState >= (--pages.length) ? 0 : prevState + 1;
        });
    }

    const pages = [
        { component: lazy(() => import("./component1")) },
        { component: lazy(() => import("./component2")) },
        { component: lazy(() => import("./component3")) }
    ];

    const CurrentPageComponent = pages[current].component; 

    return (
        <>
            <h3>This Component is render using lazy loading, check the network tab</h3>

            <Suspense fallback={<p>Loading... </p>}>
                <CurrentPageComponent />  
            </Suspense>
                
            <button onClick={changePage}>
                change page
            </button>
        </>
    );
}

export default LazyLoading;