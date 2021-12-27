import { Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <Button
            title="Go to my profile"
            onPress={() =>
                navigation.navigate('Profile', {name: 'Tariq'})
            }
        />
   );
};
