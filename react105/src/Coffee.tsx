type CoffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};
const Coffee = (props: CoffeeProps) => {
  return (
    <span onClick={props.click}>
      {props.coffeeName}: {props.coffeeAmount}
    </span>
  );
};
export default Coffee;
