var studentMarks = []

let firstEvMark = parseFloat(prompt("Introduzca la nota de la 1 evaluación:"))
let secondEvMark = parseFloat(prompt("Introduzca la nota de la 2 evaluación:"))
let thirdEvMark = parseFloat(prompt("Introduzca la nota de la 3 evaluación:"))

if(firstEvMark && secondEvMark && thirdEvMark){
    if(Math.sign(firstEvMark) == 1 && Math.sign(secondEvMark) == 1 && Math.sign(thirdEvMark) == 1){
        if(firstEvMark <= 10 && secondEvMark <= 10 && thirdEvMark <= 10){
            studentMarks.push(firstEvMark, secondEvMark, thirdEvMark)
            const avg = (studentMarks[0] + studentMarks[1] + studentMarks[2])/3
            alert("La media del alumno es " + avg)
        }alert("ERROR: No se admiten números mayores que 10.")
    }else{
        alert("ERROR: No se admiten notas que sean números negativos")
    }
}else{
    alert("ERROR: Se ha introducido una nota que no es válida.")
}