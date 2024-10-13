import { OfferCard } from "./offer-card";

export const Table = ({ filter, data }: { filter: any; data: any[] }) => {
  return (
    <div className="grid gap-4">
      {data?.some(
        (pkg) =>
          pkg.name === filter.pkgName &&
          pkg.plans.some(
            (plan: { plan_name: any; offers: string | any[] }) =>
              plan.plan_name === filter.planName && plan.offers.length > 0
          )
      ) ? (
        data
          ?.filter((pkg) => pkg.name === filter.pkgName)
          ?.flatMap((pkg) =>
            pkg.plans
              ?.filter(
                (plan: { plan_name: any }) => plan.plan_name === filter.planName
              )
              ?.flatMap((plan: { offers: any[] }) =>
                plan.offers.map((offer, index) => (
                  <OfferCard
                    key={index}
                    offer={offer}
                    fill={
                      filter.pkgName == "Basic"
                        ? "primary"
                        : filter.pkgName == "Standard"
                        ? "danger"
                        : "muted"
                    }
                    theme={
                      filter.pkgName == "Basic"
                        ? "primary"
                        : filter.pkgName == "Standard"
                        ? "danger"
                        : "muted"
                    }
                  />
                ))
              )
          )
      ) : (
        <p>No offers available for this plan.</p>
      )}
    </div>
  );
};
