const name = "zyn";

function displaymessage(data) {
  return data;
}

function Hello(props) {
  return (
    <h1>
      {props.message}! {props.name}
    </h1>
  );
}
export default Hello;
