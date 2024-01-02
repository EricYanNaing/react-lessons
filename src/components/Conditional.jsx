export default function Conditional() {
  let message;
  const display = false;
  if (display) {
    message = <h1>This is component 1</h1>;
  } else {
    message = <h1>This is component 2</h1>;
  }
  return message;
}
