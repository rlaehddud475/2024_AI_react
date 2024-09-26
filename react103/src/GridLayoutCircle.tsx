import { CSSProperties } from "react";
import Button from "./Button";
import Circle from "./Circle";

const GridLayoutCircle = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(5,1fr)`,
    gap: "50px",
  };

  return (
    <section style={gridStyle}>
      {Array(10)
        .fill("red")
        .map((v) => (
          <Circle backgroundColor={v} />
        ))}
    </section>
  );
};
export default GridLayoutCircle;
