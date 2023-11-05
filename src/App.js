import React from "react";

function App(props) {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }
  return (
    <div>
      <a href="http://www.daum.net" onClick={handleClick}>
        다음으로 이동
      </a>
    </div>
  );
}

export default App;
