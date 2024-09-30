import exp from "constants";
import { useState } from "react";
import Fruit from "./Fruit";

const Fruits = () => {
  const [fruit, setFruit] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });
  const changeApple = () => {
    setFruit((prev) => {
      return { ...prev, apple: { amount: prev.apple.amount + 1, price: 1000 } };
    });
  };
  const changeBanana = () => {
    setFruit((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 1, price: 1500 },
      };
    });
  };
  const changeOrange = () => {
    setFruit((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div>
      <Fruit
        click={changeApple}
        fruitName={"사과"}
        fruitAmount={fruit.apple.amount}
      />
      <Fruit
        click={changeBanana}
        fruitName={"바나나"}
        fruitAmount={fruit.banana.amount}
      />
      <Fruit
        click={changeOrange}
        fruitName={"오렌지"}
        fruitAmount={fruit.orange.amount}
      />

      <span>
        총 과일수{""}
        {fruit.apple.amount + fruit.banana.amount + fruit.orange.amount}
      </span>
      <span>
        총 가격
        {""}
        {fruit.apple.amount * fruit.apple.price +
          fruit.banana.amount * fruit.banana.price +
          fruit.orange.amount * fruit.orange.price}
      </span>
    </div>
  );
};
export default Fruits;
