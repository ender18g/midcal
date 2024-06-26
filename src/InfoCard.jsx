import { Flex, Card, CardBody, Image, Divider, CardFooter, Stack, Text, Heading, Link } from '@chakra-ui/react';
import Instructions from './instructions';

import schedScreen from './assets/schedScreen.png';

export default function InfoCard() {
	const link = 'https://www.usna.edu/Academics/Calendars-Events/index.php';
	return (

		<Flex>
			<Card maxW="sm">
				<CardBody>
					<Link href={link} isExternal>
						<Image
							src={schedScreen}
							alt="USNA Schedule Page"
							borderRadius="lg"
							_hover={{ filter: 'brightness(1.05)' }}
						/>
					</Link>
					<Stack mt="6" spacing="3">
						<Heading letterSpacing={1.5} fontWeight={400} size="sm">
							How MidCal Works
						</Heading>
						<Text fontSize={'xs'}>
							MidCal generates a calendar that contains all of your class periods. It adheres to the
							official USNA Academic Calendar and handles Thursdays that are on a Monday Schedule, early
							class schedules, USNA holidays, and more.
						</Text>
						<Text color="blue.600" fontSize="sm">
							<Link href={link} isExternal>
								Currently Generating Fall AY 2025 Calendars
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
