

function escolha1(opcao){
     opcao = prompt('Você foi dar uma volta para pensar no que fazer e no caminho encontra um lindo Girassol e pensa em entregar para Fiona. O que você vai faze? \n Digite 1- Embora inseguro e envergonhado por ser um Ogro, eu vou até Fiona entrega-la essa flor e tentar dizer que gosto dela \n Digite 2- A Fiona é uma linda princesa e jamais aceitaria ficar com um ogro verde e feio como eu, é melhor eu esquecer essa ideia de maluco e fazer o que tenho que fazer!')
    if(opcao == 1){
        return location = ('./shrekRight1.html')
    }
    if(opcao == 2){
        return location = ('./shrekOver1.html')
    }
}
function escolha2(opcao){
     opcao = prompt("1-Você fica muito bolado e com raiva! Assim que amanhece você chama a tropa do Lorde Farquaad para ir buscar a princesa logo! \n Digite 2 - Você está confuso e mais inseguro do que nunca, mas acha que não pode deixar essa história ficar só por isso e decide conversar com o Burro")
    if(opcao == 1){
        return location = ('./shrekOver2.html')
    }
    if(opcao == 2){
        return location = ('./shrekRight2.html')
    }
}
function escolha3(opcao){
     opcao = prompt("1-Não é possível que tudo so passe de uma infeliz concidência né?Essse Burro só não quer contar a verdade! É claro que a princesa me acha um monstro e feio! Quem mais poderia ser?? \n 2-Vou conversar com a Fiona, ela é a primeira pessoa que eu me apaixonei e sempre foi muito gentil comigo! Se ela falou essas coisas de mim, vai ter que falar na minha cara!")
    if(opcao == 1){
        return location = ('./shrekOver3.html')
    }
    if(opcao == 2){
        return location = ('./shrekRight3.html')
    }
}

function recomecar() {
    return location = ('../index.html')
}