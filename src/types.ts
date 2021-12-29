export type Item = {
    id: number,
    name: string,
    macronutrients: {
        protein: number,
        carbohydrates: number,
        fat:number
    }
}

export type Meal = {
    timestamp: string,
    items: Item[]
}

export type Macronutrients = {
    protein: number,
    carbohydrates: number,
    fat: number
}
