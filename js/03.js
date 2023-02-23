var valores = [true, 5, false, "hola", "adios", 2]

const word1 = valores[3].length
const word2 = valores[4].length

if(word1 > word2){
    alert(valores[3] + " es mayor que " + valores[4])
}else{
    alert(valores[4] + " es mayor que " + valores[3])
}

document.write(`Suma: ${valores[1] + valores[5]}` + "<br>")
document.write(`Resta: ${valores[1] - valores[5]}` + "<br>")
document.write(`Multiplicación: ${valores[1] * valores[5]}` + "<br>")
document.write(`División: ${valores[1] / valores[5]}` + "<br>")