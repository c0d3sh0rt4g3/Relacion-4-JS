const numArray = [1, 2, 3, 4, 5]
document.write(sumOne(numArray))

function sumOne(numArray){
  for(let i = 0; i < numArray.length; i++){
      numArray[i] = numArray[i] + 1
  }
  return numArray
}