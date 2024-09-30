// Login
import { useLoginMutation } from './login/use-login-mutation';
import { useLogin } from './login/use-login';

// Register
import { useRegisterMutation } from './register/use-register-mutation';
import { useRegister } from './register/use-register';

// Verify Code
import { useVerifyCodeMutation } from './verify-code/use-verify-code-mutation';
import { useVerifyCode } from './verify-code/use-verify-code';

// Send Reset Email
import { useSendResetEmailMutation } from './send-reset-email/use-send-reset-email-mutation';
import { useSendResetEmail } from './send-reset-email/use-send-reset-email';

// Set New Password
import { useSetNewPasswordMutation } from './set-new-password/use-set-new-password-mutation';
import { useSetNewPassword } from './set-new-password/use-set-new-password';

// Login with google
import { useLoginWithGoogleMutation } from './login-with-google/use-login-with-google';
import { useLogoutMutation } from './logout/use-logout';

export {
	useLoginMutation,
	useLogin,
	useRegister,
	useRegisterMutation,
	useVerifyCodeMutation,
	useVerifyCode,
	useSendResetEmailMutation,
	useSendResetEmail,
	useSetNewPasswordMutation,
	useSetNewPassword,
	useLoginWithGoogleMutation,
	useLogoutMutation,
};
