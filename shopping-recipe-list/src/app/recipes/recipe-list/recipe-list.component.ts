import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "A Test Recipe description", "https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}