import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import CalIcon from './assets/calIcon';
import crest from './assets/crest.png';

export default function TitleBar() {
	return (
		<Flex px={5} py={2} justify={'space-between'} alignItems={'center'} bg={'blue.700'} boxShadow={'lg'}>
			<Box w={'100vw'} textAlign={'center'}>
				<Flex justify={'center'} align={'center'}>
					<Heading letterSpacing={7} fontWeight={100} fontSize={'4xl'} color={'white'}>
						<CalIcon />
						MidCal
					</Heading>
				</Flex>
				<Text textColor={'gray.300'} fontSize={'xs'}>
					USNA Class Period Calendar Generator
				</Text>

				<Text mt={0} fontSize={'7px'} textColor={'gray.300'}>
					Created by Allan Elsberry
				</Text>
			</Box>
			<Link href="https://www.usna.edu/Academics/Calendars-Events/index.php" isExternal>
				<Flex textAlign={'center'} justifyContent={'center'} align={'center'} flexWrap={'wrap'}>
					<Image src={crest} alt={'USNA Crest'} w={'2.5em'} />
				</Flex>
			</Link>
		</Flex>
	);
}
