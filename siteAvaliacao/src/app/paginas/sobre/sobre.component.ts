import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
OrderService

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private service: OrderService) { }
  
  dataMovies:any
  ngOnInit(): void {
      this.dataMovies = this.service.listDetails;
  }
}
