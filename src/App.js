import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/main1/sub6?id=" + employeeId)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [employeeId]);

  let textContext = null;

  if (employee === null) {
    textContext = <Text>다른 직원 번호를 선택하세요.</Text>;
  } else {
    textContext = (
      <Text>
        직원 이름 : {employee.lastName} {employee.firstName}
      </Text>
    );
  }

  return (
    <div>
      <Select
        placeholder="직원번호를 선택해주세요."
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {Loading && <Spinner />}
        {textContext}
      </Box>
    </div>
  );
}

export default App;
