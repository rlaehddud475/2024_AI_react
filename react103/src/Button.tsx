import { CSSProperties } from "react";
type propsType = {
  backgroundColor: string;
  padding: string;
  text: string;
};
const Button = ({ backgroundColor, padding, text }: propsType) => {
  const ButtonStyle: CSSProperties = {
    backgroundColor,
    padding,
  };
  return <button style={ButtonStyle}>{text}</button>;
};
export default Button;
