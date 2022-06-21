let calificacin = parseInt(prompt("Ingrese la calificación","0"));

switch (true) {
    case calificacin <= 3:
        alert("Muy deficiente, su nota es: " + calificacin)
        break;
    case calificacin <= 5:
        alert("Insuficiente, su nota es: " + calificacin)
        break;
    case calificacin == 6:
        alert("Suficiente, su nota es: " + calificacin)
        break;
    case calificacin == 7:
        alert("Bien, su nota es: " + calificacin)
        break;
    case calificacin <= 9:
        alert("Notable, su nota es: " + calificacin)
        break;
    case calificacin > 9:
        alert("Sobresaliente, su nota es: " + calificacin)
        break;
}