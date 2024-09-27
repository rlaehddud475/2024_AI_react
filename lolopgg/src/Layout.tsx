import { CSSProperties } from "react";
import Card from "./Card";
import { championRankingList } from "./data";

const Layout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section
        style={{
          width: "100%",
          maxWidth: "760px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          borderBottom: "1px solid black",
        }}
      >
        {championRankingList.map((v, i) => (
          <Card
            rank={v.positionTierData.rank}
            elevetion={5}
            image={v.image_url}
            name={v.name}
            tier={v.positionTierData.tier}
            pimage={
              "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925"
            }
            position={v.positionName}
            winpersent={v.positionWinRate * 100}
            pickpersent={v.positionPickRate * 100}
            banpersent={v.positionBanRate * 100}
            cimage={v.image_url}
          />
        ))}
      </section>
    </main>
  );
};
export default Layout;
