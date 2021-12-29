export function caloriesFromMacro(macronutrients) {
    const { protein, carbohydrates, fat } = macronutrients
    return 4*protein + 4*carbohydrates + 9*fat
}
export function getMacrosFromMeals(meals) {
    let macros = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    }
    meals.map((meal, _) =>{
        meal.items.map((item, __) =>{
            Object.entries(item.macronutrients).map(([key, value]) => {
                macros[key] += value
            })
        })
    })
    return macros
}
