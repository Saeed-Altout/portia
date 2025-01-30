import { apiClient } from "@/lib/api";
import { ENDPOINTS } from "@/config/constants";

export const loginWithGoogle = async (referred_by?: string): Promise<void> => {
  try {
    if (referred_by) {
      location.href = `${process.env.NEXT_PUBLIC_API_URL!}${process.env
        .NEXT_PUBLIC_LOGIN_WITH_GOOGLE!}?referred_by=${referred_by}`;
    } else {
      location.href = `${process.env.NEXT_PUBLIC_API_URL!}${process.env
        .NEXT_PUBLIC_LOGIN_WITH_GOOGLE!}`;
    }
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<ILogoutResponse> => {
  try {
    const response = await apiClient.get(ENDPOINTS.LOGOUT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (
  values: ILoginCredentials
): Promise<ILoginResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.LOGIN, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  values: IRegisterCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post(ENDPOINTS.REGISTER, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resendVerificationCode = async (
  values: IResendVerificationCodeCredentials
): Promise<RootResponse<null>> => {
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
  values: ISendResetEmailCredentials
): Promise<RootResponse<null>> => {
  try {
    const response = await apiClient.post(ENDPOINTS.SEND_RESET_EMAIL, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setNewPassword = async (
  values: ISetNewPasswordCredentials
): Promise<ISetNewPasswordResponse> => {
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
  values: IVerificationCodeCredentials
): Promise<IVerificationCodeResponse> => {
  try {
    const response = await apiClient.post(ENDPOINTS.VERIFY_CODE, values);
    return response.data;
  } catch (error) {
    throw error;
  }
};
