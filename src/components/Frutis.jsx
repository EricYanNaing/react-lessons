import Fruit from "./Fuit";

// const fruits = ["mango", "banana", "orange"];
const fruits = [
  {
    name: "mango",
    price: 5,
  },
  {
    name: "banana",
    price: 3,
  },
  {
    name: "orange",
    price: 4,
  },
];
export default function Fruits() {
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </>
  );
}
