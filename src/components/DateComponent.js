function DateComponent() {
	const curDate = new Date();
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const day = weekdays[curDate.getDay()];
	const date = english_ordinal_suffix(new Date());
	const month = months[curDate.getMonth()];
	const year = curDate.getFullYear();
	console.log();
	function english_ordinal_suffix(dt) {
		return (
			dt.getDate() +
			(dt.getDate() % 10 === 1 && dt.getDate() !== 11
				? 'st'
				: dt.getDate() % 10 === 2 && dt.getDate() !== 12
				? 'nd'
				: dt.getDate() % 10 === 3 && dt.getDate() !== 13
				? 'rd'
				: 'th')
		);
	}
	return (
		<div className="date">
			<p id="day">
				<span id="today">{day},</span> <span id="daymonth">{date}</span>
			</p>
			<p id="month">
				{month}, {year}
			</p>
		</div>
	);
}

export default DateComponent;
