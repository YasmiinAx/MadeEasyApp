import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../components/context/task-context';
import TaskListComp from '../components/tasks/task-list';
import TaskFormComp from '../components/tasks/task-form';

export default function TaskScreen() {
  const { taskList, addNewTask, toggleTaskCompleted } = useTasks();
  const completedTasks = taskList.filter(t => t.completed).length;

  return (
    <ScrollView style={styles.container}  contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.headerText}>Tasks</Text>
      <Text style={styles.subheaderText}>
        {taskList.filter(t => !t.completed).length} tasks remaining
      </Text>

      <TaskFormComp addTaskFunc={addNewTask} />

      <View style={styles.taskCard}>
          <Text style={[{fontSize: 18, color: 'white'}]}>All Tasks</Text>
          <Text style={styles.taskComplete}>{completedTasks} Completed</Text>
      </View>

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