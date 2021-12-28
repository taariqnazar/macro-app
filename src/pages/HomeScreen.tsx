import { Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <Button
            title="Go to my diary"
            onPress={() =>
                navigation.navigate('Diary', {name: 'Tariq'})
            }
        />
   );
};
