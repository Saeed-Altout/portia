import { useMutation, useQuery } from "@tanstack/react-query";
import { clear, setEmail, setToken, setUser } from "@/lib/cookie";
import { useResponse } from "@/hooks/use-response";
import {
  login,
  loginWithGoogle,
  logout,
  register,
  resendVerificationCode,
  sendResetEmail,
  setNewPassword,
  verificationCode,
} from "./apis";
export const useLogin = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILoginRequest) => login(data),
    onSuccess: (data) => {
      setToken(data.access_token, { expires: +data.expires_in.split(" ")[0] });
      setUser(data.data, { expires: +data.expires_in.split(" ")[0] });
      Success({ message: data.message || "Login is Success." });

      location.reload();
    },
    onError(error) {
      Error({ error, message: "Login is failed." });
    },
  });
};

export const useLoginWithGoogle = () => {
  const { Error } = useResponse();
  return useMutation({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
    onError: (error) => {
      Error({ error, message: "Login with google is failed." });
    },
  });
};

export const useLogout = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess(data) {
      Success({ message: data.message || "Logout is Success." });
      clear();
      localStorage.clear();
      location.reload();
    },
    onError(error) {
      Error({ error, message: "logout is failed." });
    },
  });
};

export const useRegister = () => {
  const { Success, Error } = useResponse();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (values: IRegisterRequest) => register(values),
    onSuccess(data, req) {
      setEmail(req.email);
      Success({
        message: data.message || "Register is Success.",
        redirectTo: `/auth/verify-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Register is failed." });
    },
  });
};

export const useResendVerificationCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["resend-verification-code"],
    mutationFn: (values: IResendVerificationCodeRequest) =>
      resendVerificationCode(values),
    onSuccess: (data) => {
      Success({
        message: data.message || "Resend verification code is Success.",
      });
    },
    onError: (error) => {
      Error({ error, message: "Resend verification code is failed." });
    },
  });
};

export const useSendResetEmail = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["send-reset-email"],
    mutationFn: (values: ISendResetEmailRequest) => sendResetEmail(values),
    onSuccess(data, req) {
      Success({
        message: data.message || "Send your email is Success.",
        redirectTo: `/auth/verify-reset-email?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Send your email is failed." });
    },
  });
};

export const useSetNewPassword = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["set-new-password"],
    mutationFn: (values: ISetNewPasswordRequest) => setNewPassword(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Set new password is Success.",
        redirectTo: "/auth/password-reset",
      });
    },
    onError(error) {
      Error({ error, message: "Sent new password is failed." });
    },
  });
};

export const useVerifyCode = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["verification-code"],
    mutationFn: (values: IVerificationCodeRequest) => verificationCode(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Verify code is success.",
        redirectTo: "/auth/email-confirmed",
      });
    },
    onError(error) {
      Error({ error, message: "Verify code is failed." });
    },
  });
};
