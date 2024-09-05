import { Section } from '@website/_components/ui/section';
import { Container } from '@website/_components/ui/container';

import { TableMain } from './table-main';
import { TableMobile } from './table-mobile';

export const Content = () => {
	return (
		<Section space='wide'>
			<Container size='wide'>
				<TableMain />
				<TableMobile />
			</Container>
		</Section>
	);
};
