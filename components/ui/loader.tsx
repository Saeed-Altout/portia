import { BeatLoader } from "react-spinners";

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Loader = ({ className }: LoaderProps) => {
  return <BeatLoader size={12} color="#ffffff" className={className} />;
};
