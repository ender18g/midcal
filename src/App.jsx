import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Flex, Text, Heading, Box, Button, Image, Link, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SchedForm from './sched_form.jsx';
import crest from './assets/crest.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AnalyticsProvider, useFirebaseApp, useAnalytics } from 'reactfire';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { handleUpdate, addForm, generateEvents, removeForm } from './utils.js';
import Instructions from './instructions.jsx';
import CalIcon from './assets/calIcon.jsx';

function MyPageViewLogger() {
	const analytics = useAnalytics();

	useEffect(
		() => {
			logEvent(analytics, 'page_view', { page_location: location.href });
		},
		[ location.href ]
	);

	return null;
}

function App() {
	const initForm = {
		id: 0,
		name: '',
		location: '',
		sched: '',
		slots: []
	};

	const app = useFirebaseApp();

	const [ formsData, setFormsData ] = useState([ initForm ]);

	const [ allEvents, setAllEvents ] = useState([]);

	return (
		<AnalyticsProvider sdk={getAnalytics(app)}>
			<Box w={'100vw'} h={'100vh'}>
				<Box w={'100vw'} h={'97vh'}>
					<Flex
						px={5}
						py={2}
						justify={'space-between'}
						alignItems={'center'}
						bg={'blue.600'}
						boxShadow={'lg'}
					>
						<Box w={'100vw'} textAlign={'center'}>
							<Flex justify={'center'} align={'center'}>
								<Heading letterSpacing={7} fontWeight={100} fontSize={'3xl'} color={'white'}>
									<CalIcon />
									MidCal
								</Heading>
							</Flex>
							<Text textColor={'gray.300'} fontSize={'xs'}>
								USNA Course Calendar Generator
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

					{formsData.map((course, i) => (
						<SchedForm
							formData={formsData[i]}
							setFormData={(data) => {
								handleUpdate(data, formsData, setFormsData, setAllEvents);
							}}
							removeForm={() => {
								removeForm(formsData[i].id, formsData, setFormsData);
							}}
							key={i}
						/>
					))}
					<Flex justify={'center'}>
						<Button
							mt={2}
							colorScheme="blue"
							variant={'outline'}
							onClick={() => {
								addForm(initForm, formsData, setFormsData);
							}}
						>
							+ Add Course
						</Button>
					</Flex>

					<Flex justify={'center'}>
						<Button
							mt={2}
							colorScheme="green"
							variant={'outline'}
							onClick={() => {
								const output = generateEvents(formsData);
								setAllEvents(output);
							}}
						>
							Generate Calendar
						</Button>
					</Flex>

					<Flex mt={30} justify={'center'}>
						{allEvents.length > 0 && (
							<Box textAlign={'center'}>
								<Text fontSize={'xs'} fontWeight={600}>
									{allEvents.length} Periods Scheduled
								</Text>
								<Flex justify={'center'} mb={3}>
									<AddToCalendarButton
										name="USNA Courses"
										options={[ 'iCal' ]}
										timeZone="America/New_York"
										label="Download Calendar"
										iCalFileName="my_usna_calendar"
										dates={JSON.stringify(allEvents)}
									/>
								</Flex>
								<Link
									color={'blue.600'}
									href="https://calendar.google.com/calendar/u/0/r/settings/export"
									isExternal
								>
									Click Here to Import the downloaded calendar to Google<ExternalLinkIcon mx="2px" />
								</Link>
							</Box>
						)}
					</Flex>

					<Instructions />
				</Box>
			</Box>
			<MyPageViewLogger />
		</AnalyticsProvider>
	);
}

export default App;
