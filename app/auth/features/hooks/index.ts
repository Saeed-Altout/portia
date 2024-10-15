import { useHandleResponse } from "./error/use-handle-response";

import { useLogin } from "./login/use-login";
import { useLoginMutation } from "./login/use-login-mutation";

import { useRegister } from "./register/use-register";
import { useRegisterMutation } from "./register/use-register-mutation";

import { useVerifyCode } from "./verify-code/use-verify-code";
import { useVerifyCodeMutation } from "./verify-code/use-verify-code-mutation";

import { useSetNewPassword } from "./set-new-password/use-set-new-password";
import { useSetNewPasswordMutation } from "./set-new-password/use-set-new-password-mutation";

import { useSendResetEmail } from "./send-reset-email/use-send-reset-email";
import { useSendResetEmailMutation } from "./send-reset-email/use-send-reset-email-mutation";

import { useResendVerificationCode } from "./resend-verification-code/use-resend-verification-code";
import { useResendVerificationCodeMutation } from "./resend-verification-code/use-resend-verification-code-mutation";

import { useLoginWithGoogle } from "./login-with-google/use-login-with-google";
import { useLoginWithGoogleMutation } from "./login-with-google/use-login-with-google-mutation";

import { useLogout } from "./logout/use-logout";
import { useLogoutMutation } from "./logout/use-logout-mutation";

export {
  useHandleResponse,
  useLogin,
  useLoginMutation,
  useRegister,
  useRegisterMutation,
  useVerifyCode,
  useVerifyCodeMutation,
  useSetNewPassword,
  useSetNewPasswordMutation,
  useSendResetEmail,
  useSendResetEmailMutation,
  useResendVerificationCode,
  useResendVerificationCodeMutation,
  useLoginWithGoogle,
  useLoginWithGoogleMutation,
  useLogout,
  useLogoutMutation,
};
