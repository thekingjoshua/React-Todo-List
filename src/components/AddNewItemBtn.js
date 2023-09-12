function AddNewItemBtn({ onHandleAddNewTaskItem }) {
	return (
		<div className="bottom show">
			<button onClick={onHandleAddNewTaskItem}>
				<i className="fa fa-plus"></i> Add new item
			</button>
		</div>
	);
}
export default AddNewItemBtn;
