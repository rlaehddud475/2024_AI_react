import { CSSProperties } from "react";

export type CounterImageProps = {
  cimage: string;
};

const CounterImage = (props: CounterImageProps) => {
  const counterStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    objectFit: "cover",
  };
  return (
    <div style={counterStyle}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={props.cimage}
        alt=""
      />
    </div>
  );
};
export default CounterImage;
