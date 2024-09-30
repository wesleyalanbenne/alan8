function setup() {//configuracao
  createCanvas(400, 400);//tamanho da tela
}

function inicializaCores(){//função inicializarColors
  background("white");//cor do fundo
  fill("black");//cor da letra
  textSize(64);//tamanho da letra
  textAlign(CENTER,CENTER);//posiçao do texto
}

function draw() {//desenhar
  inicializaCores();//inicializa cores
  
  let maximo = width;//maximo de largura
  let minimo = 1;//começa no 1
  //mouseX, 0, width ==> 0, palavra.length
  let palavra = "andante";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);//o que faz as letras aparecerem as letras na tela
  //console.log(quantidade);
  let parcial = palavra.substring(0,quantidade);//volta no 0
  text(parcial,200,200);// local do texto
}
