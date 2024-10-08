import { CSSProperties } from "react";
import Button from "./Button";
type GridLayoutProps = {
  repeatNumber: number;
};
const GridLayout = (props: GridLayoutProps) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.repeatNumber},1fr)`,
    gap: "30px",
  };
  const arr = ["primary", "hover", "Deactive"];
  const arr1 = ["hard", "hover", "Deactive"];
  return (
    <section style={gridStyle}>
      {}
      <Button backgroundColor="primary" active="hard" />
      <Button backgroundColor="primary" active="smooth" />
      <Button backgroundColor="primary" active="circle" />
      <Button backgroundColor="hover" active="hard" />
      <Button backgroundColor="hover" active="smooth" />
      <Button backgroundColor="hover" active="circle" />
      <Button backgroundColor="deactive" active="hard" />
      <Button backgroundColor="deactive" active="smooth" />
      <Button backgroundColor="deactive" active="circle" />
    </section>
  );
};
export default GridLayout;
