import { useState, useCallback } from "react";
import { toast } from "sonner";

interface UsePasswordControlProps {
  initialType?: "text" | "password";
  onPasswordGenerated?: (password: string) => void;
}

export const usePasswordControl = ({
  initialType = "text",
  onPasswordGenerated,
}: UsePasswordControlProps = {}) => {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    initialType
  );

  const togglePasswordVisibility = useCallback(() => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }, []);

  const generateRandomPassword = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    onPasswordGenerated?.(password);
    return password;
  }, [onPasswordGenerated]);

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
    passwordType,
    togglePasswordVisibility,
    generateRandomPassword,
    handleSubjectPassword,
  };
};
