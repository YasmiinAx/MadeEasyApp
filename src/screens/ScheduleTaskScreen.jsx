import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import { useTasks } from "../components/context/task-context";

export default function ScheduleTaskScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const { taskList, addCalendarTask } = useTasks(); // Add tasks to calendar only

  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 6;
    const endHour = 23;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let min of [0, 30]) {
        const h = hour % 12 || 12;
        const ampm = hour < 12 ? "AM" : "PM";
        const formatted = `${String(h).padStart(2, "0")}:${min === 0 ? "00" : min} ${ampm}`;
        slots.push(formatted);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleSchedule = () => {
    if (!task || !selectedDate || !time) return;

    const selectedTask = taskList.find(t => t.name === task);
    if (!selectedTask) return;

    addCalendarTask({
      name: selectedTask.name,
      priority: selectedTask.priority,
      date: selectedDate,
      time: time,
    });

    setTask("");
    setTime("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markingType="custom"
        markedDates={
          selectedDate
            ? {
                [selectedDate]: {
                  customStyles: {
                    container: { backgroundColor: "#E891D6", borderRadius: 12 },
                    text: { color: "#fff", fontWeight: "600" },
                  },
                },
              }
            : {}
        }
        renderArrow={(direction) => (
          <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold", paddingBottom: 3 }}>
            {direction === "left" ? "‹" : "›"}
          </Text>
        )}
      />

      <Text style={styles.label}>Select Task</Text>
      <View style={styles.dropdown}>
        <Picker
          style={styles.picker}
          dropdownIconColor="#A894A3"
          selectedValue={task}
          onValueChange={(v) => setTask(v)}
        >
          <Picker.Item label="Choose a task..." value="" />
          {taskList.map((t, idx) => (
            <Picker.Item key={idx} label={t.name} value={t.name} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Select Time</Text>
      <View style={styles.dropdown}>
        <Picker
          style={styles.picker}
          dropdownIconColor="#A894A3"
          selectedValue={time}
          onValueChange={(v) => setTime(v)}
        >
          <Picker.Item label="Choose a time..." value="" />
          {timeSlots.map((t, idx) => (
            <Picker.Item key={idx} label={t} value={t} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Schedule Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#1A121C", padding: 20 },
    calendar: { borderRadius: 16, borderWidth: 1, borderColor: "#3D2938", marginBottom: 25, overflow: "hidden" },
    label: { color: "#ffffff", fontSize: 16, marginBottom: 8 },
    dropdown: { backgroundColor: "#2D1F2B", borderRadius: 14, marginBottom: 20, paddingHorizontal: 6 },
    picker: { color: "#A894A3" },
    button: { backgroundColor: "#E891D6", paddingVertical: 10, borderRadius: 10, alignItems: "center", marginTop: 5 },
    buttonText: { color: "#ffffff", fontWeight: "bold", fontSize: 16 },
});
