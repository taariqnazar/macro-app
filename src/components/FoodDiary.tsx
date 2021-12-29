import { useState } from "react"
import { Alert,
Modal,
Pressable,
View,
ScrollView,
Text,
Button,
StyleSheet } from "react-native"
import { useStore } from "../store"
import { Item, Meal } from "../types"

export default function FoodDiary() {
    const [globalState, dispatch] = useStore()
    const [modalVisible, setModalVisible] = useState(false)
    const [itemData, setItemData] = useState({pickerItem: "Unknown", items: []})

    const meals:Meal[] = globalState.user.diary
    const items:Item[] = globalState.items
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
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text>X</Text>
                    </Pressable>
                    {items.map((item, index) => (
                        <Pressable
                            key={item.name}
                            onPress={(e) => console.log(e)}
                            //onPress={() => setItemData((prevData) => ({...prevData, items: prevData.items.push(item)}), )}
                        >
                            <Text>{item.name}</Text>
                        </Pressable>
                    ))}
                    {itemData.items.length > -1
                    ? 
                    <View>
                        <Text style={{fontWeight: 'bold',fontSize: 20, marginTop: 20}}>Meal:</Text>
                        <Button title="Add Meal" onPress={() => ""}></Button>
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


