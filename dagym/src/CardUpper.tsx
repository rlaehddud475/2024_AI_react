import { CSSProperties } from "react";
import CategoryList, { CategoryListProps } from "./CategoryList";
import GymName, { GymNameProps } from "./Gymname";
import Reviews, { ReviewsProps } from "./Reviews";
import StarRate, { StarRateProps } from "./StarRate";
import Album, { AlbumProps } from "./Album";
import Address, { AddressProps } from "./Addres";
import Price, { priceProps } from "./Price";
import Tag, { Tagprops } from "./Tag";
export type CardUpperProps = AlbumProps &
  CategoryListProps &
  GymNameProps &
  Tagprops &
  ReviewsProps &
  StarRateProps &
  priceProps &
  AddressProps;
const CardUpper = (props: CardUpperProps) => {
  const CardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };
  const rightStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "90%",
  };
  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div style={CardUpperStyle}>
      <Album image={props.image} />
      <div style={rightStyle}>
        <CategoryList categories={props.categories} />
        <GymName gymName={props.gymName} />
        <div style={infoStyle}>
          <StarRate starRate={props.starRate} />
          <Reviews reviews={props.reviews} />
          <Address address={props.address} />
          <div style={eventStyle}>
            <Tag text={props.text} />
            <Price price={props.price} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardUpper;
