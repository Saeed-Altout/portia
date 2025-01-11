import { TabsContent } from "@/components/ui/tabs";
import { privacyPolicy, termsOfUse } from "@/constants/constants";

export const Content = () => {
  return (
    <section id="content" className="screen py-24">
      <div className="max-w-[800px] mx-auto">
        <TabsContent value="privacy-policy" className="space-y-12">
          {privacyPolicy.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text !text-lg">{item.description}</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="terms" className="space-y-12">
          {termsOfUse.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text !text-lg">{item.description}</p>
            </div>
          ))}
        </TabsContent>
      </div>
    </section>
  );
};
