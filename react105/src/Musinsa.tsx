import { CSSProperties, useState } from "react";

type MusinsaProps = {
  size: number;
  price: number;
  //   change:
};
const Musinsa = (props: MusinsaProps) => {
  const [num, setNum] = useState(1);
  const boxstyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    border: "1px solid black",
    justifyContent: "space-between",
  };

  const numUp = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  const numDown = () => {
    setNum((prev) => {
      return prev == 1 ? prev : prev - 1;
    });
  };
  return (
    <div style={boxstyle}>
      <span>{props.size}</span>
      <button onClick={numDown}>-</button>
      <span>{num}</span>
      <button onClick={numUp}>+</button>
      <span>{props.price * num}</span>
    </div>
  );
};
export default Musinsa;
