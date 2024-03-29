import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes().then(
      (dishes) => {
        this.dishes = Array.from(dishes);
      }
    );

    if(this.dishes == null){
      console.log('Null dishes catched.');
    }

    console.log(JSON.stringify(this.dishes));
  }

  onSelect(dish: Dish): void{
    this.selectedDish = dish;
  }

}
