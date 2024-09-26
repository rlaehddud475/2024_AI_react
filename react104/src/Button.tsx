import { CSSProperties } from "react";
type propsType = {
  active: "hard" | "smooth" | "circle";
  backgroundColor: "primary" | "hover" | "deactive";
};
const Button = (props: propsType) => {
  const buttonMap = {
    hard: "0px",
    smooth: "5px",
    circle: "20px",
  };
  const colorMap = { primary: "blue", hover: "nave", deactive: "skyblue" };
  const ButtonStyle: CSSProperties = {
    borderRadius: buttonMap[props.active],
    backgroundColor: colorMap[props.backgroundColor],
    padding: "10px 40px",
    fontSize: "32px",
  };
  return <button style={ButtonStyle}></button>;
};
export default Button;
