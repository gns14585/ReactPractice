import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("api/main1/sub2")
      .then((response) => response.data)
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
