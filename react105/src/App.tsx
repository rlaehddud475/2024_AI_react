import React, { useState } from "react";
import Button from "./Button";
import Up from "./Up";
import Counter from "./Counter";
import Ably from "./Ably";
import Musinsa from "./Musinsa";
import Fruits from "./Fruits";

function App() {
  /* const [total, setTotal] = useState(2); */
  return (
    <div>
      {/*       <Musinsa price={20000} size={30} />
      <div>총 갯수:{total}</div> */}
      <Fruits />
    </div>
  );
}

export default App;
