import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService
  ) {}

  ngOnInit(): void{
    /**
     * .then is executed when the promise is resolved
     * here "dish" is the returned result from the getFeaturedDish method in the dishService
     * the arrow function initialises the dish variable in the home component class with the
     * returned result
     * NOTE: when a promise is rejected the error is handled using ".catch" block
     */
    this.dishservice.getFeaturedDish().then(
      (dish) => { this.dish = dish; }
    );
    
    this.promotionservice.getFeaturedPromotion().then(
      (promotion) => { this.promotion = promotion; }
    );

    this.leaderservice.getFeaturedLeader().then(
      (leader) => { this.leader = leader; }
    );
  }
}
