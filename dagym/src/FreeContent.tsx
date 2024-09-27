import { CSSProperties } from "react";
export type propsType = {
  services: string;
};
const FreeContent = (props: propsType) => {
  const freecontentStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };
  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999fa9",
  };
  return (
    <div style={freecontentStyle}>
      <span style={serviceStyle}>무료서비스</span>
      <span>{props.services}</span>
    </div>
  );
};
export default FreeContent;
