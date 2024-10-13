import { BounceLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="fixed w-full h-full inset-0 z-50 bg-white/80 flex justify-center items-center">
      <BounceLoader color="#111280" size={70} />
    </div>
  );
};
