import 'react-native-gesture-handler'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';

import HomeScreen from './src/screens/HomeScreen';
import CalendarStackScreen from './src/screens/CalendarStackScreen'; // <- calendar stack navigator
import { TaskProvider } from './src/components/context/task-context';
import DashboardScreen from './src/screens/Dashboard';
import PrivacySecurityScreen from './src/screens/PrivacySecurity';
import HelpSupportScreen from './src/screens/HelpSupport';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#221520',
              borderTopColor: '#3D2938',
              borderTopWidth: 1,
            },
            tabBarActiveTintColor: '#E891D6',
            tabBarInactiveTintColor: '#A894A3',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home-outline';
              else if (route.name === 'Calendar') iconName = 'calendar-clear-outline';
              else if (route.name === 'Dashboard') iconName = 'stats-chart-outline';
              else if (route.name === 'Help') iconName = 'help-circle-outline';
              else if (route.name === 'Privacy') iconName = 'shield-checkmark-outline';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalendarStackScreen} />
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Help" component={HelpSupportScreen} />
          <Tab.Screen name="Privacy" component={PrivacySecurityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
