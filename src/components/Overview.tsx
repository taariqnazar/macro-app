import * as React from "react"
import { View, Text, StyleSheet } from 'react-native';

// Example data
import { data } from "../data/data"

export default function Overview() {
    let macronutrients = data.today.macronutrients
    let done = caloriesFromMacro(macronutrients.protein.done, macronutrients.carbohyrates.done, macronutrients.fats.done)
    let total = caloriesFromMacro(macronutrients.protein.total , macronutrients.carbohyrates.total, macronutrients.fats.total)   

    return (
           <View style = {styles.container} >
                <Total done={done} total={total}/>
                <Macros macronutrients = {macronutrients}/>
           </View>
    )
}
function Macros({macronutrients}) {
    return(
       <View style = {styles.macrosContainer}>
           {Object.entries(macronutrients).map(([key, value]) => (
                <View style = {styles.macro}>
                    <Text>{value.done}/{value.total}</Text>
                    <Text>{key}</Text>
                </View>
           ))}
       </View>
          ) 
}

const Total = ({done, total}) => {
    return(
            <Text>Calories {done}/{total}</Text>
          )
}

function caloriesFromMacro(protein, carbohydrates, fat) {
    return 4*protein + 4*carbohydrates + 9*fat
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 5,
    marginTop: 30
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


