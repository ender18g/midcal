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
		{ period: '9', startTime: '09:55', endTime: '11:10' }
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
		{ period: '9', startTime: '08:55', endTime: '10:10' }
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
		{ period: '9', startTime: '09:55', endTime: '11:10' }
	]
};

const semesterDays = [
	{"date":"2024-01-09","dow":"Monday","schedule":"normal"},
	{"date":"2024-01-10","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-01-11","dow":"Thursday","schedule":"normal"},
	{"date":"2024-01-12","dow":"Friday","schedule":"normal"},
	//{"date":"2024-01-15","dow":"Monday","schedule":"normal"},
	{"date":"2024-01-16","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-01-17","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-01-18","dow":"Thursday","schedule":"normal"},
	{"date":"2024-01-19","dow":"Friday","schedule":"normal"},
	{"date":"2024-01-22","dow":"Monday","schedule":"normal"},
	{"date":"2024-01-23","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-01-24","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-01-25","dow":"Thursday","schedule":"normal"},
	{"date":"2024-01-26","dow":"Friday","schedule":"normal"},
	{"date":"2024-01-29","dow":"Monday","schedule":"normal"},
	{"date":"2024-01-30","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-01-31","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-02-01","dow":"Thursday","schedule":"normal"},
	{"date":"2024-02-02","dow":"Friday","schedule":"normal"},
	{"date":"2024-02-05","dow":"Monday","schedule":"normal"},
	{"date":"2024-02-06","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-02-07","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-02-08","dow":"Thursday","schedule":"normal"},
	{"date":"2024-02-09","dow":"Friday","schedule":"normal"},
	{"date":"2024-02-12","dow":"Monday","schedule":"normal"},
	{"date":"2024-02-13","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-02-14","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-02-15","dow":"Thursday","schedule":"normal"}, 
	{"date":"2024-02-16","dow":"Friday","schedule":"normal"},
	//{"date":"2024-02-19","dow":"Monday","schedule":"normal"},
	{"date":"2024-02-20","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-02-21","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-02-22","dow":"Thursday","schedule":"normal"},
	{"date":"2024-02-23","dow":"Friday","schedule":"normal"},
	{"date":"2024-02-26","dow":"Monday","schedule":"normal"},
	{"date":"2024-02-27","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-02-28","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-02-29","dow":"Thursday","schedule":"normal"},
	{"date":"2024-03-01","dow":"Friday","schedule":"normal"},
	{"date":"2024-03-04","dow":"Monday","schedule":"normal"},
	{"date":"2024-03-05","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-03-06","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-03-07","dow":"Thursday","schedule":"normal"},
	{"date":"2024-03-08","dow":"Friday","schedule":"midday"}, //no midday break
	//{"date":"2024-03-11","dow":"Monday","schedule":"normal"},
	//{"date":"2024-03-12","dow":"Tuesday","schedule":"normal"},
	//{"date":"2024-03-13","dow":"Wednesday","schedule":"normal"},
	//{"date":"2024-03-14","dow":"Thursday","schedule":"normal"},
	//{"date":"2024-03-15","dow":"Friday","schedule":"normal"},
	{"date":"2024-03-18","dow":"Monday","schedule":"normal"},
	{"date":"2024-03-19","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-03-20","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-03-21","dow":"Thursday","schedule":"normal"},
	{"date":"2024-03-22","dow":"Friday","schedule":"normal"},
	{"date":"2024-03-25","dow":"Monday","schedule":"normal"},
	{"date":"2024-03-26","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-03-27","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-03-28","dow":"Thursday","schedule":"normal"},
	{"date":"2024-03-29","dow":"Friday","schedule":"normal"},
	{"date":"2024-04-01","dow":"Monday","schedule":"normal"},
	{"date":"2024-04-02","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-04-03","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-04-04","dow":"Thursday","schedule":"normal"},
	{"date":"2024-04-05","dow":"Friday","schedule":"normal"},
	{"date":"2024-04-08","dow":"Monday","schedule":"normal"},
	{"date":"2024-04-09","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-04-10","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-04-11","dow":"Thursday","schedule":"normal"},
	{"date":"2024-04-12","dow":"Friday","schedule":"normal"},
	{"date":"2024-04-15","dow":"Monday","schedule":"normal"},
	{"date":"2024-04-16","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-04-17","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-04-18","dow":"Thursday","schedule":"normal"},
	{"date":"2024-04-19","dow":"Friday","schedule":"normal"},
	{"date":"2024-04-22","dow":"Monday","schedule":"normal"},
	{"date":"2024-04-23","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-04-24","dow":"Wednesday","schedule":"normal"},
	{"date":"2024-04-25","dow":"Thursday","schedule":"normal"},
	{"date":"2024-04-26","dow":"Friday","schedule":"normal"},
	{"date":"2024-04-29","dow":"Monday","schedule":"normal"},
	{"date":"2024-04-30","dow":"Tuesday","schedule":"normal"},
	{"date":"2024-05-01","dow":"Wednesday","schedule":"normal"},
]


export { semesterDays,  semesterPeriods, generateDays };
