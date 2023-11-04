import address, { city } from "./component/MyElem";
import MyContainer, { country, person } from "./component/MyBox";

function App(props) {
  return (
    <div>
      <h1>{city}</h1>
      <h1>{address}</h1>
      <MyContainer />
      <h1>
        {person.name}, {person.age}
      </h1>
      <h1>{country}</h1>
    </div>
  );
}

export default App;
