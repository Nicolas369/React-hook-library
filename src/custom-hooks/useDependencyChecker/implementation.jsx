import { useEffect, useState } from "react";
import { useDependencyChecker } from "./useDependencyChecker";

// complex object to test 
const complexObjectInitialState = {
  id: "abc123",
  name: "Sample Object",
  description: "An example of a complex object",
  createdAt: new Date().toISOString(),
  isActive: true,
  tags: ["example", "complex", "object"],
  metadata: {
    author: "John Smith",
    version: 1
  },
  data: [
    { key: "item1", value: 10 },
    { key: "item2", value: 20 }
  ],
  count: 0
};

export default function DependencyCheckerTestComponent() {
  const [dependencyChange, setDependencyChange] = useState(0);
  const [normalDependencyChange, setNormalDependencyChange] = useState(0);


  // state
  const [complexObject, setComplexObject] = useState(complexObjectInitialState);

  /**
   * Normal dependency check
   */

  useEffect(() => {
    setNormalDependencyChange(prev => prev + 1);
  }, [
    complexObject
    // in a basic dependency check, React compares dependencies using a simple strict equality comparison '==='
    // in this case the dependencies will be check like this: ({} === {} and [] === [])
    // Triggering the useEffect on every setState execution, even though the state value hasn't changed.
  ]);


  /**
   * Hook: useDependencyChecker
   */

  const [ complexObjectChecker ] = useDependencyChecker([ complexObject ]);

  useEffect(() => {
    setDependencyChange(prev => prev + 1);
  }, [
    complexObjectChecker(complexObject)
    // Detect actual value changes in dependencies
    // instead of compare memory positions like '{} === {}' or '[] === []'
  ]);



  /**
   * function for update the state
   */

  const createNewObjectWithSameValue = () => {
    // instantiate new JS object but don't change the value 
    setComplexObject({...complexObject});
  }

  const addCount = () => {
    // change the value of count in complexObject.count 
    setComplexObject({
      ...complexObject,
      count: complexObject.count + 1
    });
  }

  const changeData = () => {
    // change the value of a property in one of the object in array complexObject.data 
    const data = [
      { key: "item1", value: 10 },
      { key: "item2", value: complexObject.data[1].value +1 }
    ];

    setComplexObject({
      ...complexObject,
      data
    });
  }

  return (
    <div>
      <p>changes with useDependencyChecker hook dependencies: { dependencyChange }</p>
      <p>changes with normal dependencies: { normalDependencyChange }</p>
      
      <div className="basicFlex position-bottom h-300 w-650">
        <label>
          Create new object without change the values
          <button onClick={createNewObjectWithSameValue}>
            create new object
          </button>
        </label>

        <label>
          modify the object adding 1 to the property count
          <button onClick={addCount}>
            count + 1
          </button>
        </label>

        <label>
          modify the complex object by changing the property of one of the object in the array 
          complexObject.data in complex object
          <button onClick={changeData}>
            change data
          </button>
        </label>

      </div>
      
    </div>
  )
}
