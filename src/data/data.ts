import { Meal, Item } from "../types"
// Meals is a list of meal
// meal is a list of food items

const item:Item = {
    id: 0,
    name: 'Popsicle',
    macronutrients: {
        protein: 20,
        carbohydrates: 40,
        fat: 2
    }
}
const chickenBreast:Item = {
    id: 1,
    name: 'Chicken Breast',
    macronutrients: {
        protein: 20,
        carbohydrates: 0.5,
        fat: 2
    }
}
const brocolli:Item = {
    id: 2,
    name: 'Brocolli',
    macronutrients: {
        protein: 5,
        carbohydrates: 15,
        fat: 0
    }
}

export const new_data = {
    user: {
        name: "Tariq Nazar",
        age: 24,
        weight: 108,
        diary: [ //A diary is a list of meals objects.
            { //Meal: a meal is info about the specific meal and its items
                timestamp: "xxx",
                items: [
                    item,
                    item,
                    item
                ]
            }
        ],
        targets: {
            weight: 95,
            macronutrients: {
                protein: 105,
                carbohydrates: 105,
                fat: 30,
            },
            micronutrients: {}
        }
    },
    items: [
        chickenBreast,
        brocolli
    ],
    settings: {}
}

