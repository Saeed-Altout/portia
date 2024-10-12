import { toast } from "sonner";

export const onCopy = (
  inputRef: React.RefObject<HTMLInputElement>,
  http: string
) => {
  if (inputRef.current) {
    navigator.clipboard.writeText(`${http}://${inputRef.current.value}`);
    toast.success("Affiliate link copied to clipboard.");
  }
};
