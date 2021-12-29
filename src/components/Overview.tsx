import { View, Text, StyleSheet } from 'react-native';
import { useStore } from "../store"
import { caloriesFromMacro, getMacrosFromMeals} from "../utils/utils"

export default function Overview() {
    const [globalState, dispatch] = useStore()

    let macronutrients = getMacrosFromMeals(globalState.user.diary)
    let macronutrientsTarget = globalState.user.targets.macronutrients
    let caloriesDone = caloriesFromMacro(macronutrients)
    let caloriesTarget = caloriesFromMacro(macronutrientsTarget)   

    return (
           <View style = {styles.container} >
                <Total caloriesDone={caloriesDone} caloriesTarget={caloriesTarget}/>
                <Macros macronutrients={macronutrients} macronutrientsTarget={macronutrientsTarget}/>
           </View>
    )
}


function Macros({macronutrients, macronutrientsTarget}) {
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

const Total = ({caloriesDone, caloriesTarget}) => {
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


