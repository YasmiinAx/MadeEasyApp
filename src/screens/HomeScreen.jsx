import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTasks } from '../components/context/task-context';

export default function HomeScreen() {
    const { taskList, calendarTasks, toggleTaskCompleted } = useTasks();

    const totalTasks = taskList.length;
    const completedTasks = taskList.filter(t => t.completed).length;
    const remainingTasks = taskList.filter(t => !t.completed).length;
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Edmonton' }); // get todays tasks

    // Today's tasks from calendar, sorted by time
    const todaysTasks = calendarTasks
        .filter(task => task.date === today)
        .map(task => {
            const original = taskList.find(t => t.name === task.name);
            return original ? { ...task, completed: original.completed } : task;
        })
        .sort((a, b) => {
            if (!a.time || !b.time) return 0;
            const parseTime = (t) => {
                const [timePart, ampm] = t.split(' ');
                let [h, m] = timePart.split(':').map(Number);
                if (ampm === 'PM' && h !== 12) h += 12;
                if (ampm === 'AM' && h === 12) h = 0;
                return h * 60 + m;
            };
            return parseTime(a.time) - parseTime(b.time);
        });

    // In Progress: today's uncompleted tasks
    const inProgressToday = todaysTasks.filter(task => !task.completed).length;

    const getPriorityColor = (priority) => {
        if (!priority) return '#2FE942';
        const p = priority.toLowerCase();
        if (p === 'high') return 'red';
        if (p === 'medium') return 'orange';
        return '#2FE942';
    };

    const nav = useNavigation();
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return (
        <ScrollView style={[styles.container, { paddingTop: 60 }]} contentContainerStyle={{ paddingBottom: 80 }}>
            {/* Header */}
            <Text style={styles.headerText}>Welcome back, Yasmiin!</Text>
            <Text style={styles.subheaderText}>Let's make today count</Text>

            {/* Progress Card */}
            <View style={styles.card}>
                <View style={styles.cardFlex}>
                    <Text style={styles.cardHeader}>Daily Progress</Text>
                    <Text style={styles.cardValue}>{progress}%</Text>
                </View>
                <Text style={styles.cardTitle}>{completedTasks} of {totalTasks} tasks completed</Text>

                {/* Progress Bar */}
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                </View>
            </View>

            {/* Progress Cards */}
            <View style={styles.cardRow}>
                <View style={styles.smallCard}>
                    <Text style={[styles.headerText, { paddingBottom: 15 }]}>{completedTasks}</Text>
                    <Text style={styles.cardTitle}>Completed</Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={[styles.headerText, { paddingBottom: 15 }]}>{inProgressToday}</Text>
                    <Text style={styles.cardTitle}>In Progress</Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={[styles.headerText, { paddingBottom: 15 }]}>{remainingTasks}</Text>
                    <Text style={styles.cardTitle}>Remaining</Text>
                </View>
            </View>

            {/* Today's Tasks from Calendar */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Today's Focus</Text>
                {todaysTasks.map((task, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleTaskCompleted(taskList.findIndex(t => t.name === task.name))}>
                        <View style={styles.inBox}>
                            <View style={styles.taskRow}>
                                <View style={[styles.priorityDot, { backgroundColor: getPriorityColor(task.priority) }]} />
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.inBoxText, task.completed && styles.completedTask]}>
                                        {task.name}
                                    </Text>
                                    <Text style={[styles.taskTime, task.completed]}>
                                        {task.time}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#221520', 
        padding: 20 
    },
    headerText: { 
        color: '#FFFFFF', 
        fontSize: 30 
    },
    subheaderText: { 
        color: '#A894A3', 
        fontSize: 18, 
        marginBottom: 15 
    },
    card: { 
        backgroundColor: '#2D1F2B', 
        padding: 20, 
        borderRadius: 16, 
        borderWidth: 1, 
        borderColor: '#3D2938', 
        marginBottom: 15 
    },
    cardRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        marginBottom: 25 
    },
    smallCard: { 
        backgroundColor: '#2D1F2B', 
        borderRadius: 16, 
        borderWidth: 1, 
        borderColor: '#3D2938', 
        width: '31%', 
        height: 140, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    cardTitle: { 
        color: '#A894A3', 
        fontSize: 16 
    },
    cardHeader: { 
        color: '#FFFFFF', 
        fontSize: 22, 
        paddingBottom: 5 
    },
    cardValue: { 
        color: '#E891D6', 
        fontSize: 22 
    },
    cardFlex: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    progressBarBackground: { 
        height: 8, 
        backgroundColor: '#E891D680', 
        borderRadius: 5, 
        marginTop: 18, 
        overflow: 'hidden' 
    },
    progressBarFill: { 
        height: 8, 
        backgroundColor: '#E891D6', 
        borderRadius: 5 
    },
    inBox: { 
        backgroundColor: '#271925', 
        padding: 18, 
        marginVertical: 6, 
        borderRadius: 14 
    },
    inBoxText: { 
        fontSize: 17, 
        color: '#FFFFFF',
         marginLeft: 0 
        },
    taskTime: { 
        fontSize: 14, 
        color: '#A894A3', 
        marginTop: 2, 
        marginLeft: 0 
    },
    completedTask: { 
        textDecorationLine: 'line-through', 
        color: '#A894A3' 
    },
    taskRow: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    priorityDot: { 
        width: 12, 
        height: 12, 
        borderRadius: 6, 
        marginRight: 10 
    },
});
