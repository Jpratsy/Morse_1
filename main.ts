input.onButtonPressed(Button.A, function () {
    Tecleado = "."
})
let Letra = ""
let Tecleado = ""
let Letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ";", ":", "?", "!", "WAIT", "UNDERSTAND", "DNU", "CALL", "FINISH"]
let Codigo = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".....", ".-.-.-", ".,.,.,", "---...", "..--..", "--..--", "-..", "...-.", "-...-.", "-.-.-", ".-.-."]
basic.forever(function () {
    Letra = "" + Letra + Tecleado
    control.waitMicros(1000000)
    makerbit.showStringOnLcd1602("" + (Letras[Codigo.indexOf(Tecleado)]), makerbit.position1602(LcdPosition1602.Pos1), 16)
})
