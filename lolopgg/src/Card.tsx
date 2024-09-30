import { CSSProperties } from "react";
import ChampionImage, { ChampionImageProps } from "./Champ/ChampionImage";
import ChampionName, { ChampionNameProps } from "./Champ/ChampionName";
import CounterImage, { CounterImageProps } from "./Champ/CounterImage";
import Elevetion, { ElevetionProps } from "./Elevetion/Elevetion";
import RankElevetion, { RankProps } from "./Elevetion/Rank/RankElevetion";
import Position, { PositionProp } from "./Position";
import Persent, { persentProps } from "./tiar/Persent";
import Tiar, { TiarProp } from "./tiar/Tiar";

export type CardProps = ChampionImageProps &
  ChampionNameProps &
  CounterImageProps &
  persentProps &
  TiarProp &
  PositionProp &
  RankProps &
  ElevetionProps;
const Card = (props: CardProps) => {
  const fontStyle: CSSProperties = {
    gap: "10px",
    display: "flex",
    flexDirection: "row",
  };
  const chamStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  const pStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  const tStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  const cStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  const cardStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
    alignContent: "center",
    marginRight: "10px",
  };
  return (
    <article style={cardStyle}>
      <div style={fontStyle}>
        <RankElevetion rank={props.rank} />
        <Elevetion elevetion={props.elevetion} />
        <div style={chamStyle}>
          <ChampionImage image={props.image} />
          <ChampionName name={props.name} />
          <div style={tStyle}>
            <Tiar tier={props.tier} />
            <Position position={props.position} pimage={props.pimage} />

            <div style={pStyle}>
              <Persent
                winpersent={props.winpersent}
                pickpersent={props.pickpersent}
                banpersent={props.banpersent}
              />
              <div style={cStyle}>
                <CounterImage cimage={props.cimage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Card;
