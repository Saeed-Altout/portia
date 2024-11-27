import { BeatLoader } from "react-spinners";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
  label: string;
}

export const SubmitButton = ({ isLoading, label }: SubmitButtonProps) => {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? <BeatLoader color="#fff" size={12} /> : label}
    </Button>
  );
};
