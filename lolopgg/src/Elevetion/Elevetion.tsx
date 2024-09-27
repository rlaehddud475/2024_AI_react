import { CSSProperties } from "react";
export type ElevetionProps = {
  elevetion: number;
};
const Elevetion = (props: ElevetionProps) => {
  const elevetionStyle: CSSProperties = {
    color: "#48B2CD",
    fontSize: "12px",
  };
  return <span style={elevetionStyle}>{props.elevetion}</span>;
};
export default Elevetion;
