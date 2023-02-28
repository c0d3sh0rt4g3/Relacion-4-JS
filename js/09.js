const numArray = [1, 2, 3, 4, 5]
document.write(numAvg(numArray))

function numAvg(numArray) {
    let elementSum = 0;
    for (let i = 0; i < numArray.length; i++) {
        elementSum += numArray[i]
    }
    const avg = elementSum / numArray.length;
    return avg
  }
  