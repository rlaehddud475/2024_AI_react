import { CSSProperties } from "react";

const SkyBox = () => {
  const SkyBoxStyle: CSSProperties = {
    backgroundColor: "skyblue",
    width: "100px",
    height: "100px",
  };
  return <div style={SkyBoxStyle}></div>;
};
export default SkyBox;
