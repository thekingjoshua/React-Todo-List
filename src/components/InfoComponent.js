function InfoComponent({ totalTasksItem, completedTasks, notCompletedTasks }) {
	return (
		<div className="info-bottom">
			<div className="left">
				<p id="count">{totalTasksItem.length}</p>
				<p id="tasks">Total</p>
			</div>
			<div className="middle">
				<p id="remaining_done">{notCompletedTasks.length}</p>
				<p id="remaining_tasks">Remaining</p>
			</div>
			<div className="right">
				<p id="count_done">{completedTasks.length}</p>
				<p id="tasks_done">Completed</p>
			</div>
		</div>
	);
}
export default InfoComponent;
