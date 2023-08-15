import { semesterDays, semesterPeriods } from './data';

const handleUpdate = (form, formsData, setFormsData, setAllEvents) => {
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

const addForm = (initForm, formsData, setFormsData) => {
	const newForm = { ...initForm, id: formsData.length };
	setFormsData([ ...formsData, newForm ]);
};

const removeForm = (id, formsData, setFormsData) => {
	setFormsData(formsData.filter((f) => f.id !== id));
};

const descMsg = '[p]Created by [url]https://midcal.navyrobotics.org/[/url]';

// generate the events
const generateEvents = (formsData) => {
	// make empty event array
	const events = [];
	// loop over formsData
	formsData.forEach((course) => {
		// get the course name
		const name = course.name; // got the name
		const location = course.location; // got the location
		const description = course.description + descMsg; // got the description
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
								const event = { name, location, startDate, startTime, endTime, description };
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
	console.log('CALENDAR EVENTS', events);
	return events;
};

export { handleUpdate, addForm, removeForm, generateEvents };
