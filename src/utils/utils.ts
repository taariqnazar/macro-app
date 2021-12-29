import { Macronutrients, Meal } from "../types"

export function caloriesFromMacro(macronutrients:Macronutrients): number {
    const { protein, carbohydrates, fat } = macronutrients
    return 4*protein + 4*carbohydrates + 9*fat
}
export function getMacrosFromMeals(meals:Meal[]): Macronutrients {
    let macros = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    }
    meals.map((meal, _) =>{
        meal.items.map((item, __) =>{
            Object.entries(item.macronutrients).map(([key, value]:[key:string, value:number]) => {
                macros[key] += value
            })
        })
    })
    return macros
}
