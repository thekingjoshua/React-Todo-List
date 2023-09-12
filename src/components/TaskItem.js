function TaskItem({ children, onHandleCompletedTaskItem, isCompleted, id, onHandleDeletingTasks }) {
	return (
		<li className="down">
			<p className="check_button" onClick={() => onHandleCompletedTaskItem(id)}>
				<i
					className={isCompleted ? `pop_in fa fa-check-circle mark` : `fa fa-circle-thin mark-alt`}
				></i>
			</p>
			<div className="right">
				<p className={isCompleted ? `line-through` : ''} contentEditable={true}>
					{children}
				</p>
			</div>
			<span className="delete_button" onClick={() => onHandleDeletingTasks(id)}>
				<i className="fa fa-times-circle"></i>
			</span>
		</li>
	);
}
export default TaskItem;
