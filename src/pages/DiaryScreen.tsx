import { View, Text, StyleSheet } from 'react-native';
import Overview from '../components/Overview'
import FoodDiary from '../components/FoodDiary'

export default function DiaryScreen({ navigation }) {
    return (
            <View>
                <Overview />
                <FoodDiary />
            </View>
           )
};

