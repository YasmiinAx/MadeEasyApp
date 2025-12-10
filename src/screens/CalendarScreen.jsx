import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { useTasks } from "../components/context/task-context";

export default function CalendarScreen({ navigation }) {

  {/* State */}
  const [selected, setSelected] = useState("");
  const { calendarTasks, taskList, toggleTaskCompleted } = useTasks();

  {/* Task Data */}
  const displayedTasks = calendarTasks
    .filter(task => task.date === selected)
    .map(task => {
      const original = taskList.find(t => t.name === task.name);
      return original ? { ...task, completed: original.completed } : task;
    })
    .sort((a, b) => {
      if (!a.time || !b.time) return 0;
      const parseTime = (t) => {
        const [timePart, ampm] = t.split(" ");
        let [h, m] = timePart.split(":").map(Number);
        if (ampm === "PM" && h !== 12) h += 12;
        if (ampm === "AM" && h === 12) h = 0;
        return h * 60 + m;
      };
      return parseTime(a.time) - parseTime(b.time);
    });

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Calendar</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("ScheduleTask")}
        >
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#2D1F2B",
          calendarBackground: "#2D1F2B",
          dayTextColor: "#ffffff",
          monthTextColor: "#ffffff",
          textSectionTitleColor: "#C2B5C5",
          todayTextColor: "#E891D6",
          selectedDayBackgroundColor: "#E891D6",
          selectedDayTextColor: "#ffffff",
          arrowColor: "#ffffff",
          textDisabledColor: "#5F4A62",
          textMonthFontSize: 22,
          textMonthFontWeight: "bold",
          textDayHeaderFontSize: 16,
        }}
        onDayPress={(day) => setSelected(day.dateString)}
        markingType="custom"
        markedDates={{
          ...calendarTasks.reduce((acc, task) => {
            if (task.date) {
              acc[task.date] = { customStyles: { container: {}, text: {} } };
            }
            return acc;
          }, {}),
          ...(selected
            ? {
                [selected]: {
                  customStyles: {
                    container: { backgroundColor: "#E891D6", borderRadius: 12 },
                    text: { color: "#fff", fontWeight: "600" },
                  },
                },
              }
            : {}),
        }}
        renderArrow={(direction) => (
          <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold", paddingBottom: 3 }}>
            {direction === "left" ? "‹" : "›"}
          </Text>
        )}
      />

      {/* Task List */}
      <View style={[styles.card, { flex: 1 }]}>
        <Text style={styles.subHeader}>Upcoming Tasks</Text>

        <FlatList
          data={displayedTasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            let priorityColor;
            if (item.priority.toLowerCase() === "high") priorityColor = "red";
            else if (item.priority.toLowerCase() === "medium") priorityColor = "orange";
            else priorityColor = "#2FE942";

            return (
              <View style={styles.taskCard}>
                <View style={styles.taskRow}>
                  <View style={[styles.priorityCircle, { backgroundColor: priorityColor }]} />

                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.taskTitle,
                        item.completed && {
                          color: "#A894A3",
                          textDecorationLine: "line-through",
                        },
                      ]}
                    >
                      {item.name}
                    </Text>

                    <Text style={styles.taskTime}>{item.time}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={
            <Text style={{ color: "#bbb", marginTop: 10 }}>No tasks scheduled</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#221520", 
    padding: 20 
  },
  card: { 
    backgroundColor: "#2D1F2B",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#3D2938",
    marginBottom: 15 
  },
  headerRow: { 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15 
  },
  header: { 
    paddingTop: 30,
    color: "#FFFFFF",
    fontSize: 25 
  },
  addButton: { 
    marginTop: 30,
    backgroundColor: "#E891D6",
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderRadius: 8 
  },
  addButtonText: { 
    color: "#fff",
    fontWeight: "600",
    fontSize: 16 
  },
  calendar: { 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#3D2938",
    marginBottom: 20,
    overflow: "hidden" 
  },
  subHeader: { 
    color: "#fff",
    fontSize: 22 
  },
  taskCard: { 
    backgroundColor: "#2D1F2B",
    paddingTop: 10,
    borderRadius: 14 
  },
  taskTitle: { 
    color: "#fff",
    fontSize: 16,
    fontWeight: "600" 
  },
  taskRow: { 
    backgroundColor: "#271925",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center" 
  },
  priorityCircle: { 
    width: 10,
    height: 10,
    borderRadius: 6,
    marginRight: 10 
  },
  taskTime: { 
    color: "#A894A3",
    fontSize: 14,
    marginTop: 2 
  },
});