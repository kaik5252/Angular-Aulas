import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  listDetails = [
      {
        id: 1,
        name: "Avatar: O Caminho da Água",
        sinopse: "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.",
        imagem: "avatar.jpg"
      },
      {
        id: 2,
        name: "Aquaman",
        sinopse: "A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano...",
        imagem: "aquaman.jpg"
      },
      {
        id: 3,
        name: "A Guerra do Amanhã",
        sinopse: "O mundo fica chocado quando um grupo de viajantes do tempo chega em 2051 para entregar uma mensagem urgente: trinta anos no futuro, a humanidade está perdendo uma guerra global contra uma espécie alienígena mortal.",
        imagem: "guerra_amanha.jpg"
      },
      {
        id: 4,
        name: "Harry Potter e o Prisioneiro de Azkaban",
        sinopse: "É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione têm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black. Após doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort...",
        imagem: "harry_potter.jpg"
      },
      {
        id: 5,
        name: "John Wick 4: Baba Yaga",
        sinopse: "Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim.",
        imagem: "john_wick.jpg"
      },
      {
        id: 6,
        name: "Jumanji: Bem-vindo à Selva",
        sinopse: "Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.",
        imagem: "jumanji.jpg"
      },
      {
        id: 7,
        name: "Power Rangers - O Filme",
        sinopse: "A jornada de cinco adolescentes que devem buscar algo extraordinário quando eles tomam consciência que a sua pequena cidade Angel Grove - e o mundo - estão à beira de sofrer um ataque alienígena. Escolhidos pelo destino, eles irão descobrir que são os únicos que poderão salvar o planeta...",
        imagem: "power_rangers.jpg"
      },
      {
        id: 8,
        name: "Pantera Negra: Wakanda Para Sempre",
        sinopse: "Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa.",
        imagem: "wakanda_forever.jpg"
      }
  ]
}
