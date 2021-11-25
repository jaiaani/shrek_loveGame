function escolha1(opcao) {
    opcao = prompt('Em um belo dia, um bravo cavaleiro cai do nada do seu telhado, todo ferrado. Você está em sua cama. O que fazer?\n1 - Gritar muito assustada e bater nele com um machado\n 2 - Se ajeitar na cama para esperar que esse bravo cavaleiro a beije, romanticamente')
        if (opcao == 1) {
            return location = ('./fionaOver1.html')
        }
        if (opcao == 2) {
            return location = ('./fionaRight1.html')
        }
    }

    function escolha2(opcao) {
        opcao = prompt('1-Fugir \n 2-Só deixa pra ver no que vai dar ')
        if (opcao == 1) {
            return location = ('./fionaOver2.html')
        }
        if (opcao == 2) {
            return location = ('./fionaRight2.html')
        }
    }

    function escolha3(opcao) {
        opcao = prompt('1- Não importa muito de onde veio, você pega a flor no chão e a poẽ num copo com água \n 2- Você fica se perguntando quem poderia ter deixado aquela flor lá, e só te vem um nome na cabeça: Shrek')
        if (opcao == 1) {
            return location = ('./fionaOver3.html')
        }
        if (opcao == 2) {
            return location = ('./fionaRight3.html')
        }
    }
    function continuar(){
        return location = ('./fionaKeep.html')
    }

    function recomecar() {
        return location = ('../index.html')
    }