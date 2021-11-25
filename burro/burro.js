function escolha1(opcao){
    opcao = prompt('Você está sozinho com o Dragão Fêmea, ela já cuspiu fogo e destruiu tudo a sua volta! O que fazer? \n 1-Gritar desesperadamente pedindo para que ela pare e tenha misericórdia de um misero burro. \n 2-Hmm, vou elogiar esses belos dentes')
   if(opcao == 1){
       return location = ('./burroOver1.html')
   }
   if(opcao == 2){
       return location = ('./burroRight1.html')
   }
}
function escolha2(opcao){
    opcao = prompt('1-Que loucura elogiar um Dragão, eu preciso sair daqui! Tento distrai-la e sair correndo \n 2-Parece que está dando certo, e se eu elogiar seus belos olhos de Dragão Fêmea? ')
   if(opcao == 1){
       return location = ('./burroOver2.html')
   }
   if(opcao == 2){
       return location = ('./burroRight2.html')
   }
}
function escolha3(opcao){
    opcao = prompt('1- Não combina nenhum pouco um burro e uma dragão fêmea, vou tentar falar que ela não faz muito meu tipo e meter o pé daqui o quanto antes. \n 2-Eu sou pequeno, mas não sou bobo! Imagina ter uma Dragão Fêmea como esposa? Irado, apenas! Invisto na minha lábia e conquisto de vez a Dragão Fêmea')
   if(opcao == 1){
       return location = ('./burroOver3.html')
   }
   if(opcao == 2){
       return location = ('./burroRight3.html')
   }
}
function recomecar() {
    return location = ('../index.html')
}