export type Category = // CHANGE TO ENUM 
    | "Tofu"
    | "Tempeh"
    | "Veggie-Burgers"
    | "Stews"
    | "One-Pot-Wonders"
    | "Bowls"
    | "Stuffed-Veggie-Mains"
    | "Chili"
    | "Pizza"
    | "Soups"
    | "Roasted"
    | "Salad-Bombs"
    | "Dressing-Bombs"
    | "Lunch"
    | "Breakfast"
    | "Dinner"
    | "Appetizers"
    | "Dips"
    | "Basics"
    | "Slow-Cooker-Bombs"
    | "Smoothies"
    | "Baked"
    | "Dessert"
    | "Raw"
    | "Cookies";

export interface Recipe {
    category: Category;
    title: string;
    id: string;
    masterId: string;
}
