import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="h-[492px] w-full bg-[#F5F5FA]">
      <div className="space-y-5 flex-1 text-center flex items-center justify-center flex-col h-full max-w-3xl mx-auto">
        <p className="text-primary font-semibold">Privacy Policy</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          We care about your privacy
        </h1>
        <p className="text-xl leading-8">
          Your privacy is important to us at Portia. We respect your privacy
          regarding any information we may collect from you across our website.
        </p>
        <div className="bg-[#E9E9F2] p-1.5 rounded-[8px] space-x-2">
          <Button variant="ghost" className="bg-white text-lg">
            Human-friendly
          </Button>
          <Button
            variant="ghost"
            className="text-gray-primary text-lg bg-transparent hover:bg-transparent"
          >
            Legal nonsense
          </Button>
        </div>
      </div>
    </div>
  );
};
