import {
  country,
  MyContent,
  MyElem,
  MyNavBar,
  text,
  value,
} from "./component/MyElem";

function App() {
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
