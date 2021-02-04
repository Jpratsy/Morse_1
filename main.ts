input.onButtonPressed(Button.A, function () {
    Letra = "" + Letra + "."
})
input.onButtonPressed(Button.AB, function () {
    Espacio += 1
    if (Espacio == 1) {
        makerbit.showStringOnLcd1602("" + (Letras[Codigo.indexOf(Letra)]), Posicion, 1)
        Posicion += 1
        if (Posicion > 31) {
            Posicion = 0
        }
        Letra = ""
        Espacio = 0
    } else {
        Posicion += 1
        if (Posicion > 31) {
            Posicion = 0
        }
        Letra = ""
        Espacio = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Letra = "" + Letra + "-"
})
let Posicion = 0
let Espacio = 0
let Letra = ""
let Codigo: string[] = []
let Letras: string[] = []
makerbit.connectLcd(39)
makerbit.clearLcd1602()
Letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ";", ":", "?", "!", "WAIT", "UNDERSTAND", "DNU", "CALL", "FINISH"]
Codigo = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".....", ".-.-.-", ".,.,.,", "---...", "..--..", "--..--", "-..", "...-.", "-...-.", "-.-.-", ".-.-."]
basic.forever(function () {
	
})
