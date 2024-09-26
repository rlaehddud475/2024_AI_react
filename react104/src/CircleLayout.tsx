import { CSSProperties } from "react";
import Circle from "./Circle";
type propsType = { repeatNumber: number };
const CircleLayout = (props: propsType) => {
  const CircleLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber},1fr)`,
    gap: "20px",
  };
  return (
    <section style={CircleLayoutStyle}>
      {Array(
        "#1abc9c",
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#16a085",
        "#27ae60",
        "#2980b9",
        "#8e44ad",
        "#2c3e50"
      ).map((v) => (
        <Circle backgroundcolor={v} />
      ))}
    </section>
  );
};
export default CircleLayout;
