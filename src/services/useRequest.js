import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchRequest = async (query, params, setRequestData) => {
  const response = await axios.get(`${BASE_URL}/${query}`, {
    params: {
      ...params,
      apiKey: API_KEY,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  setRequestData(response.data);
};

const useRequest = (query, params) => {
  const [requestData, setRequestData] = useState();
  useEffect(() => {
    if (!requestData) {
      fetchRequest(query, params, setRequestData);
    }
  }, [requestData, params]);
  return requestData;
};

export { useRequest };
