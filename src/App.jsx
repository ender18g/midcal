import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { Flex, Text, Heading, Box, Button, OrderedList, ListItem, Stack, Image, Link } from '@chakra-ui/react';
import { semesterDays, semesterPeriods } from './data.js';
import { useState } from 'react';
import SchedForm from './sched_form.jsx';
import crest from './assets/crest.png';

function App() {
	const initForm = {
		id: 0,
		name: '',
		location: '',
		sched: '',
		slots: []
	};

	const [ formsData, setFormsData ] = useState([ initForm ]);

	const [ allEvents, setAllEvents ] = useState([]);

	const [ showInstructions, setShowInstructions ] = useState(false);

	const addForm = () => {
		const newForm = { ...initForm, id: formsData.length };
		setFormsData([ ...formsData, newForm ]);
	};

	const handleUpdate = (form) => {
		// clear the past generation data
		setAllEvents([]);
		// map over formsData and update the form with the matching id
		setFormsData(
			formsData.map((f) => {
				if (f.id === form.id) {
					return form;
				} else {
					return f;
				}
			})
		);
	};

	const removeForm = (id) => {
		setFormsData(formsData.filter((f) => f.id !== id));
	};

	// generate the events
	const generateEvents = (formsData) => {
		// make empty event array
		const events = [];
		// loop over formsData
		formsData.forEach((course) => {
			// get the course name
			const name = course.name; // got the name
			const location = course.location; // got the location
			// loop over slots (slot is a day and period array)
			course.slots.forEach((slot) => {
				const day = slot.day;
				const periods = slot.periods;
				// loop over semesterDays
				semesterDays.forEach((semesterDay) => {
					// if the day matches
					if (semesterDay.dow === day) {
						// it's a match
						const startDate = semesterDay.date; // got the date
						// get the schedule type
						const schedType = semesterDay.schedule;
						// loop over semesterPeriods
						semesterPeriods[schedType].forEach((semesterPeriod) => {
							const periodNumber = semesterPeriod.period;
							// loop over the periods array
							periods.forEach((period) => {
								// if the period matches
								if (periodNumber === period) {
									// it's a match
									const startTime = semesterPeriod.startTime;
									const endTime = semesterPeriod.endTime;
									// create an event object
									const event = { name, location, startDate, startTime, endTime };
									// push the event object into the events array
									events.push(event);
								}
							});
						});
					}
				});
			});
		});
		// return the events array
		console.log(events);
		return events;
	};

	return (
		<Box w={'100vw'} h={'100vh'}>
			<Box w={'100vw'} h={'97vh'}>
				<Flex px={5} py={2} justify={'space-between'} alignItems={'center'} bg={'blue.600'} boxShadow={'lg'}>
					<Box w={'100vw'} textAlign={'center'}>
						<Heading letterSpacing={7} fontWeight={200} fontSize={'3xl'} color={'white'}>
							📅 MidCal
						</Heading>
						<Text textColor={'gray.300'} fontSize={'xs'}>
							USNA Course Calendar Generator
						</Text>
					</Box>
					<Box>
						<Link href={'https://www.usna.edu/Academics/Calendars-Events/index.php'} isExternal>
							<Image src={crest} alt={'USNA Crest'} h={'50'} />
						</Link>
					</Box>
				</Flex>

				{formsData.map((course, i) => (
					<SchedForm
						formData={formsData[i]}
						setFormData={(data) => {
							handleUpdate(data);
						}}
						removeForm={() => {
							removeForm(formsData[i].id);
						}}
						key={i}
					/>
				))}
				<Flex justify={'center'}>
					<Button mt={2} colorScheme="blue" variant={'outline'} onClick={addForm}>
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
						<AddToCalendarButton
							name="USNA Courses"
							options={[ 'iCal' ]}
							timeZone="America/New_York"
							label="Download Calendar"
							iCalFileName="my_usna_calendar"
							dates={JSON.stringify(allEvents)}
						/>
					)}
				</Flex>

				<Flex justify={'center'}>
					<Stack>
						<Button
							colorScheme="blue"
							mt={2}
							onClick={() => {
								setShowInstructions(!showInstructions);
							}}
						>
							Instructions
						</Button>
						<Box
							bg="red.100"
							m={2}
							p={5}
							borderRadius={'lg'}
							w={'400px'}
							textAlign={'center'}
							boxShadow={'md'}
							display={showInstructions ? 'block' : 'none'}
						>
							<OrderedList>
								<ListItem>Input Course Information</ListItem>
								<ListItem>Select Generate Calendar</ListItem>
								<ListItem>Select Download Calendar -> iCal File</ListItem>
								<ListItem>Go to your Google Calendar </ListItem>
								<ListItem>Click the + sign next to "Other Calendars"</ListItem>
								<ListItem>Select "Import"</ListItem>
								<ListItem>Select the iCal file you downloaded</ListItem>
								<ListItem>Click "Import"</ListItem>
							</OrderedList>
						</Box>
					</Stack>
				</Flex>
			</Box>
			<Flex justify={'center'}>
				<Text color={'gray.600'} fontSize={'sm'}>
					Created by Allan Elsberry
				</Text>
			</Flex>
		</Box>
	);
}

export default App;
