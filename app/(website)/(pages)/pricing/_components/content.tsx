import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Content = () => {
	return (
		<Section>
			<Container>
				<div className='offer-table'>
					<div className='offer-table-column'>
						<div className='offer-table-head'>
							<div className='offer-table-head-info'>
								<h3 className='offer-table-head-info-name'>Basic</h3>
								{true && <span className='offer-table-head-info-popular'>Popular</span>}
							</div>
							<div className='offer-table-head-content'>
								<h3 className='offer-table-head-content-price'>
									20
									<span className='offer-table-head-content-plan'>per month</span>
								</h3>
								<p className='offer-table-head-content-description'>
									Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing
								</p>
								<Button className='w-full' asChild>
									<Link href='/'>Get started</Link>
								</Button>
							</div>
						</div>
						<div className='offer-table-body'>
							<ul className='offer-table-group-features'>
								<li className='offer-table-cell-data' />
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
							</ul>
							<ul className='offer-table-group-features'>
								<li className='offer-table-cell-data' />
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
							</ul>
							<ul className='offer-table-group-features'>
								<li className='offer-table-cell-data' />
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
								<li className='offer-table-cell-data'>feature1</li>
							</ul>
						</div>
						<div className='table-footer py-6 px-4'>
							<div className='flex flex-col gap-y-3'>
								<Button className='w-full'>Get Started</Button>
								<Button className='w-full' variant='outline'>
									Contact Sales
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

{
	/* <td key={index} className="px-6 py-5 text-center">
{plan.overview.basic_features ? (
  <span className="text-[#26A6A4] bg-[#B5F7F6] block rounded-full w-6 h-6 mx-auto p-[2px]">
    ✔
  </span>
) : (
  "━"
)}
</td> */
}

{
	/* <td key={index} className="px-6 pb-4 pt-12" /> */
}

// <td key={index} className="px-6 py-5 text-center text-gray-500">
// {plan.overview.users}
// </td>
