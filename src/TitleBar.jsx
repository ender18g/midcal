import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import CalIcon from './assets/calIcon';
import crest from './assets/crest.png';

export default function TitleBar() {
	return (
		<Flex px={5} py={2} justify={'space-between'} alignItems={'center'} bg={'blue.700'} boxShadow={'lg'}>
			<Box w={'100vw'} textAlign={'center'}>
				<Flex justify={'center'} align={'center'}>
					<Heading letterSpacing={7} fontWeight={100} fontSize={'3xl'} color={'white'}>
						<CalIcon />
						MidCal
					</Heading>
				</Flex>
				<Text textColor={'gray.300'} fontSize={'xs'}>
					USNA Class Period Calendar Generator
				</Text>
				<Text fontSize={'7px'} textColor={'gray.300'}>
					{/* Created by Allan Elsberry */}
				</Text>
			</Box>
			<Box>
				<Link href={'https://www.usna.edu/Academics/Calendars-Events/index.php'} isExternal>
					<Image src={crest} alt={'USNA Crest'} w={'2em'} />
				</Link>
			</Box>
		</Flex>
	);
}
