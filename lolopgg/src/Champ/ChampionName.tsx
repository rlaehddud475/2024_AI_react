import { CSSProperties } from "react";
export type ChampionNameProps = {
  name: string;
};
const ChampionName = (props: ChampionNameProps) => {
  const ChampNameStyle: CSSProperties = {
    fontSize: "12px",
    textAlign: "left",
    objectFit: "cover",
  };
  return <span style={ChampNameStyle}>{props.name}</span>;
};
export default ChampionName;
