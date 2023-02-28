const array = [1, 2, 3, 4, 5]
document.write(sumarUno(array))

function sumarUno(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + 1
    }
    return array
  }
  