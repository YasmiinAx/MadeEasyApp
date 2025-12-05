// screens/ScheduleTaskScreen.jsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";

export default function ScheduleTaskScreen() {
  const [selectedDate, setSelectedDate] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  // ------------------------------
  // Generate all times dynamically
  // ------------------------------
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 6;  // 6:00 AM
    const endHour = 23;   // 11:00 PM

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

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Text style={styles.header}>Schedule Task</Text>

      {/* Calendar */}
      <View style={styles.calendarBox}>
        <Calendar
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
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#F58EDD" },
          }}
        />
      </View>

      {/* Task Dropdown */}
      <Text style={styles.label}>Select Task</Text>
      <View style={styles.dropdown}>
        <Picker
          style={styles.picker}
          dropdownIconColor="#fff"
          selectedValue={task}
          onValueChange={(v) => setTask(v)}
        >
          <Picker.Item label="Choose a task..." value="" />
          <Picker.Item label="Team Meeting" value="team" />
          <Picker.Item label="Math Homework" value="math" />
          <Picker.Item label="Presentation" value="presentation" />
        </Picker>
      </View>

      {/* Time Dropdown */}
      <Text style={styles.label}>Select Time</Text>
      <View style={styles.dropdown}>
        <Picker
          style={styles.picker}
          dropdownIconColor="#fff"
          selectedValue={time}
          onValueChange={(v) => setTime(v)}
        >
          <Picker.Item label="Choose a time..." value="" />
          {timeSlots.map((t, index) => (
            <Picker.Item key={index} label={t} value={t} />
          ))}
        </Picker>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Schedule Task</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A121C",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 15,
  },
  calendarBox: {
    backgroundColor: "#2A1C2E",
    borderRadius: 20,
    padding: 10,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: "#2A1C2E",
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 6,
  },
  picker: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#F58EDD",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
