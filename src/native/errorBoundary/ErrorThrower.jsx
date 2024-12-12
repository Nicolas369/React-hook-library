import { useEffect, useState } from "react";

export function ErrorThrower() {
  const [count, setCount] = useState(5);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setCount(pre => --pre);
    }, 1000);
    
    if ( count === 0 ) {
      throw new Error("ErrorThrower: Custom Error for demo purposes!");
    }

    return () => clearTimeout(timeout);

  }, [count]);

  return (
    <div>
      <h2> Error in:  { count } </h2>
    </div>
  );
}
