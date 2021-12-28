import * as React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Pages
import HomeScreen from './pages/HomeScreen'
import DiaryScreen from './pages/DiaryScreen'
import ProfileScreen from './pages/ProfileScreen'
import SettingsScreen from './pages/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function Index() {
    return(
        <Tab.Navigator
        screenOptions = {{
            headerShown: false
        }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Diary"
                component={DiaryScreen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>
    )    
}


