import { CSSProperties } from "react";

export type CategoryListProps = {
  categories: string;
};
const CategoryList = (props: CategoryListProps) => {
  const categoryStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "20px",
    gap: "10px  ",
  };
  return <span style={categoryStyle}>{props.categories}</span>;
};
export default CategoryList;
