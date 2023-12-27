const name = "zyn";

function displaymessage(data) {
  return data;
}

function Hello({ person }) {
  return (
    <h1>
      {person.message}! {person.name} , {person.seatnumbers}
    </h1>
  );
}
export default Hello;
