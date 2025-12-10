import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "./CalendarScreen";
import ScheduleTaskScreen from "./ScheduleTaskScreen";

const Stack = createNativeStackNavigator();

export default function CalendarStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalendarMain"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleTask"
        component={ScheduleTaskScreen}
        options={{
            headerStyle: {
            backgroundColor: "#1A121C", 
            },
            headerTintColor: "#fff", 
            headerTitle: "Schedule Task",
        }}
    />
    </Stack.Navigator>
  );
}