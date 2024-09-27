import { CSSProperties } from "react";

export type ChampionImageProps = {
  image: string;
};

const ChampionImage = (props: ChampionImageProps) => {
  const championStyle: CSSProperties = {
    borderRadius: "10px",
    width: "32px",
    height: "32px",
    display: "flex",
    flexDirection: "column",
    objectFit: "cover",
    maxWidth: "130px",
  };
  return (
    <div style={championStyle}>
      <img
        style={{ width: "100%", height: "100%", maxWidth: "100%" }}
        src={props.image}
        alt=""
      />
    </div>
  );
};
export default ChampionImage;
