import { CSSProperties } from "react";

type propsType = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};
const Box = (props: propsType) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const Boxstyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };
  return <div style={Boxstyle}></div>;
};
export default Box;
