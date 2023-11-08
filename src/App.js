import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerIdList, setCustomerIdList] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/main1/sub7")
      .then((response) => setCustomerIdList(response.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => setCustomer(null))
      .finally(() => setIsLoading(false));
  }, [customerId]); // 페이지를 첫 로딩할때도 생성되고, 번호를 바꿔도 생성됨

  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerIdList.map((id) => (
          <option value={id}>{id}</option> // component가 첫 로딩될때만 가져오면됨(useEffect)
        ))}
      </Select>
      <Box>
        {isLoading && <Spinner />}
        {isLoading || (
          <>
            {customer === null ? (
              <Text>조회한 고객이 없습니다.</Text>
            ) : (
              <Text>고객 이름 : {customer.name}</Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
