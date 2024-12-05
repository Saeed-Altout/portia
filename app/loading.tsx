export default function Loading() {
  return (
    <div className="z-50 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm flex-col gap-7">
      <div className="w-16 h-16 border-[6px] border-[#D4D4FF] border-l-[#111280] rounded-full animate-spin"></div>
      <p className="text-[#24242B] font-medium text-xl">Loading...</p>
    </div>
  );
}
