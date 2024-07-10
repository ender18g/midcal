import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Flex, Text, Box, Button, Link, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SchedForm from './sched_form.jsx';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AnalyticsProvider, useFirebaseApp, useAnalytics } from 'reactfire';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { handleUpdate, addForm, generateEvents, removeForm } from './utils.js';
import Instructions from './instructions.jsx';
import TitleBar from './TitleBar.jsx';
import InfoCard from './InfoCard.jsx';
import DayJSON from './DayJSON.jsx';
import YoutubeCard from './YoutubeCard.jsx';


function MyPageViewLogger() {
	const analytics = useAnalytics();

	useEffect(
		() => {
			logEvent(analytics, 'page_view', { page_location: location.href });
		},
		[location.href]
	);

	return null;
}

function App() {
	const initForm = {
		id: 0,
		name: '',
		location: '',
		description: '',
		sched: '',
		slots: []
	};

	const app = useFirebaseApp();
	const [formsData, setFormsData] = useState([initForm]);
	const [allEvents, setAllEvents] = useState([]);
	const [seeJSON, setSeeJSON] = useState(false);

	return (
		<AnalyticsProvider sdk={getAnalytics(app)}>
			<Box w={'100%'} h={'100vh'}>
				<Box w={'100%'} h={'97vh'}>
					<TitleBar />
					<Flex m='3' justify={'center'}>
						<Heading size={'md'} color={'red.600'} fontWeight={'300'}>Now Generating Fall AY 2025 Calendars</Heading>
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
							size={'sm'}
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
							size={'sm'}
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
						{allEvents.length > 0 ? (
							<Box textAlign={'center'}>
								<Text fontSize={'xs'} fontWeight={600}>
									{allEvents.length} Periods Scheduled
								</Text>
								<Flex justify={'center'} mb={3}>
									<AddToCalendarButton
										name="USNA Courses"
										options={['iCal']}
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
									Click Here to Import your downloaded calendar to Google<ExternalLinkIcon mx="2px" />
								</Link>
								<Instructions />
							</Box>
						) : (
							// <InfoCard />
							<Box></Box>
						)}

					</Flex>
					<Flex justify={'center'}>
							<YoutubeCard />
					</Flex>
					<Flex justify={'center'} m='3' >

						<Button colorScheme={'gray'} variant={'ghost'} size={'xs'} onClick={() => { setSeeJSON(!seeJSON) }}>View JSON</Button>
					</Flex>
					{seeJSON && <DayJSON />}
				</Box>
			</Box>
			<MyPageViewLogger />
		</AnalyticsProvider>
	);
}

export default App;
