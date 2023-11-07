import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    axios
      .get("/api/main1/sub4")
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>{employee.id}</h1>
      <h1>{employee.lastName}</h1>
      <h1>{employee.firstName}</h1>
      <h1>{employee.photo}</h1>
      <h1>{employee.notes}</h1>
      <h1>{employee.birthDate}</h1>
    </div>
  );
}

export default App;
