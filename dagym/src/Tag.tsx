import { CSSProperties } from "react";
import { text } from "stream/consumers";
export type Tagprops = {
  text: string;
};
const Tag = (props: Tagprops) => {
  const tagStyle: CSSProperties = {
    padding: "3px 6px",
    fontSize: "10px",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: "#eaeeff",
    color: "#5467f5",
  };
  return <span style={tagStyle}>{props.text}</span>;
};
export default Tag;
