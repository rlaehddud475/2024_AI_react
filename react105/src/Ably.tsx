import { CSSProperties, useState } from "react";
type AblyType = {
  name: string;
  price: number;
};
const Ably = (prop: AblyType) => {
  const [quantity, setQuantity] = useState(1);
  const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    border: "1px solid gray",
    width: "500px",
    justifyContent: "space-between",
  };

  const quantityUp = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };
  const quantityDown = () => {
    setQuantity((prev) => {
      if (quantity == 1) {
        return quantity;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <div style={boxStyle}>
      <button onClick={quantityDown}>-</button>
      <span>{quantity}</span>
      <button onClick={quantityUp}>+</button>
      <span>{prop.name}</span>
      <span>{prop.price * quantity}원</span>
    </div>
  );
};
export default Ably;
