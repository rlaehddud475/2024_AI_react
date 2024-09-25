import { CSSProperties } from "react";

const YellowBox = () => {
  const YellowBoxStyle: CSSProperties = {
    backgroundColor: "Yellow",
    width: "100px",
    height: "100px",
  };
  return <div style={YellowBoxStyle}></div>;
};
export default YellowBox;
