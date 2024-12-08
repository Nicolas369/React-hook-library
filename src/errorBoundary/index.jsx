import { useState } from "react";
import { ErrorBoundary } from "./Errorboundary";
import { ErrorThrower } from "./ErrorThrower";

export default function TestErrorBoundary() {
    const [errorCount, setErrorCount] = useState(0);

    return (
        <div>
            <h1> Error count: { errorCount } </h1>
            <ErrorBoundary 
                reboot={() => setErrorCount(pre => pre + 1)}
                fallback={<h1>Error catch.</h1>}>
                <ErrorThrower />
            </ErrorBoundary>
        </div>
    );
}