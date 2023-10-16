import { useEffect, useState } from 'react';
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
	const [taskItem, setTaskItem] = useState(function () {
		const storedTasks = localStorage.getItem('tasks');
		return JSON.parse(storedTasks);
	});

	const completedTasks = taskItem.filter(item => item.completed);
	const notCompletedTasks = taskItem.filter(item => !item.completed);

	const [taskText, setTaskText] = useState('');

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

	useEffect(
		function () {
			localStorage.setItem('tasks', JSON.stringify(taskItem));
		},
		[taskText, taskItem]
	);

	function inputOnChange(e, id) {
		setTaskText(e.target.value);
		setTaskItem(items =>
			items.map(item => (item.id === id ? { ...item, text: e.target.value } : item))
		);
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
						{taskItem.length < 1 ? (
							<p className='empty_task'>No task added yet...</p>
						) : (
							taskItem.map(item => (
								<TaskItem
									text={item.text}
									key={item.id}
									id={item.id}
									onHandleCompletedTaskItem={handleCompletedTaskItem}
									onHandleDeletingTasks={handleDeletingTasks}
									isCompleted={item.completed}
								>
									<input type="text" value={item.text} onChange={e => inputOnChange(e, item.id)} />
								</TaskItem>
							))
						)}
					</ul>
					<AddNewItemBtn onHandleAddNewTaskItem={handleAddNewTaskItem} />
				</div>
				<CopyRightText />
			</div>
		</div>
	);
}

export default App;
