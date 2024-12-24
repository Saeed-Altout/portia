export const loginWithGoogle = async (): Promise<void> => {
  try {
    location.href =
      process.env.NEXT_PUBLIC_API_URL! +
      process.env.NEXT_PUBLIC_LOGIN_WITH_GOOGLE!;
  } catch (error) {
    throw error;
  }
};
