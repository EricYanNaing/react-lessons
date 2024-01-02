export default function Fruit({ name, price, soldOut }) {
  return (
    <>
      {price < 5 ? (
        <li>
          {name} {price} {soldOut ? "Soldout" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
