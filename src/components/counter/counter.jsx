import React from "react";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
			<h1>{count}</h1>
			<button onClick={decrement}>Dec</button>
			<button onClick={increment}>Inc</button>
		</div>
  );
}
