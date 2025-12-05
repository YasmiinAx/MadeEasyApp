import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function TaskFormComp({ addTaskFunc }) {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit() {
    if (!taskText.trim()) return Alert.alert("Task cannot be empty!");

    addTaskFunc({ 
      name: taskText, 
      priority: priority, 
      completed: false
    });

    setTaskText("");
    setPriority("Low");
  }

  return (
    <View style={styles.form}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {/* Task Input */}
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#A894A3"
          onChangeText={setTaskText}
          value={taskText}
        />
        
        {/* Priority Dropdown */}
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={priority}
            onValueChange={setPriority}
            dropdownIconColor="#A894A3"
            style={styles.dropdown}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
      </View>
    </View>
      
      {/* Add Button */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add new task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#2D1F2B',
    borderWidth: 1,
    borderColor: '#3D2938',
    padding: 20,
    borderRadius: 15,
  },

  dropdownContainer: {
    width: 110,
    backgroundColor: '#271925',
    borderRadius: 10,
    marginRight: 12,
  },

  dropdown: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 55,
  },

  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#271925',
    paddingHorizontal: 10,
    paddingVertical: 18,
    color: '#FFFFFF',
    marginRight: 15,
    borderRadius: 10,
  },

  button: {
    backgroundColor: '#E891D6',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
