import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Pages
import HomeScreen from './pages/HomeScreen'
import DiaryScreen from './pages/DiaryScreen'
import ProfileScreen from './pages/ProfileScreen'

const Stack = createNativeStackNavigator()

export default function index() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Welcome" }}
            />
            <Stack.Screen
                name="Diary"
                component={DiaryScreen}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )    
}


