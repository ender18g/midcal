// make a function that generates an array of objects for each day of the semester
// each object should have a date, day of week, and schedule type
// schedule type should be one of the following: normal, early, midday

const generateDays = (startDate, endDate) => {
	const days = [];
	//console.log(startDate);
	let currentDate = new Date(startDate.replace(/-/g, '/'));
	while (currentDate <= new Date(endDate.replace(/-/g, '/'))) {
		const newItem = {
			date: currentDate.toISOString().slice(0, 10),
			dow: currentDate.toLocaleString('en-us', { weekday: 'long' } ),
			schedule: 'normal'
		};
		// if not a weekend, add it to the array
		if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
			days.push(newItem);
		}

		currentDate.setDate(currentDate.getDate() + 1);
	}
	//console.log(days);
	return days;
};

const semesterPeriods = {
	normal: [
		{ period: '1', startTime: '07:55', endTime: '08:45' },
		{ period: '2', startTime: '08:55', endTime: '09:45' },
		{ period: '3', startTime: '09:55', endTime: '10:45' },
		{ period: '4', startTime: '10:55', endTime: '11:45' },
		{ period: '5', startTime: '13:30', endTime: '14:20' },
		{ period: '6', startTime: '14:30', endTime: '15:20' },
		{ period: '7', startTime: '15:30', endTime: '16:20' },
		{ period: '8', startTime: '07:55', endTime: '09:10' },
		{ period: '9', startTime: '09:55', endTime: '11:10' },
		{ period: '0', startTime: '13:30', endTime: '14:45'}
	],
	early: [
		{ period: '1', startTime: '06:55', endTime: '07:45' },
		{ period: '2', startTime: '07:55', endTime: '08:45' },
		{ period: '3', startTime: '08:55', endTime: '09:45' },
		{ period: '4', startTime: '09:55', endTime: '10:45' },
		{ period: '5', startTime: '10:55', endTime: '11:45' },
		{ period: '6', startTime: '11:55', endTime: '12:45' },
		{ period: '7', startTime: '12:55', endTime: '13:45' },
		{ period: '8', startTime: '06:55', endTime: '08:10' },
		{ period: '9', startTime: '08:55', endTime: '10:10' },
		{ period: '0', startTime: '10:55', endTime: '12:10'}
	],
	midday: [
		{ period: '1', startTime: '07:55', endTime: '08:45' },
		{ period: '2', startTime: '08:55', endTime: '09:45' },
		{ period: '3', startTime: '09:55', endTime: '10:45' },
		{ period: '4', startTime: '10:55', endTime: '11:45' },
		{ period: '5', startTime: '11:55', endTime: '12:45' },
		{ period: '6', startTime: '12:55', endTime: '13:45' },
		{ period: '7', startTime: '13:55', endTime: '14:45' },
		{ period: '8', startTime: '07:55', endTime: '09:10' },
		{ period: '9', startTime: '09:55', endTime: '11:10' },
		{ period: '0', startTime: '11:55', endTime: '13:10'}
	]
};

const semesterDays = [
	{"date":"2024-08-19","dow":"Monday","schedule":"normal"},
	{"date":"2024-08-20","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-08-21","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-08-22","dow":"Thursday","schedule":"normal"},
	{"date":"2024-08-23","dow":"Friday","schedule":"normal"},
	{"date":"2024-08-26","dow":"Monday","schedule":"normal"},
	{"date":"2024-08-27","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-08-28","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-08-29","dow":"Thursday","schedule":"normal"},
	{"date":"2024-08-30","dow":"Friday","schedule":"normal"},
	//{"date":"2024-09-02","dow":"Monday","schedule":"normal"}, LABOR DAY
	{"date":"2024-09-03","dow":"Monday","schedule":"normal"}, // Monday 
	{"date":"2024-09-04","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-09-05","dow":"Thursday","schedule":"normal"},
	{"date":"2024-09-06","dow":"Friday","schedule":"normal"},
	{"date":"2024-09-09","dow":"Monday","schedule":"normal"},
	{"date":"2024-09-10","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-09-11","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-09-12","dow":"Thursday","schedule":"normal"},
	{"date":"2024-09-13","dow":"Friday","schedule":"normal"},
	{"date":"2024-09-16","dow":"Monday","schedule":"normal"},
	{"date":"2024-09-17","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-09-18","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-09-19","dow":"Thursday","schedule":"normal"},
	{"date":"2024-09-20","dow":"Friday","schedule":"normal"},
	{"date":"2024-09-23","dow":"Monday","schedule":"normal"},
	{"date":"2024-09-24","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-09-25","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-09-26","dow":"Thursday","schedule":"normal"},
	{"date":"2024-09-27","dow":"Friday","schedule":"normal"},
	{"date":"2024-09-30","dow":"Monday","schedule":"normal"},
	{"date":"2024-10-01","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-10-02","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-10-03","dow":"Thursday","schedule":"normal"},
	{"date":"2024-10-04","dow":"Friday","schedule":"normal"},
	{"date":"2024-10-07","dow":"Monday","schedule":"normal"},
	{"date":"2024-10-08","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-10-09","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-10-10","dow":"Thursday","schedule":"normal"},
	{"date":"2024-10-11","dow":"Friday","schedule":"normal"},
	//{"date":"2024-10-14","dow":"Monday","schedule":"normal"}, COLUMBUS DAY
	{"date":"2024-10-15","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-10-16","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-10-17","dow":"Thursday","schedule":"normal"},
	{"date":"2024-10-18","dow":"Friday","schedule":"normal"},
	{"date":"2024-10-21","dow":"Monday","schedule":"normal"},
	{"date":"2024-10-22","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-10-23","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-10-24","dow":"Thursday","schedule":"normal"},
	{"date":"2024-10-25","dow":"Friday","schedule":"normal"},
	{"date":"2024-10-28","dow":"Monday","schedule":"normal"},
	{"date":"2024-10-29","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-10-30","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-10-31","dow":"Thursday","schedule":"normal"},
	{"date":"2024-11-01","dow":"Friday","schedule":"normal"},
	{"date":"2024-11-04","dow":"Monday","schedule":"normal"},
	{"date":"2024-11-05","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-11-06","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-11-07","dow":"Thursday","schedule":"normal"},
	{"date":"2024-11-08","dow":"Friday","schedule":"normal"},
	//{"date":"2024-11-11","dow":"Monday","schedule":"normal"}, VETERANS DAY
	{"date":"2024-11-12","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-11-13","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-11-14","dow":"Thursday","schedule":"normal"},
	{"date":"2024-11-15","dow":"Friday","schedule":"normal"},
	{"date":"2024-11-18","dow":"Monday","schedule":"normal"},
	{"date":"2024-11-19","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-11-20","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-11-21","dow":"Thursday","schedule":"normal"},
	{"date":"2024-11-22","dow":"Friday","schedule":"normal"},
	{"date":"2024-11-25","dow":"Monday","schedule":"normal"},
	{"date":"2024-11-26","dow":"Tuesday","schedule":"midday"},// Midday
	//{"date":"2024-11-27","dow":"Wednesday","schedule":"normal"},
	//{"date":"2024-11-28","dow":"Thursday","schedule":"normal"},
	//{"date":"2024-11-29","dow":"Friday","schedule":"normal"},
	{"date":"2024-12-02","dow":"Monday","schedule":"normal"},
	{"date":"2024-12-03","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-12-04","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-12-05","dow":"Thursday","schedule":"normal"},
	{"date":"2024-12-06","dow":"Friday","schedule":"normal"},
	{"date":"2024-12-09","dow":"Monday","schedule":"normal"},
]


export { semesterDays,  semesterPeriods, generateDays };
