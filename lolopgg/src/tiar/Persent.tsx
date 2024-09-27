import { CSSProperties } from "react";

export type persentProps = {
  winpersent: number;
  pickpersent: number;
  banpersent: number;
};

const Persent = (props: persentProps) => {
  const PersentStyle: CSSProperties = {
    fontSize: "12px",
    lineHeight: "16px",
  };
  return (
    <span style={PersentStyle}>
      {props.winpersent}%<span>{props.winpersent}%</span>
      <span>{props.banpersent}%</span>
    </span>
  );
};
export default Persent;
