import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  produtoDetails = [
    {
      id: 1,
      foodName: "Sanduíche Natural de Frango",
      foodDetails: "Sanduíche feito de frango com catupiry",
      foodPrice: 20,
      foodImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.unileversolutions.com%2Frecipes-v2%2F106678.jpg&tbnid=sYizNzdlZypT8M&vet=12ahUKEwi-vI-8lIL_AhUZAbkGHVQwDaQQMygAegUIARCGAg..i&imgrefurl=https%3A%2F%2Fwww.recepedia.com%2Fpt-br%2Freceita%2Fsanduiche%2F106678-sanduiche-de-frango-com-hortela%2F&docid=2lAGEDMrEcD_qM&w=3000&h=1988&q=sanduiche%20de%20frango&client=opera-gx&ved=2ahUKEwi-vI-8lIL_AhUZAbkGHVQwDaQQMygAegUIARCGAg"
    }
  ]
}
