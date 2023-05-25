import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
OrderService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private service: OrderService) {}
  foodData:any
  ngOnInit(): void {
      this.foodData = this.service.produtoDetails
  }
}