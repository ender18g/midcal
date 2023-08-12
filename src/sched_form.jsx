import { Flex, Input, Box, FormControl, FormLabel, Button, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

function SchedForm(props) {
	const { formData, setFormData, removeForm } = { ...props };

	const generateSlots = (text) => {
		// take in something like MWF1R12 and split to [{day: M, periods: [1]}, {day: W, periods: [1]}, {day: F, periods: [1]} day: R, periods: [1,2]}]
		const slots = [];
		const days = {
			M: 'monday',
			T: 'tuesday',
			W: 'wednesday',
			R: 'thursday',
			F: 'friday'
		};

		// use regex to split into matches with day and periods
		const pattern = /([MTWRF]+)[A-Z]*(\d+)/g;

		const matches = [ ...text.matchAll(pattern) ];

		matches.forEach((match) => {
			const letters = match[1];
			const digits = match[2];
			// for each letter, add a slot
			letters.split('').forEach((letter) => {
				slots.push({
					day: days[letter],
					periods: digits.split('')
				});
			});
		});

		setFormData({ ...formData, slots: slots });
	};

	useEffect(
		() => {
			generateSlots(formData.sched);
		},
		[ formData.sched ]
	);

	return (
		<Flex my={2} justify={'center'}>
			<Box maxW={'800px'} bg="gray.50" p={3} borderRadius={'lg'} boxShadow={'md'}>
				<Flex justify={'center'}>
					<Text letterSpacing={1.5} fontWeight={300}>
						Course {formData.id + 1}
					</Text>
					<Button ml={3} colorScheme="red" variant={'outline'} size={'xs'} onClick={removeForm}>
						<DeleteIcon />
					</Button>
				</Flex>
				<FormControl isRequired>
					<Flex my={1} justify={'space-between'} align={'center'}>
						<FormLabel fontSize={'sm'}>Name</FormLabel>

						<Input
							size={'sm'}
							w={'200px'}
							placeholder="EW200 Section 1121"
							value={formData.name}
							onChange={(e) => {
								setFormData({ ...formData, name: e.target.value });
							}}
						/>
					</Flex>
				</FormControl>

				<FormControl isRequired>
					<Flex my={1} justify={'space-between'} align={'center'}>
						<FormLabel fontSize={'sm'}>Location</FormLabel>
						<Input
							size={'sm'}
							w={'200px'}
							value={formData.location}
							placeholder="Hopper 017"
							onChange={(e) => {
								setFormData({ ...formData, location: e.target.value });
							}}
						/>
					</Flex>
				</FormControl>

				<FormControl isRequired>
					<Flex my={1} justify={'space-between'} align={'center'}>
						<FormLabel fontSize={'sm'}>Schedule</FormLabel>
						<Input
							size={'sm'}
							w={'200px'}
							value={formData.sched}
							onChange={(e) => {
								setFormData({ ...formData, sched: e.target.value.toUpperCase() });
							}}
							placeholder="MWF1R12"
						/>
					</Flex>
				</FormControl>
			</Box>
		</Flex>
	);
}

export default SchedForm;
