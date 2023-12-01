import { Component,Input, OnInit} from '@angular/core';
import { Restaurant } from '../../restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit{
  @Input() restau:Restaurant;
  @Input() id:number;
  
  ngOnInit() {
      
  }
  
}
