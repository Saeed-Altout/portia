import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { pricingData } from '@website/constants';
import { Table, Header, Body, Footer, Row, Cell, Icon, Text, CustomCell, CustomRow, Head } from './table';

export const Content = () => {
	return (
		<section className='max-container section'>
			<Table className='hidden md:table'>
				<Header>
					<Row className='border-b'>
						<Head></Head>
						{pricingData.map((plan, index) => (
							<Head key={index}>
								<div className='pb-4 flex items-center justify-start gap-x-2'>
									<h3 className='text-lg font-semibold'>{plan.name}</h3>
									{plan.isPopular && (
										<span className='bg-[#D4D4FF] px-[14px] py-[3px] rounded-full text-sm font-medium'>
											Popular
										</span>
									)}
								</div>
							</Head>
						))}
					</Row>
					<Row>
						<Head></Head>
						{pricingData.map((plan, index) => (
							<Head key={index}>
								<div className='space-y-4'>
									<h3 className='font-semibold text-4xl md:text-5xl text-left'>
										{plan.price}
										<span className='text-base font-medium text-gray-primary ml-2 tracking-wide text-nowrap'>
											per month
										</span>
									</h3>
									<p className='text-sm font-normal text-left'>{plan.description}</p>
								</div>
								<Button className='w-full' asChild>
									<Link href={plan.url}>Get started</Link>
								</Button>
							</Head>
						))}
					</Row>
				</Header>
				<Body>
					<CustomCell title='Overview' className='pt-12' />
					<CustomRow title='Basic Features' className='bg-[#F5F5FA]'>
						{pricingData.map(({ overview }, index) => (
							<Icon key={index} isActive={overview.basic_features} />
						))}
					</CustomRow>
					<CustomRow title='Users'>
						{pricingData.map(({ overview }, index) => (
							<Text key={index}>{overview.users}</Text>
						))}
					</CustomRow>
					<CustomRow title='Individual Data' className='bg-[#F5F5FA]'>
						{pricingData.map(({ overview }, index) => (
							<Text key={index}>{overview.Individual_data}</Text>
						))}
					</CustomRow>
					<CustomRow title='Support'>
						{pricingData.map(({ overview }, index) => (
							<Icon key={index} isActive={overview.support} />
						))}
					</CustomRow>
					<CustomRow title='Automated Workflows' className='bg-[#F5F5FA]'>
						{pricingData.map(({ overview }, index) => (
							<Icon key={index} isActive={overview.automated_workflows} />
						))}
					</CustomRow>
					<CustomRow title='200+ Integrations' className='border-b'>
						{pricingData.map(({ overview }, index) => (
							<Icon key={index} isActive={overview.integrations} />
						))}
					</CustomRow>
					<CustomCell title='Reporting and analytics' />
					<CustomRow title='Analytics' className='bg-[#F5F5FA]'>
						{pricingData.map(({ analytics }, index) => (
							<Text key={index}>{analytics.analytics}</Text>
						))}
					</CustomRow>
					<CustomRow title='Export reports'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.export_reports} />
						))}
					</CustomRow>
					<CustomRow title='Scheduled reports' className='bg-[#F5F5FA]'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.scheduled_reports} />
						))}
					</CustomRow>
					<CustomRow title='API access'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.API_access} />
						))}
					</CustomRow>
					<CustomRow title='Advanced reports' className='bg-[#F5F5FA]'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.advanced_reports} />
						))}
					</CustomRow>
					<CustomRow title='Saved reports'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.saved_reports} />
						))}
					</CustomRow>
					<CustomRow title='Customer properties' className='bg-[#F5F5FA]'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.customer_properties} />
						))}
					</CustomRow>
					<CustomRow title='Custom fields' className='border-b'>
						{pricingData.map(({ analytics }, index) => (
							<Icon key={index} isActive={analytics.custom_fields} />
						))}
					</CustomRow>
					<CustomCell title='User access' />
					<CustomRow title='SSO/SAML authentication' className='bg-[#F5F5FA]'>
						{pricingData.map(({ user_access }, index) => (
							<Icon key={index} isActive={user_access.sso_saml} />
						))}
					</CustomRow>
					<CustomRow title='Advanced permissions'>
						{pricingData.map(({ user_access }, index) => (
							<Icon key={index} isActive={user_access.advanced_permissions} />
						))}
					</CustomRow>
					<CustomRow title='Audit log' className='bg-[#F5F5FA]'>
						{pricingData.map(({ user_access }, index) => (
							<Icon key={index} isActive={user_access.audit_log} />
						))}
					</CustomRow>
					<CustomRow title='Data history' className='border-b'>
						{pricingData.map(({ user_access }, index) => (
							<Icon key={index} isActive={user_access.data_history} />
						))}
					</CustomRow>
				</Body>
				<Footer>
					<Row className='block md:table-row'>
						<Cell className='p-4 md:table-cell'></Cell>
						<Cell className='p-4 text-center md:table-cell'>
							<div className='flex flex-col gap-4'>
								<Button className='w-full'>Get Started</Button>
								<Button className='w-full' variant='outline'>
									Contact Sales
								</Button>
							</div>
						</Cell>
						<Cell className='p-4 text-center md:table-cell'>
							<div className='flex flex-col gap-4'>
								<Button className='w-full'>Get Started</Button>
								<Button className='w-full' variant='outline'>
									Contact Sales
								</Button>
							</div>
						</Cell>
						<Cell className='p-4 text-center md:table-cell'>
							<div className='flex flex-col gap-4 py-10'>
								<Button className='w-full'>Get Started</Button>
								<Button className='w-full' variant='outline'>
									Contact Sales
								</Button>
							</div>
						</Cell>
					</Row>
				</Footer>
			</Table>

			{pricingData.map((plan, index) => (
				<Table key={index} className='w-full block md:hidden'>
					<Header>
						<Row className='border-b'>
							<Head>
								<div className='flex items-center justify-start gap-x-2 py-4'>
									<h3 className='text-lg font-semibold'>{plan.name}</h3>
									{plan.isPopular && (
										<span className='bg-[#D4D4FF] px-[14px] py-[3px] rounded-full text-sm font-medium'>
											Popular
										</span>
									)}
								</div>
							</Head>
						</Row>
						<Row>
							<Head>
								<div className='font-semibold text-4xl md:text-5xl text-left'>
									{plan.price}
									<span className='text-base font-medium text-gray-primary ml-2 tracking-wide text-nowrap'>
										per month
									</span>
								</div>
								<p className='text-sm font-normal text-left'>{plan.description}</p>
								<div className='w-full'>
									<Button className='w-full'>Get started</Button>
								</div>
							</Head>
						</Row>
					</Header>
					<Body>
						<CustomCell title='Overview' />
						<CustomRow title='Basic Features' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.overview.basic_features} />
						</CustomRow>
						<CustomRow title='Users'>
							<Text>{plan.overview.users}</Text>
						</CustomRow>
						<CustomRow title='Individual Data' className='bg-[#F5F5FA]'>
							<Text>{plan.overview.Individual_data}</Text>
						</CustomRow>
						<CustomRow title='Support'>
							<Icon isActive={plan.overview.support} />
						</CustomRow>
						<CustomRow title='Automated Workflows' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.overview.automated_workflows} />
						</CustomRow>
						<CustomRow title='200+ Integrations'>
							<Icon isActive={plan.overview.integrations} />
						</CustomRow>
						<CustomCell title='Reporting and analytics' className='border-t' />
						<CustomRow title='Analytics' className='bg-[#F5F5FA]'>
							<Text>{plan.analytics.analytics}</Text>
						</CustomRow>
						<CustomRow title='Export reports'>
							<Icon isActive={plan.analytics.export_reports} />
						</CustomRow>
						<CustomRow title='Scheduled reports' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.analytics.scheduled_reports} />
						</CustomRow>
						<CustomRow title='API access'>
							<Icon isActive={plan.analytics.API_access} />
						</CustomRow>
						<CustomRow title='Advanced reports' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.analytics.advanced_reports} />
						</CustomRow>
						<CustomRow title='Saved reports'>
							<Icon isActive={plan.analytics.saved_reports} />
						</CustomRow>
						<CustomRow title='Customer properties' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.analytics.customer_properties} />
						</CustomRow>
						<CustomRow title='Custom fields'>
							<Icon isActive={plan.analytics.custom_fields} />
						</CustomRow>
						<CustomCell title='User access' className='border-t' />
						<CustomRow title='SSO/SAML authentication' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.user_access.sso_saml} />
						</CustomRow>
						<CustomRow title='Advanced permissions'>
							<Icon isActive={plan.user_access.advanced_permissions} />
						</CustomRow>
						<CustomRow title='Audit log' className='bg-[#F5F5FA]'>
							<Icon isActive={plan.user_access.audit_log} />
						</CustomRow>
						<CustomRow title='Data history'>
							<Icon isActive={plan.user_access.data_history} />
						</CustomRow>
					</Body>
					<Footer>
						<Row>
							<Cell className='block'>
								<div className='flex flex-col gap-4 w-full pt-10'>
									<Button className='w-full'>Get Started</Button>
									<Button className='w-full' variant='outline'>
										Contact Sales
									</Button>
								</div>
							</Cell>
						</Row>
					</Footer>
				</Table>
			))}
		</section>
	);
};
