import { Flex, Card, CardBody, Image, Divider, CardFooter, Stack, Text, Heading, Link } from '@chakra-ui/react';
import Instructions from './instructions';

import schedScreen from './assets/schedScreen.png';

export default function InfoCard() {
	const link = 'https://www.usna.edu/Academics/_files/documents/calendars/241e1.pdf';
	return (
		<Flex>
			<Card maxW="sm">
				<CardBody>
					<Link href={link} isExternal>
						<Image src={schedScreen} alt="USNA Schedule Page" borderRadius="lg" />
					</Link>
					<Stack mt="6" spacing="3">
						<Heading letterSpacing={1.5} fontWeight={400} size="sm">
							How MidCal Works
						</Heading>
						<Text fontSize={'xs'}>
							MidCal generates a calendar that contains all of your class periods. It adheres to the
							offical USNA Academic Term Calendar and handles Thursdays that are on a Monday Schedule, no
							midday break class schedules, USNA holidays, and more.
						</Text>
						<Text color="blue.600" fontSize="sm">
							<Link href={link} isExternal>
								Currently Generating Fall 2023 Calendars
							</Link>
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<Instructions />
				</CardFooter>
			</Card>
		</Flex>
	);
}
