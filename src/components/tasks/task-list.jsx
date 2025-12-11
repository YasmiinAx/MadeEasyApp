import { View } from 'react-native';
import TaskCardComp from './task-card';

export default function TaskListComp({ taskArray, toggleTaskCompleted }) {
    return (
    <View>
        {taskArray.map((task, index) => (
            <TaskCardComp
                key={index}
                taskObj={task}
                toggleCompleted={() => toggleTaskCompleted(index)} // Pass toggle function
            />
        ))}
        </View>
    );
}