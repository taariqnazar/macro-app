import { Meal, Item } from "../types"
// Meals is a list of meal
// meal is a list of food items

const popsicle:Item = {
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
        protein: 15,
        carbohydrates: 15,
        fat: 0
    }
}

export const data = {
    user: {
        name: "Tariq Nazar",
        age: 24,
        weight: 108,
        diary: [],
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
        popsicle,
        chickenBreast,
        brocolli
    ],
    settings: {}
}

