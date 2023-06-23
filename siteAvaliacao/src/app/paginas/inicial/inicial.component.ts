import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
OrderService

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(private service: OrderService) { }
  
  dataMovies:any
  ngOnInit(): void {
      this.dataMovies = this.service.listDetails;
  }
}
