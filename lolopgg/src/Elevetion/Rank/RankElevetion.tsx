import { CSSProperties } from "react";

export type RankProps = {
  rank: number;
};
const RankElevetion = (props: RankProps) => {
  const rankStyle: CSSProperties = {
    fontSize: "12px",
    color: "#9AA4Af",
    paddingLeft: "12px",
  };
  return <span style={rankStyle}>{props.rank}</span>;
};
export default RankElevetion;
