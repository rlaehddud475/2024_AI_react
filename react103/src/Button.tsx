import { CSSProperties } from "react";

/* import { CSSProperties } from "react";
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
 */
type propsTypes = {
  active: "hard" | "smooth" | "circle";
  backgroundColor: "primary" | "hover" | "deactive";
  text: string;
};

const Button = (props: propsTypes) => {
  const backgroundColor = {
    primary: "#205bf3",
    hover: "#478df5",
    deactive: "#979797",
  };
  const active = {
    hard: "0px",
    smooth: "5px",
    circle: "100px",
  };
  const ButtonStyle: CSSProperties = {
    borderRadius: active[props.active],
    backgroundColor: backgroundColor[props.backgroundColor],
  };
  return <button style={ButtonStyle}>{props.text}</button>;
};
export default Button;
