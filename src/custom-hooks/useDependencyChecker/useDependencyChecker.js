import { useRef, useEffect, useState } from "react";

export function useDependencyChecker(dependencies) {
    const [dependenciesState, setDependenciesState] = useState([...dependencies.map(
        dep =>  JSON.stringify(dep)
    )]);

    const dependencyTrigger = useRef([...dependencies.map(_ => 0)]);
    const dependencyChange = useRef(0);

    useEffect(() => {

        setDependenciesState([...dependencies.map(
            dep =>  JSON.stringify(dep)
        )]);

        if (dependencyTrigger.current.length !== dependenciesState.length) {
            //if add or remove a dependency restart the triggers
            dependencyTrigger.current = [...dependencies.map(_ => 0)];
        }

    }, [
        dependencyChange.current,
        dependenciesState.length
    ]);

    const compareDependencies = (dependency, dep) => {
        return dependency !== JSON.stringify(dep);
    }

    const checkDependency = (index) => function(dep) {
        const dependency = dependenciesState[index];
        const hasChanged = compareDependencies(dependency, dep);

        if (hasChanged) {
            dependencyTrigger.current[index]++
            dependencyChange.current++
            setDependenciesState([...dependencies.map(
                dep =>  JSON.stringify(dep)
            )]);
        };

        return dependencyTrigger.current[index];
    }

    const dependenciesCheckers = [
        ...dependenciesState.map((_, index) =>  checkDependency(index))
    ];

    return dependenciesCheckers;
}