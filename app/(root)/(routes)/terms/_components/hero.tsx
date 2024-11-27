import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Hero = () => {
  return (
    <section className="bg-[#F5F5FA] py-24 text-center space-y-10">
      <div className="space-y-6 screen">
        <div className="space-y-3">
          <span className="text-[#03055E] font-semibold text-sm">Privacy Policy</span>;
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">We care about your privacy</h1>
        </div>
        <p className="text lg:text-xl max-w-4xl mx-auto">
          Your privacy is important to us at Portia. We respect your privacy regarding any information we may collect
          from you across our website.
        </p>
      </div>
      <TabsList className="bg-[#E9E9F2] h-11 p-2">
        <TabsTrigger value="privacy-policy">Privacy Policy</TabsTrigger>
        <TabsTrigger value="terms">Terms</TabsTrigger>
      </TabsList>
    </section>
  );
};
