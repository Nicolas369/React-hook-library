import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundaryComponent";
import { ErrorThrower } from "./ErrorThrower";

export default function TestErrorBoundary() {
    const [errorCount, setErrorCount] = useState(0);

    const rebootActions = async () => {
        return new Promise( resolve => {
            const timeout = setTimeout(() => {
                setErrorCount(pre => pre + 1);
                clearTimeout(timeout);
                resolve(true);
            }, 5000)}
        );
    }

    return (
        <div>
            <h1> Error count: { errorCount } </h1>
            <ErrorBoundary 
                reboot={rebootActions}
                fallback={<h1>Error catch.</h1>}>
                <ErrorThrower />
            </ErrorBoundary>
        </div>
    );
}