import { CSSProperties } from "react";
type propsType = { backgroundColor: string };
const Circle = (props: propsType) => {
  const Circlestyle: CSSProperties = {
    background: props.backgroundColor,
    borderRadius: "9999px",
    width: "50px",
    height: "50px",
    border: "none",
  };
  return <button style={Circlestyle}></button>;
};

export default Circle;
