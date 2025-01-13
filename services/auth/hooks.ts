import { useMutation } from "@tanstack/react-query";
import { clear, setEmail, setToken, setUser } from "@/lib/cookie";
import {
  login,
  loginWithGoogle,
  logout,
  register,
  resendVerificationCode,
  sendResetEmail,
  setNewPassword,
  verificationCode,
} from "@/services/auth";
import { useResponse } from "@/hooks/use-response";
import { ROUTES } from "@/config/constants";

export const useLoginMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginCredentials) => login(data),
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

export const useLoginWithGoogleMutation = () => {
  const { Error } = useResponse();
  return useMutation({
    mutationKey: ["login-with-google"],
    mutationFn: () => loginWithGoogle(),
    onError: (error) => {
      Error({ error, message: "Login with google is failed." });
    },
  });
};

export const useLogoutMutation = () => {
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

export const useRegisterMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (values: RegisterCredentials) => register(values),
    onSuccess(data, req) {
      setEmail(req.email);
      Success({
        message: data.message || "Register is Success.",
        redirectTo: `${ROUTES.VERIFY_EMAIL_CONFIRM}?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Register is failed." });
    },
  });
};

export const useResendVerificationCodeMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["resend-verification-code"],
    mutationFn: (values: ResendVerificationCodeCredentials) =>
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

export const useSendResetEmailMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["send-reset-email"],
    mutationFn: (values: SendResetEmailCredentials) => sendResetEmail(values),
    onSuccess(data, req) {
      Success({
        message: data.message || "Send your email is Success.",
        redirectTo: `${ROUTES.VERIFY_RESET_EMAIL}?email=${req.email}`,
      });
    },
    onError(error) {
      Error({ error, message: "Send your email is failed." });
    },
  });
};

export const useSetNewPasswordMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["set-new-password"],
    mutationFn: (values: SetNewPasswordCredentials) => setNewPassword(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Set new password is Success.",
        redirectTo: ROUTES.PASSWORD_RESET,
      });
    },
    onError(error) {
      Error({ error, message: "Sent new password is failed." });
    },
  });
};

export const useVerifyCodeMutation = () => {
  const { Success, Error } = useResponse();
  return useMutation({
    mutationKey: ["verification-code"],
    mutationFn: (values: VerificationCodeCredentials) =>
      verificationCode(values),
    onSuccess(data) {
      setToken(data.access_token);
      Success({
        message: data.message || "Verify code is success.",
        redirectTo: ROUTES.EMAIL_CONFIRMED,
      });
    },
    onError(error) {
      Error({ error, message: "Verify code is failed." });
    },
  });
};
