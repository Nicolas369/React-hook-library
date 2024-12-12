import { useEffect, useState, useTransition } from "react";
import { TabSimple } from "./tab-simple";
import TabSlow from "./tab-slow";

function DemoComponent() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState(0);

    const changeTab = (newTab) => {
        startTransition(() => {
            setTab(newTab);
        });
    }

    return (
        <div>

            <div className="transition-modal">

                <div>
                    <button onClick={() => setTab(0)}> clear </button>
                    <button onClick={() => setTab(2)}> tab slow </button>
                    <button onClick={() => changeTab(1)}> tab simple </button>
                    <button onClick={() => changeTab(3)}> tab slow with transition </button>
                </div>
                
                <div className="transition-tabs">
                    {tab === 0 && <p> Select one tab </p>}
                    {tab === 1 && <TabSimple/>}
                    {tab === 2 && <TabSlow/>}
                    {tab === 3 && <TabSlow/>}
                </div>

            </div>
            
            {isPending && <p> loading... </p>}

        </div>
    )
}

const Component = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="transition-container">
            <span>{ count }</span>
            <DemoComponent />
        </div>
    )
}

export default Component;
