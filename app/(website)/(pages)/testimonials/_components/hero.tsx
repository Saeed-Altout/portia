import { Button } from '@/components/ui/button';

export const Hero = () => {
	return (
		<div className='h-[492px] w-full bg-[#F5F5FA]'>
			<div className='space-y-5 flex-1 text-center flex items-center justify-center flex-col h-full max-w-4xl mx-auto'>
				<p className='text-primary font-semibold'>Testimonials</p>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>What Our Customers Say About Us !!</h1>
				<p className='text-xl leading-8'>
					At Portia.io, we strive to deliver exceptional proxy services to our customers. Our dedication to quality
					and customer satisfaction shines through in the feedback we receive.
				</p>
				<div className='space-x-3'>
					<Button variant='outline'>Visit Trustpilot</Button>
					<Button>Write Review</Button>
				</div>
			</div>
		</div>
	);
};
