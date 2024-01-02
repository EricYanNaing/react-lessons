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
          <li key={fruit.name}>
            {fruit.name} = {fruit.price} $
          </li>
        ))}
      </ul>
    </>
  );
}
