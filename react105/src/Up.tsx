import { useState } from "react";

const Up = () => {
  const [num, setNum] = useState(0);
  const add = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  return <button onClick={add}>{num}</button>;
};
export default Up;
