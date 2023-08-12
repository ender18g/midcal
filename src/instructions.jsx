import { Flex, Stack, Button, Box, OrderedList, ListItem, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Instructions() {
	const [ showInstructions, setShowInstructions ] = useState(false);
	return (
		<Flex justify={'center'}>
			<Box>
				<Button
					colorScheme="red"
					variant={'outline'}
					size={'sm'}
					mt={2}
					onClick={() => {
						setShowInstructions(!showInstructions);
					}}
				>
					Instructions
				</Button>
				<Stack>
					<Box
						bg="red.50"
						m={2}
						p={3}
						borderRadius={'lg'}
						textAlign={'center'}
						boxShadow={'md'}
						display={showInstructions ? 'block' : 'none'}
					>
						<OrderedList>
							<ListItem>Enter Your Course Information</ListItem>
							<ListItem>
								Select <strong> Generate Calendar </strong>
							</ListItem>
							<ListItem>
								Select <strong>Download Calendar</strong>
							</ListItem>
							<ListItem>
								<Link
									fontWeight={600}
									color={'blue.600'}
									href="https://calendar.google.com/calendar/u/0/r/settings/export"
									isExternal
								>
									Visit the Google Calendar Import Page<ExternalLinkIcon mx="2px" />
								</Link>
							</ListItem>

							<ListItem>
								Import the <strong>my_usna_calendar.ics</strong> file you downloaded
							</ListItem>
						</OrderedList>
						<Text mt={3} fontSize={'xs'} fontWeight={600}>
							Note: Each period will be imported as an individual event (not a recurring event) in your
							Google Calendar
						</Text>
					</Box>
				</Stack>
			</Box>
		</Flex>
	);
}
