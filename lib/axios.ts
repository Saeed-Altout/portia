import axios, { AxiosError } from "axios";
import localStorage from "@/services/local-storage-service";

export const _axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const HttpRequestInterceptor = () => {
  _axios.interceptors.request.use(
    async (request) => {
      const token = localStorage.getAccessToken();
      if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }

      return request;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export const HttpResponseInterceptor = () => {
  _axios.interceptors.response.use(
    (res) => {
      return res;
    },

    async (err: AxiosError) => {
      const status = err.response?.status;
      switch (status) {
        case 400:
          console.error(
            "Bad Request: The server could not understand the request."
          );
          break;

        case 401:
          console.error(
            "Unauthorized: You need to login to access this resource."
          );
          window.location.href = "/login";
          break;

        case 403:
          console.error(
            "Forbidden: You do not have permission to access this resource."
          );
          break;

        case 404:
          console.error(
            "Not Found: The requested resource could not be found."
          );
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
          console.error(
            "Internal Server Error: Something went wrong on the server."
          );
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
          console.error(
            "Gateway Timeout: The server took too long to respond."
          );
          break;

        default:
          console.error("An unexpected error occurred.");
          break;
      }

      return Promise.reject(err);
    }
  );
};
