import { CSSProperties } from "react";
import CardUpper, { CardUpperProps } from "./CardUpper";
import CardDown from "./CardDown";

type CardProps = CardUpperProps;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <article style={cardStyle}>
      <div>
        <CardUpper {...props} />
      </div>
      <div>
        <CardDown />
      </div>
    </article>
  );
};
export default Card;
