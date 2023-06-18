import { httpClient } from "./httpClient";

const queryDummyService = () => {
  return httpClient.get("/expenses.json/");
};

export default queryDummyService;
