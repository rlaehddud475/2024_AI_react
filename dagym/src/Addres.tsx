import { CSSProperties } from "react";
export type AddressProps = { address: string };
const Address = (props: AddressProps) => {
  const addresStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    fontWeight: "bold",
  };
  return <span style={addresStyle}>{props.address}</span>;
};
export default Address;
