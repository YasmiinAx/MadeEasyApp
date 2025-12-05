import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  
  // Dynamically generate upcoming tasks
  const today = new Date();
  const upcomingTasks = [
    { id: "1", title: "Team Meeting", date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString().split("T")[0] },
    { id: "2", title: "Math Homework", date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2).toISOString().split("T")[0] },
    { id: "3", title: "Project Presentation", date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5).toISOString().split("T")[0] },
  ];

  // Filter tasks for the currently selected month
  const displayedTasks = upcomingTasks.filter(task =>
    selected ? task.date.startsWith(selected.substring(0, 7)) : task.date.startsWith(today.toISOString().substring(0, 7))
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Calendar</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("ScheduleTask")}
        >
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* CALENDAR */}
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#2A1C2E",
          calendarBackground: "#2A1C2E",
          dayTextColor: "#ffffff",
          monthTextColor: "#ffffff",
          textSectionTitleColor: "#C2B5C5",
          todayTextColor: "#F58EDD",
          selectedDayBackgroundColor: "#F58EDD",
          selectedDayTextColor: "#1A121C",
          arrowColor: "#F58EDD",
          textDisabledColor: "#5F4A62",
        }}
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={{
          [selected]: { selected: true, selectedColor: "#F58EDD" },
        }}
      />

      {/* UPCOMING TASKS */}
      <Text style={styles.subHeader}>Upcoming Tasks</Text>
      <FlatList
        data={displayedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDate}>{item.date}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={{ color: "#bbb", marginTop: 10 }}>No tasks this month</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A121C", padding: 20 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  header: { fontSize: 26, color: "#fff", fontWeight: "700" },

  addButton: {
    backgroundColor: "#F58EDD",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  calendar: {
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
  },

  subHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  taskCard: {
    backgroundColor: "#2A1C2E",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  taskTitle: { color: "#fff", fontSize: 16, fontWeight: "600" },
  taskDate: { color: "#bbb", fontSize: 14, marginTop: 2 },
});
