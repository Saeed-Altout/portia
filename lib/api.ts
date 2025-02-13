import axios, { AxiosError } from "axios";
import { clear, getToken } from "@/lib/cookie";

const MESSAGE_ERROR =
  "Maintenance Mode: The site is currently in maintenance mode";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (request) => {
    const token = getToken();
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },

  async (err: AxiosError<{ message?: string }>) => {
    const status = err.response?.status;
    const message = err.response?.data?.message as string;
    switch (status) {
      case 400:
        console.error(
          "Bad Request: The server could not understand the request."
        );
        break;

      case 401:
        clear();
        localStorage.clear();
        location.assign("/auth/login");
        break;

      case 403:
        console.error(
          "Forbidden: You do not have permission to access this resource."
        );
        break;

      case 404:
        console.error("Not Found: The requested resource could not be found.");
        break;

      case 405:
        console.error("Method Not Allowed: The HTTP method is not allowed.");
        break;

      case 408:
        console.error(
          "Request Timeout: The request took too long to complete."
        );
        break;

      case 429:
        console.error(
          "Too Many Requests: You have sent too many requests in a given amount of time."
        );
        break;

      case 500:
        if (message === MESSAGE_ERROR) {
          location.assign("/server-error");
        }
        break;

      case 502:
        console.error(
          "Bad Gateway: Invalid response from the upstream server."
        );
        break;

      case 503:
        console.error(
          "Service Unavailable: The server is temporarily unavailable."
        );
        break;

      case 504:
        console.error("Gateway Timeout: The server took too long to respond.");
        break;

      default:
        console.error("An unexpected error occurred.");
        break;
    }

    return Promise.reject(err);
  }
);
