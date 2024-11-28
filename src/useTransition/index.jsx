import { useState, useTransition } from "react";
import { TabSimple } from "./tab-simple";
import TabSlow from "./tab-slow";

/**
 * useTransition: is a React Hook that lets you update the state without blocking the UI.
 */

function DemoComponent() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState(0);

    const changeTab = (newTab) => {
        startTransition(() => {
            setTab(newTab);
        });
    }

    return (
        <div className="transition-container">  
            <div>
                <button onClick={() => changeTab(0)}> tab clear  </button>
                <button onClick={() => changeTab(1)}> tab simple </button>
                <button onClick={() => changeTab(2)}> tab slow   </button>
            </div> 
            
            <div className="transition-tabs">
                {tab === 0 && <p> Select one tab </p>}
                {tab === 1 && <TabSimple/>}
                {tab === 2 && <TabSlow/>}
            </div>

            {isPending && <p> loading... </p>}
        </div>
    )
}

export default DemoComponent;
