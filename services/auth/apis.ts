import { apiClient } from "@/lib/api";
export const loginWithGoogle = async (): Promise<void> => {
  try {
    location.href =
      process.env.NEXT_PUBLIC_API_URL! +
      process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE!;
  } catch (error) {
    throw error;
  }
};
export const login = async (values: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_LOGIN!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<ILogoutRequestResponse> => {
  try {
    const response = await apiClient.get(process.env.NEXT_PUBLIC_LOGOUT!);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (
  values: IRegisterRequest
): Promise<IRegisterResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_REGISTER!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const resendVerificationCode = async (
  values: IResendVerificationCodeRequest
): Promise<IResendVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_RESEND_VERIFICATION_CODE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendResetEmail = async (
  values: ISendResetEmailRequest
): Promise<ISendResetEmailResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_SEND_RESET_EMAIL!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const setNewPassword = async (
  values: ISetNewPasswordRequest
): Promise<ISetNewPasswordResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_SET_NEW_PASSWORD_ENDPOINT!,
      {
        password: values.password,
        password_confirmation: values.password_confirmation,
      },
      { headers: { Authorization: `Bearer ${values.token}` } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const verificationCode = async (
  values: IVerificationCodeRequest
): Promise<IVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(
      process.env.NEXT_PUBLIC_VERIFY_CODE!,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
