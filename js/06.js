var dias = ["Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

for(var numElements in dias){
    numElements += 1
}
document.write(dias.length + " " + dias + "<br>")
document.write(dias.shift(dias[0]) + "<br>")
document.write(dias.length + " " + dias + "<br>")
dias.push("Sunday")
document.write(dias.length + " " + dias + "<br>")