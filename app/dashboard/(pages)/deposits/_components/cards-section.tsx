import { DepositCard } from "./deposit-card";

export const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[].map((item, index) => (
        <DepositCard key={index} initialData={item} />
      ))}
    </div>
  );
};
