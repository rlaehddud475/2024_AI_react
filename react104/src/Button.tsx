import { CSSProperties } from "react";

type propsType = {
  active: "hard" | "smooth" | "circle";
  backgroundColor: "primary" | "hover" | "deactive";
};

const Button = (props: propsType) => {
  const color = {
    primary: "#205bf3",
    hover: "#478df5",
    deactive: "#979797",
  };
  const active = {
    hard: "0px",
    smooth: "5px",
    circle: "20px",
  };
  const ButtonStyle: CSSProperties = {
    backgroundColor: color[props.backgroundColor],
    borderRadius: active[props.active],
    color: "white",
    padding: "10px 45px",
    fontSize: "32px",
    border: "1px",
    width: "300px",
    height: "100px",
  };
  return <button style={ButtonStyle}>버튼</button>;
};
export default Button;
