import { CSSProperties } from "react";

const GreenBox = () => {
  const GreenBoxStyle: CSSProperties = {
    backgroundColor: "green",
    width: "100px",
    height: "100px",
  };
  return <div style={GreenBoxStyle}></div>;
};
export default GreenBox;
