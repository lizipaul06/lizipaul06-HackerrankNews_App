import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const request = async (query, body) => {
  const response = await await axios.get(`${BASE_URL}/${query}`, {
    params: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const useRequest = (query, params) => {
  const [requestData, setRequestData] = useState();
  useEffect(() => {
    const fetchRequest = async () => {
      const body = {
        ...params,
        apiKey: API_KEY,
      };
      const response = await request(query, body);
      setRequestData(response);
    };
    if (!requestData) {
      fetchRequest();
    }
  }, [requestData, params]);
  return requestData;
};

export { useRequest };
