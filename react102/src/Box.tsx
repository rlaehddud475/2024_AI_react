import { CSSProperties } from "react";
type propsType = {
  backgroundColor: string;
  width: string;
  height: string;
};
const Box = (props: propsType) => {
  const CSSstyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={CSSstyle}></div>;
};
export default Box;
