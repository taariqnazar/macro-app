import { View, Text, Button } from 'react-native';
import Overview from "../components/Overview"

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Overview />
            <Text>Home Screen</Text>
        </View>
   );
};
