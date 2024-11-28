import Link from "next/link";

export const Hero = () => {
  return (
    <section id="hero" className="bg-[#F5F5FA] py-24">
      <div className="space-y-6 screen text-center">
        <div className="space-y-3">
          <span className="text-[#03055E] font-semibold text-sm">Testimonials</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Why To Choose Portia.io?</h1>
        </div>
        <p className="text lg:text-xl">
          At Portia.io, we strive to deliver exceptional proxy services to our customers. Our dedication to quality and
          customer satisfaction shines through in the feedback we receive.
        </p>
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="66f53227f3776e76986a3387"
          data-style-height="52px"
          data-style-width="100%"
        >
          <Link href="https://www.trustpilot.com/review/portia.pro" target="_blank" rel="noopener">
            Trustpilot
          </Link>
          <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async />
        </div>
      </div>
    </section>
  );
};
