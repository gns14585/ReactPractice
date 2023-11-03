function App(props) {
  const number = Math.ceil(Math.random() * 100);
  const isLarge = number > 50;

  return (
    <div>
      <h1>난수 : {number}</h1>
      <h1>{number > 50 ? "큰 수 " : "작은 수"}</h1>
      <h1>{number > 50 ? <BigImage /> : <SmallImage />}</h1>
      <div>{isLarge && <h1>큰 수</h1>}</div>
      <div>{isLarge || <h1>작은 수</h1>}</div>
    </div>
  );
}
function BigImage() {
  return (
    <div>
      <h1>큰 이미지</h1>
    </div>
  );
}

function SmallImage() {
  return (
    <div>
      <h1>작은 이미지</h1>
    </div>
  );
}

export default App;
