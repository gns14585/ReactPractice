import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeIdList, setEmployeeIdList] = useState([]);
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/main1/sub8")
      .then((response) => setEmployeeIdList(response.data));
  }, []);

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
        {employeeIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {Loading && <Spinner />}
        {textContext}
      </Box>
    </div>
  );
}

export default App;
