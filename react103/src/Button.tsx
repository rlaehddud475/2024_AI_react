import { CSSProperties } from "react";
type propsType = {
  backgroundColor: string;
  padding: string;
  text: string;
};
const Button = (props: propsType) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    padding: props.padding,
  };
  return <div style={ButtonStyle}>{props.text}</div>;
};
export default Button;
