import { CSSProperties } from "react";
type propsType = {
  backgroundcolor: string;
};
const Circle = (props: propsType) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundcolor,
    width: "100px",
    height: "100px",
    borderRadius: "100px",
  };
  return <div style={CircleStyle}></div>;
};
export default Circle;
