import { CSSProperties } from "react";
type propsType = {
  width: string;
  height: string;
  backgroungColor: backgroundColor;
  text: text;
};
type backgroundColor = "red" | "blue" | "green" | "orange";
type text = "red" | "blue" | "green" | "orange";
const Box = (props: propsType) => {
  const BoxStyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroungColor,
  };
  return <div style={BoxStyle}>{props.text}</div>;
};
export default Box;
