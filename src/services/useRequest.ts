import { useEffect, useState } from "react";
import axios from "axios";
import { SetStateAction, Dispatch } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchRequest = async <T, D>(
  query: string,
  params: T,
  setRequestData: Dispatch<SetStateAction<D | undefined>>
) => {
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

const useRequest = <T, D>(query: string, params: T) => {
  const [requestData, setRequestData] = useState<D | undefined>();
  useEffect(() => {
    if (!requestData) {
      fetchRequest<T, D>(query, params, setRequestData);
    }
  }, [requestData, params, query]);
  return requestData;
};

export { useRequest };
