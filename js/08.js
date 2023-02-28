const numArray = [1, 2, 3, 4, 5]

let value = Number(prompt("Introduzca un número entero:"))

if(!Number.isNaN(value)){
    if(Number.isInteger(value)){
        if(Math.sign(value) === 1){
            document.write(sumOne(numArray, value))
        }else{
            alert("ERROR: Solo se admiten números positivos.")
        }
    }else{
        alert("ERROR: Solo se admiten números enteros.")
    }
}else{
    alert("ERROR: Solo se admiten números.")
}

function sumOne(numArray, value){
    for(let i = 0; i < numArray.length; i++){
        numArray[i] = numArray[i] + value
    }
    return numArray
}