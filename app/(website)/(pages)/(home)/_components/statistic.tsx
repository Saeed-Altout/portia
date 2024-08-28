import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { statisticData } from "@/app/(website)/constants";

export const Statistic = () => {
  return (
    <section className="max-container section">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* TODO: Update data from API */}
        {statisticData.map(({ value, name, description }, index) => (
          <Card key={index} className="shadow-none border-none">
            <CardHeader className="px-0">
              <CardTitle className="text-primary font-semibold text-5xl lg:text-6xl">
                {value}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 px-0">
              <h3 className="font-medium text-lg">{name}</h3>
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
