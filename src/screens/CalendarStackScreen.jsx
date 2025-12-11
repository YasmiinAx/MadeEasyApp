import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "./CalendarScreen";
import ScheduleTaskScreen from "./ScheduleTaskScreen";

const Stack = createNativeStackNavigator();

{/* Handles navigation between the Calendar Screen and Schedule Task Screen */}
export default function CalendarStackScreen() {
    return (
        <Stack.Navigator>
            
            {/* Main Calendar */}
            <Stack.Screen
                name="CalendarMain"
                component={CalendarScreen}
                options={{ headerShown: false }}
            />
        
            {/* Schedule Task */}
            <Stack.Screen
                name="ScheduleTask"
                component={ScheduleTaskScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#221520", 
                    },
                    headerTintColor: "#ffffffff", 
                    headerTitle: "Schedule Task",
                }}
            />
        </Stack.Navigator>
    );
}