import { CSSProperties } from "react";

export type PositionProp = {
  pimage: string;
  position: string;
};

const Position = (props: PositionProp) => {
  const positionStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    objectFit: "cover",
  };
  return (
    <div style={positionStyle}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={props.pimage}
        alt=""
      />
    </div>
  );
};
export default Position;
