// import "./App.css";

// import { useRef } from "react";

// export default function App() {
//   const countRef = useRef(0);
//   console.log("count", countRef.current);
//   const handle = () => {
//     countRef.current++;
//     console.log(`Clicked ${countRef.current} times`);
//   };

//   console.log("I rendered!");

//   return <button onClick={handle}>Click me</button>;
// }

import { useRef, useState, useEffect } from "react";

export default function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
