import { BeatLoader } from "react-spinners";

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Loader = ({ className }: LoaderProps) => {
  return <BeatLoader size={12} color="#ffffff" className={className} />;
};

export const CircleLoader = () => {
  return (
    <div className="py-52 flex items-center justify-center flex-col gap-7">
      <div className="w-16 h-16 border-[6px] border-[#D4D4FF] border-l-[#111280] rounded-full animate-spin" />
      <p className="text-[#24242B] font-medium text-xl">Loading...</p>
    </div>
  );
};
