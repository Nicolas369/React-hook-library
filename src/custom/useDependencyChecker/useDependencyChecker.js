import { useMemo, useRef } from "react";

export function useDependencyChecker(dependencies) {
    const dependencyChange = useRef(0);

    const compareDependencies = (originalDep, dep) => {
        return JSON.stringify(originalDep) !== JSON.stringify(dep);
    }

    const dependenciesCheckers = useMemo(() => {
        return dependencies.map( dependency => {

            const checkerFunction = (dep) => {
                const change = compareDependencies(dependency, dep);
                if (change) dependencyChange.current++;
                return change;
            } 

            return checkerFunction;
        });
    }, [dependencyChange.current]);

    return dependenciesCheckers;
}