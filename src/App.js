// style 적용 방법
// 보통 css 파일
// css modul 사용
// chakraui css library

import { MyComp } from "./component/MyComp";
import { MyBox } from "./component/MyBox";
import { MyContainer } from "./component/MyContainer";

function App(props) {
  return (
    <div>
      <MyComp />
      <MyBox />
      <MyContainer />
    </div>
  );
}

export default App;
