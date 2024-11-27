import { useMutation } from "@tanstack/react-query";

import { login } from "@/api";
import { useResponse } from "@/hooks";
import { setToken, setUser } from "@/utils/cookie";
export const useLogin = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginRequest) => login(data),
    onSuccess: (data) => {
      setToken(data.access_token, { expires: +data.expires_in.split(" ")[0] });
      setUser(data.data, { expires: +data.expires_in.split(" ")[0] });
      Success({ message: data.message, redirectTo: "/dashboard" });
    },
    onError(error) {
      Error({ error: error, message: "Something went wrong!" });
    },
  });
};
