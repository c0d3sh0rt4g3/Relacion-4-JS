const numArray = [1, 2, 3, 4, 5]
const primeNumArray = []
for(let i = 0; i < numArray.length; i++){
    const number = numArray[i]
    if(primeNum(number)){
        primeNumArray.push(number)
    }
}
document.write(primeNumArray)
function primeNum(number){
    if (number){
        if(number == 1){
            return false
        }else if(number === 2){
            return true
        }else{
            for(let i = 2; i < number; i++){
                if(number % i != 0){
                    return true
                }else{
                    return false
                }
            }
        }
    }
}