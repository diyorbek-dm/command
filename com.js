function get() {
  let arr = []

  for (let i = 0; i < Infinity; i++) {
    let getCom = prompt('Введите команду')
    let toArr = getCom?.split(', ')

    if (toArr === null) {
      return
    }

    if (toArr[0] === 'add') {
      arr.push(toArr[1])
      console.log(arr)
    } else if (toArr[1] === undefined) {
      console.log(arr)
    }

    if (toArr[0] === 'del') {
      const del = arr.indexOf(toArr[1])
      arr.splice(del, 1)
      console.log(arr)
    }

    if (toArr[0] === 'stop') {
      console.log(arr.slice(-1))
      break
    }
  }
}

get()
