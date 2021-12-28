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
const meal1 = {
    items: [item, item]
}
const meal2 = {
    items: [item, item, item]
}

export const meals = [
    meal1,
    meal2
]
