const numArray = [1, 2, 3, 4, 5]

for(let i = 0; i < numArray.length; i++){
    const number = numArray[i]
    primeNum(number)
}
function primeNum(number){
    if (number){
        if(number == 1){
            document.write("1 no es primo.<br>")
        }else if(number === 2){
            document.write("2 es primo.<br>")
        }else{
            for(let i = 2; i < number; i++){
                if(number % i != 0){
                    document.write(number + " es primo.<br>")
                    break
                }else{
                    document.write(number + " no es primo.<br>")
                    break
                }
            }
        }
    }
}