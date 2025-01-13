import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const loginWithGoogle = async (): Promise<void> => {
  try {
    location.href =
      process.env.NEXT_PUBLIC_API_URL! +
      process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE!;
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<LogoutResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.LOGOUT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (
  values: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.LOGIN, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  values: RegisterCredentials
): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.REGISTER, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resendVerificationCode = async (
  values: ResendVerificationCodeCredentials
): Promise<ResendVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(
      ENDPOINTS.RESEND_VERIFICATION_CODE,
      values
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendResetEmail = async (
  values: SendResetEmailCredentials
): Promise<SendResetEmailResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.SEND_RESET_EMAIL, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setNewPassword = async (
  values: SetNewPasswordCredentials
): Promise<SetNewPasswordResponse> => {
  try {
    const response = await apiClient.post(
      ENDPOINTS.SET_NEW_PASSWORD,
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
  values: VerificationCodeCredentials
): Promise<VerificationCodeResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.VERIFY_CODE, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
