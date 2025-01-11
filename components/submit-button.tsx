import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";

interface SubmitButtonProps {
  isLoading: boolean;
  label: string;
}

export const SubmitButton = ({ isLoading, label }: SubmitButtonProps) => {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? <Loader /> : label}
    </Button>
  );
};
