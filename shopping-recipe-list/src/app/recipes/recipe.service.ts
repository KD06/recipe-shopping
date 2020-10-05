import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe1",
            "A Test Recipe description 1",
            "https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg",
            [new Ingredient('Bread', 2), new Ingredient('Apple', 2)]
        ),
        new Recipe(
            "A Test Recipe2",
            "A Test Recipe description 2",
            "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES.jpg",
            [new Ingredient('Bread', 2), new Ingredient('Apple', 2)]
        )
    ];

    getRecipes(): Array<Recipe> {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    onAddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }


}