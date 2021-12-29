import { View, ScrollView, Text, StyleSheet } from "react-native"


export default function FoodDiary() {
    return(
        <ScrollView style = {styles.container}>
            <Text> This is the diary </Text>
        </ScrollView>
      )
}

function Meal({meal}){
    return(
        <View style = {styles.meal}>
        {meal.items.map((item, index) => (
            <View>
                <Text>{item.name}</Text>
            </View>
        ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    marginTop: 10
    },
    meal: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    },
}) 


