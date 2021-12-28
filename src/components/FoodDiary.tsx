import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

import { meals } from "../data/data"

export default function FoodDiary() {
    return(
        <View style = {styles.container}>
        {meals.map((meal, index) => (
            <Meal meal={meal} />
        ))}
        </View>
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


