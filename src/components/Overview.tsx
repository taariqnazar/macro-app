import { View, Text, StyleSheet } from 'react-native';
import { Macronutrients } from "../types"
import { useStore } from "../store"
import { caloriesFromMacro, getMacrosFromMeals} from "../utils/utils"

export default function Overview() {
    const [globalState, dispatch] = useStore()

    let macronutrients:Macronutrients = getMacrosFromMeals(globalState.user.diary)
    let macronutrientsTarget:Macronutrients = globalState.user.targets.macronutrients
    let caloriesDone:number = caloriesFromMacro(macronutrients)
    let caloriesTarget:number = caloriesFromMacro(macronutrientsTarget)   

    return (
           <View style = {styles.container} >
                <Total caloriesDone={caloriesDone} caloriesTarget={caloriesTarget}/>
                <Macros macronutrients={macronutrients} macronutrientsTarget={macronutrientsTarget}/>
           </View>
    )
}


function Macros({macronutrients, macronutrientsTarget}:{macronutrients:Macronutrients , macronutrientsTarget:Macronutrients}) {
    return(
       <View style = {styles.macrosContainer}>
           {Object.entries(macronutrients).map(([key, _]) => (
                <View style = {styles.macro}>
                    <Text>{macronutrients[key]}/{macronutrientsTarget[key]}</Text>
                    <Text>{key}</Text>
                </View>
           ))}
       </View>
          ) 
}

const Total = ({caloriesDone, caloriesTarget}:{caloriesDone:number , caloriesTarget:number}) => {
    return(
            <Text>Calories {caloriesDone}/{caloriesTarget}</Text>
          )
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


