import Fruit from "./Fuit";

// const fruits = ["mango", "banana", "orange"];
const fruits = [
  {
    name: "mango",
    price: 5,
    soldOut: false,
  },
  {
    name: "banana",
    price: 3,
    soldOut: true,
  },
  {
    name: "orange",
    price: 4,
    soldOut: false,
  },
];
export default function Fruits() {
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            soldOut={fruit.soldOut}
            name={fruit.name}
            price={fruit.price}
          />
        ))}
      </ul>
    </>
  );
}
