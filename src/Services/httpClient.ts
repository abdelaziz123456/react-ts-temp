import { BASE_URL_LIST } from "./baseUrls";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: BASE_URL_LIST.DummyUrl,
});
