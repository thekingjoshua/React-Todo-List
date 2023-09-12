import { useState } from 'react';
import './index.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import TaskItem from './components/TaskItem';
import DateComponent from './components/DateComponent';
import InfoComponent from './components/InfoComponent';
import HeaderComponent from './components/HeaderComponent';
import AddNewItemBtn from './components/AddNewItemBtn';
import CopyRightText from './components/CopyRightText';
function App() {
	const oldTaskItem = [
		{ id: 1, text: 'Code', completed: true },
		{ id: 2, text: 'Take a Break', completed: true },
		{ id: 3, text: 'Conquer the World', completed: false },
	];
	const [taskItem, setTaskItem] = useState(oldTaskItem);
	const completedTasks = taskItem.filter(item => item.completed);
	const notCompletedTasks = taskItem.filter(item => !item.completed);
	function handleAddNewTaskItem() {
		const newTaskItem = { id: Date.now(), text: 'New Task', completed: false };
		setTaskItem(items => [...items, newTaskItem]);
	}
	function handleCompletedTaskItem(id) {
		setTaskItem(items =>
			items.map(item => (item.id === id ? { ...item, completed: !item.completed } : item))
		);
	}
	function handleDeletingTasks(id) {
		setTaskItem(items => items.filter(item => item.id !== id));
	}
	return (
		<div className="wrapper">
			<div className="align">
				<div className="app">
					<div className="info">
						<DateComponent />
						<InfoComponent
							totalTasksItem={taskItem}
							completedTasks={completedTasks}
							notCompletedTasks={notCompletedTasks}
						/>
					</div>
					<ul>
						<HeaderComponent />
						{taskItem.map(item => (
							<TaskItem
								text={item.text}
								key={item.id}
								id={item.id}
								onHandleCompletedTaskItem={handleCompletedTaskItem}
								onHandleDeletingTasks={handleDeletingTasks}
								isCompleted={item.completed}
							>
								{item.text}
							</TaskItem>
						))}
					</ul>
					<AddNewItemBtn onHandleAddNewTaskItem={handleAddNewTaskItem} />
				</div>
				<CopyRightText />
			</div>
		</div>
	);
}

export default App;
