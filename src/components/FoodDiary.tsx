import { useState } from "react"
import { Alert,
Modal,
SafeAreaView,
Pressable,
TextInput,
View,
ScrollView,
Text,
Button,
StyleSheet } from "react-native"
import { useStore } from "../store"
import { Item, Meal } from "../types"

const fuzzyStringSearch = (term, string) => {
    var ratio = 0.5
    var string = string.toLowerCase();
    var compare = term.toLowerCase();
    var matches = 0;
    if (string.indexOf(compare) > -1) return true; // covers basic partial matches
    for (var i = 0; i < compare.length; i++) {
        string.indexOf(compare[i]) > -1 ? matches += 1 : matches -=1;
    }
    return (matches/string.length >= ratio || term == "");
}
export default function FoodDiary() {
    const [globalState, dispatch] = useStore()
    const [modalVisible, setModalVisible] = useState(false)
    const [itemData, setItemData] = useState({items: []})
    const [query, setQuery] = useState("")

    const meals:Meal[] = globalState.user.diary
    const items:Item[] = globalState.items

    const addMeal = () => {
        setModalVisible(!modalVisible)
        dispatch({type:"ADD_MEAL", payload: {timestamp:"xxx", items: itemData.items }})
        setItemData({items: []})
    }
    return(
        <ScrollView style = {styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.modalView}>
                    <Pressable
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            setItemData({items: []})
                        }}
                    >
                    <Text>X</Text>
                    </Pressable>
                    <SafeAreaView>
                        <TextInput 
                            onChangeText={text => setQuery(text)}
                            placeholder="search for item..."
                            value={query}
                        />
                    </SafeAreaView>
                    {items.filter( item => fuzzyStringSearch(query, item.name)).map((item, index) => (
                        <Pressable
                            key={item.name}
                            onPress={() => {
                                setQuery("")
                                setItemData(prevData => ({...prevData, [items]: prevData.items.push(item)}))
                            }}
                        >
                            <Text>{item.name}</Text>
                        </Pressable>
                    ))}
                    {itemData.items.length > 0
                    ? 
                    <View>
                        <Text style={{fontWeight: 'bold',fontSize: 20, marginTop: 20}}>Meal:</Text>
                        {itemData.items.map((item, index) => (
                            <Text>{item.name}</Text>
                        ))}
                        <Button title="Add Meal" onPress={() => addMeal()}></Button>
                    </View>
                    : <></>}
                </View>
            </Modal>
            <Button title="Add Food" onPress={() => setModalVisible(true)}></Button>
            {meals.map((meal:Meal , index: number) => (
                <MealComponent key={index} meal={meal} />
            ))}
        </ScrollView>
      )
}

function MealComponent({meal}:{meal: Meal}){
    return(
        <View style = {styles.meal}>
        {meal.items.map((item:Item, index:number) => (
            <View>
                <Text>{item.name}</Text>
            </View>
        ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    meal: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    },
    modalView: {
        backgroundColor: "#fff",
        padding: 10,
        width: "100%",
        height: "100%"
    }
}) 


