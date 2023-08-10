const semesterDays = [
	{ date: '2023-08-17', dow: 'monday', schedule: 'normal' },
	{ date: '2023-08-18', dow: 'friday', schedule: 'normal' },

	{ date: '2023-08-21', dow: 'monday', schedule: 'normal' },
	{ date: '2023-08-22', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-08-23', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-08-24', dow: 'thursday', schedule: 'midday' },

	{ date: '2023-08-28', dow: 'monday', schedule: 'normal' },
	{ date: '2023-08-29', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-08-30', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-08-31', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-09-01', dow: 'friday', schedule: 'normal' },

	{ date: '2023-09-05', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-09-06', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-09-07', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-09-08', dow: 'friday', schedule: 'normal' },

	{ date: '2023-09-11', dow: 'monday', schedule: 'normal' },
	{ date: '2023-09-12', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-09-13', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-09-14', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-09-15', dow: 'friday', schedule: 'normal' },

	{ date: '2023-09-18', dow: 'monday', schedule: 'normal' },
	{ date: '2023-09-19', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-09-20', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-09-21', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-09-22', dow: 'friday', schedule: 'normal' },

	{ date: '2023-09-25', dow: 'monday', schedule: 'normal' },
	{ date: '2023-09-26', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-09-27', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-09-28', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-09-29', dow: 'friday', schedule: 'normal' },

	{ date: '2023-10-02', dow: 'monday', schedule: 'normal' },
	{ date: '2023-10-03', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-10-04', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-10-05', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-10-06', dow: 'friday', schedule: 'normal' },

	{ date: '2023-10-10', dow: 'friday', schedule: 'normal' },
	{ date: '2023-10-11', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-10-12', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-10-13', dow: 'friday', schedule: 'normal' },

	{ date: '2023-10-16', dow: 'monday', schedule: 'normal' },
	{ date: '2023-10-17', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-10-18', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-10-19', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-10-20', dow: 'friday', schedule: 'normal' },

	{ date: '2023-10-23', dow: 'monday', schedule: 'normal' },
	{ date: '2023-10-24', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-10-25', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-10-26', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-10-27', dow: 'friday', schedule: 'normal' },

	{ date: '2023-10-30', dow: 'monday', schedule: 'normal' },
	{ date: '2023-10-31', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-11-01', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-11-02', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-11-03', dow: 'friday', schedule: 'normal' },

	{ date: '2023-11-06', dow: 'monday', schedule: 'normal' },
	{ date: '2023-11-07', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-11-08', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-11-09', dow: 'thursday', schedule: 'normal' },

	{ date: '2023-11-13', dow: 'monday', schedule: 'normal' },
	{ date: '2023-11-14', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-11-15', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-11-16', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-11-17', dow: 'friday', schedule: 'normal' },

	{ date: '2023-11-20', dow: 'monday', schedule: 'normal' },
	{ date: '2023-11-21', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-11-22', dow: 'friday', schedule: 'early' },

	{ date: '2023-11-27', dow: 'monday', schedule: 'normal' },
	{ date: '2023-11-28', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-11-29', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-11-30', dow: 'thursday', schedule: 'normal' },
	{ date: '2023-12-01', dow: 'friday', schedule: 'normal' },

	{ date: '2023-12-04', dow: 'monday', schedule: 'normal' },
	{ date: '2023-12-05', dow: 'tuesday', schedule: 'normal' },
	{ date: '2023-12-06', dow: 'wednesday', schedule: 'normal' },
	{ date: '2023-12-07', dow: 'thursday', schedule: 'normal' }
];

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
export { semesterDays, semesterPeriods };
