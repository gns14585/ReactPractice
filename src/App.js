import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
