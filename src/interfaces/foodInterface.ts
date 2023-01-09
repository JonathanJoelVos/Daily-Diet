export type FoodShape = {
    id: string;
    hour: string;
    name: string;
    isOutOfDiet: boolean;
    description: string;
    date: string;
}

export type ListFoodsPerDay = {
    id: string;
    date: string;
    infos: Array<FoodShape>;
}
