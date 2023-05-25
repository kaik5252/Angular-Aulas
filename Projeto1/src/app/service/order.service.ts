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
      foodImg: "https://assets.unileversolutions.com/recipes-v2/106678.jpg"
    },
    {
      id: 2,
      foodName: "Cachorro Quente de Forno",
      foodDetails: "Cachorro quente com salsichas e condimentos",
      foodPrice: 8,
      foodImg: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/cachorro-quente-de-forno.jpg"
    },
    {
      id: 3,
      foodName: "Pastel de Forno",
      foodDetails: "Pastel com frango e catupiry com condimentos",
      foodPrice: 6,
      foodImg: "https://www.sabornamesa.com.br/media/k2/items/cache/73cfa97422fce7916e3facf08ef108b3_XL.jpg"
    },
    {
      id: 4,
      foodName: "Empadão de Carne",
      foodDetails: "Empadão de carne moída com condimentos",
      foodPrice: 8,
      foodImg: "https://www.pingodoce.pt/wp-content/uploads/2022/08/empadao-de-carne-com-batata-doce-pingo-doce.jpg"
    },
    {
      id: 5,
      foodName: "Hamburguer de Forno",
      foodDetails: "Hamburguer de forno recheado com queijo cheedar",
      foodPrice: 5.50,
      foodImg: "https://cooknenjoy.com/wp-content/uploads/2022/09/Hamburgao-02-1200x901.jpg"
    },
    {
      id: 6,
      foodName: "Coxinha de Frango",
      foodDetails: "Coxinha comum recheada de frango com condimentos",
      foodPrice: 5,
      foodImg: "https://ribeirao.emporiotartufo.com.br/image/cache/catalog/Irani-Maggiore/125523-COXINHA-FRANGO-SEM-GLUTEN-200G-IRANI-MAGGIORE-a-1000x667.jpg"
    }
  ]
}
