// Meals is a list of meal
// meal is a list of food items
const item = {
    id: 0,
    name: 'Popsicle',
    macronutrients: {
        protein: 20,
        carbohyrates: 40,
        fat: 2
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
                carbohyrates: 105,
                fat: 30,
            },
            micronutrients: {}
        }
    },
    settings: {}
}

export const data = {
    today: {
        macronutrients: {
            protein: {
                total: 150,
                done: 0
            },
            carbohyrates: {
                total: 150,
                done: 0
            },
            fats: {
                total: 150,
                done: 0
            },
        }
    }
}

