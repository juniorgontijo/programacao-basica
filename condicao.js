function compararNumberos(num1, num2) {
    if (num1 < num2) {
        return "Numero 2 é maior"
    } else if (num1 == num2) {
        return "Os numeros sao iguais"
    }   else {
        return "Numero 1 é maior"
        }
    
}

function numberCheck(numero) {
    if (numero > 0) {
        return "O numero é positivo"
        } else if (numero < 0) {
            return "O numero é negativo"
            } else {
                return "O numero é zero"
}
}

function dayofTheWeek(dia){
    switch (dia){
    case 1:
        return "Sunday"
        case 2: 
            return "Monday"
            case 3:
                return "Tuesday"
                case 4:
                 return "Wednesday"
                    case 5:
                        return "Thursday"
                        case 6:
                         return "Friday"
                            case 7:
                                return "Saturday"
                                default:
                                    return "Dia da semana nao encontrado!"
}
}
console.log(dayofTheWeek(10))