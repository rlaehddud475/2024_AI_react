import { useState } from "react";

const Button = () => {
  const [food, setFood] = useState("마라탕");
  const change = () => {
    setFood((prev) => {
      return prev + "후루 사주세요 선배!";
    });
  };

  return <button onClick={change}>{food}</button>;
};
export default Button;
