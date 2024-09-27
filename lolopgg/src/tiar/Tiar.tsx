import { CSSProperties } from "react";
export type TiarProp = {
  tier: number;
};
const Tiar = (props: TiarProp) => {
  const tiarMap: any = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };
  const tiarStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    objectFit: "cover",
  };
  return (
    <div style={tiarStyle}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={tiarMap[props.tier]}
        alt=""
      />
    </div>
  );
};
export default Tiar;
