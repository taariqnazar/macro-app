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
        <View>
            <Text>Item</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    padding: 20,
    margin: 5,
    marginTop: 10
    },
    macrosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    macro: {
        alignItems: 'center'
    }
}) 


