import { View, Text, StyleSheet } from 'react-native';
import Overview from '../components/Overview'
import FoodDiary from '../components/FoodDiary'

// TODO: Create button for adding meals and maybe also to edit
export default function DiaryScreen({ navigation }) {
    return (
            <View>
                <Overview />
                <FoodDiary />
            </View>
    )
};

