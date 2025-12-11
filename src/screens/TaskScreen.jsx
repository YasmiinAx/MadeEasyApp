import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../components/context/task-context';
import TaskListComp from '../components/tasks/task-list';
import TaskFormComp from '../components/tasks/task-form';

export default function TaskScreen() {
    {/* Task State And Functions From Context */}
    const { taskList, addNewTask, toggleTaskCompleted } = useTasks();
    {/* Count Of Completed Tasks */}
    const completedTasks = taskList.filter(t => t.completed).length;
    
    return (
        <ScrollView style={styles.container}  contentContainerStyle={{ paddingBottom: 40 }}>
            
            {/* Header */}
            <Text style={styles.headerText}>Tasks</Text>
        
            {/* Subheader + Remaining Tasks */}
            <Text style={styles.subheaderText}>
                {taskList.filter(t => !t.completed).length} tasks remaining
            </Text>
        
            {/* Form To Add New Task */}
            <TaskFormComp addTaskFunc={addNewTask} />
            
            {/* Display A Summary Of All The Tasks */}
            <View style={styles.taskCard}>
                <Text style={[{fontSize: 18, color: 'white'}]}>All Tasks</Text>
                <Text style={styles.taskComplete}>{completedTasks} Completed</Text>
            </View>
            
            {/* List Of All Tasks With The Toggle Functionality */}
            <TaskListComp taskArray={taskList} toggleTaskCompleted={toggleTaskCompleted} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#221520',
        padding: 20,
    },
    headerText: {
        paddingTop: 30,
        color: '#FFFFFF',
        fontSize: 25,
    },
    subheaderText: {
        color: '#A894A3',
        fontSize: 18,
        marginBottom: 15,
    },
    taskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingTop: 20,
    },
    taskComplete: {
        color: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 2,
        borderColor: '#FFFFFF80',
    }
});