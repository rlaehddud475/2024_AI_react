import { CSSProperties, useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const sub = () => {
    setNum((prev) => {
      if (prev == 0) {
        return prev;
      }

      return prev - 1;
    });
  };
  const sum = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <button onClick={sub}>-</button>
      <span style={{ backgroundColor: num >= 10 ? "red" : "white" }}>
        {num}
      </span>
      <button onClick={sum}>+</button>
    </div>
  );
};
export default Counter;
