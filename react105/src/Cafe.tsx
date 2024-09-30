import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
  const [cafe, setCafe] = useState({
    amerikano: { amount: 0, price: 3000 },
    latte: { amount: 0, price: 4000 },
    vanila: { amount: 0, price: 4500 },
  });
  const changeAmerikano = () => {
    setCafe((prev) => {
      return {
        ...prev,
        amerikano: { amount: prev.amerikano.amount + 1, price: 1000 },
      };
    });
  };
  const changeLatte = () => {
    setCafe((prev) => {
      return {
        ...prev,
        latte: { amount: prev.latte.amount + 1, price: 1500 },
      };
    });
  };
  const changeVanila = () => {
    setCafe((prev) => {
      return {
        ...prev,
        vanila: { amount: prev.vanila.amount + 1, price: 2000 },
      };
    });
  };
  return (
    <div>
      <Coffee
        click={changeAmerikano}
        coffeeName={"아메리카노"}
        coffeeAmount={cafe.amerikano.amount}
      />
      <Coffee
        click={changeLatte}
        coffeeName={"라떼"}
        coffeeAmount={cafe.latte.amount}
      />
      <Coffee
        click={changeVanila}
        coffeeName={"바닐라"}
        coffeeAmount={cafe.vanila.amount}
      />

      <span>
        총 커피수{""}
        {cafe.amerikano.amount + cafe.latte.amount + cafe.vanila.amount}
      </span>
      <span>
        총 가격
        {""}
        {cafe.amerikano.amount * cafe.amerikano.price +
          cafe.latte.amount * cafe.latte.price +
          cafe.vanila.amount * cafe.vanila.price}
      </span>
    </div>
  );
};
export default Cafe;
