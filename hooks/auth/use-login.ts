import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { login } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { setToken, setUser } from "@/utils/cookie";
export const useLogin = () => {
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginRequest) => login(data),
    onSuccess: (data) => {
      setToken(data.access_token, { expires: +data.expires_in.split(" ")[0] });
      setUser(data.data, { expires: +data.expires_in.split(" ")[0] });

      toast({
        title: "Login",
        description: data.message ?? "Login successfully",
      });

      router.push("/dashboard");
    },
    onError(error) {
      if (error instanceof AxiosError && error.response) {
        const message = error.response.data.message;
        toast({
          title: "Login",
          description: message ?? "Something went wrong!!",
        });
      }
    },
  });
};
