import { useMutation } from "@tanstack/react-query";

import { login } from "@/api";
import { useResponse } from "@/hooks";
import { setToken, setUser } from "@/utils/cookie";
export const useLogin = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginRequest) => login(data),
  });
};
