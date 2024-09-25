import { CSSProperties } from "react";

const Redbox = () => {
  const RedBoxStyle: CSSProperties = {
    backgroundColor: "Red",
    width: "100px",
    height: "100px",
  };
  return <div style={RedBoxStyle}></div>;
};
export default Redbox;
