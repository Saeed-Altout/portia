import { _axios } from "@/lib/axios";

export const logout = async (): Promise<void> => {
  try {
    await _axios.get(process.env.NEXT_PUBLIC_LOGOUT_ENDPOINT!);
  } catch (error) {
    throw error;
  }
};
