import { useState, useCallback } from "react";
import { toast } from "sonner";

export const REGEX_PASSWORD_AUTH =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const REGEX_PASSWORD_PROXY =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

interface UsePasswordControlProps {
  initialType?: "text" | "password";
  onPasswordGenerated?: (password: string) => void;
  passwordType?: "auth" | "proxy";
}

export const usePasswordControl = ({
  initialType = "text",
  onPasswordGenerated,
  passwordType = "auth",
}: UsePasswordControlProps = {}) => {
  const [passwordVisibility, setPasswordVisibility] = useState<
    "text" | "password"
  >(initialType);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((prev) =>
      prev === "password" ? "text" : "password"
    );
  }, []);

  const generateRandomPassword = useCallback(() => {
    const regex =
      passwordType === "auth" ? REGEX_PASSWORD_AUTH : REGEX_PASSWORD_PROXY;

    let password = "";
    const chars = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      digits: "0123456789",
      special: "@$!%*?&",
    };
    password +=
      chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)];
    password +=
      chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)];
    password += chars.digits[Math.floor(Math.random() * chars.digits.length)];
    if (passwordType === "auth") {
      password +=
        chars.special[Math.floor(Math.random() * chars.special.length)];
    }

    const allChars =
      passwordType === "auth"
        ? chars.lowercase + chars.uppercase + chars.digits + chars.special
        : chars.lowercase + chars.uppercase + chars.digits;

    while (password.length < 12) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    if (!regex.test(password)) {
      return generateRandomPassword();
    }

    onPasswordGenerated?.(password);
    return password;
  }, [onPasswordGenerated, passwordType]);

  const handleSubjectPassword = useCallback(async () => {
    try {
      const password = generateRandomPassword();
      await navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard");
      return password;
    } catch (error) {
      toast.error("Failed to generate password");
      console.error("Password error:", error);
      return null;
    }
  }, [generateRandomPassword]);

  return {
    passwordVisibility,
    togglePasswordVisibility,
    generateRandomPassword,
    handleSubjectPassword,
  };
};
