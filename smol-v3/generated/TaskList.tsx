import React from 'react';
import Task from './Task';
import { Task as TaskInterface } from './models';

interface TaskListProps {
    tasks: TaskInterface[];
    selectTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, selectTask }) => {
    return (
        <div id="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} selectTask={selectTask} />
            ))}
        </div>
    );
}

export default TaskList;