let nomeEvt = ["0 - Palestra de Java", "1 - Palestra de JavaScript", "2 - Convensão de Portugol", "3 - Palestra de C#", "4 - Palestra de Node.js"]
let numEvt = 4 // número do evento que deverá ser escolhido
let dEvent = [20211010, 20221205, 20051022, 20010911, 20350101]
let part0 = "Palestrante: João; Participantes: José, Jorge, Jesus"
let part1 = "Palestrante: Gilberto; Participantes: Gustavo, Guilherme, Gomes, Giulia"
let part2 = "Palestrante: Romulo; Participantes: Roberto, Jorge, Romário"
let part3 = "Palestrante: Tevez; Participantes: José, Juca, Messi"
let part4 = "Palestrante: Garrincha; Participantes: Bebeto, Ronaldo, Zacarias"
let nPart = 10 // digite o número de participantes que temo evento
let idade = 18 // digite aqui sua idade
let dAtual = 20211011 // digite aqui a data atual nesse padrão numérico "AAAAMMDD" -> ANO, MÊS E DIA

// console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])

switch (numEvt) {
    case 0:
        console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])
        console.log(part0)
        break;
    case 1:
        console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])
        console.log(part1)
        break;
    case 2:
        console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])
        console.log(part2)
        break;
    case 3:
        console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])
        console.log(part3)
        break;
    case 4:
        console.log("Escolha número do evento: " + nomeEvt[numEvt] + " data: " + dEvent[numEvt])
        console.log(part4)
        break;
    default:
        console.log("Número de evento não disponível")
        break;
}

if (numEvt >= 0 && numEvt <= nomeEvt.length) {

    if (dEvent[numEvt] > dAtual) {

        if (idade >= 18) {
            console.log("Idade: " + idade + " anos")

            if (nPart < 100) {
                nPart = nPart++
                console.log("Cadastro Efetuado")
            } else {
                console.log("Limite de cadastro excedido")
            }
        } else {
            console.log("Idade " + idade + " anos. Não permitido para menor de idade")
        }
    }    
    else {
            console.log("Evento já realizado")
        }
    
}
else {
    console.log("Digite número de evento válido")
}
