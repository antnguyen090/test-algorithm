let arrNumber = [1,2,3,4,5]
let sumArr    = arr =>{
  let sum = 0
  arr.forEach(number=>{
    sum += number
  })
  return sum
}

let sumArrExcept    = (arr, numberExcept) =>{
  let sum = 0
  arr.forEach(number=>{
    if(number == numberExcept) return
    sum += number
  })
  return sum
}

let minNumber = arr =>{
  let temp = arr[0]
  for(let i=1; i< arr.length; i++){
    if(temp > arr[i]){
      temp = arr[i]
    }
  }
  return temp
}

let maxNumber = arr =>{
  let temp = arr[0]
  for(let i=1; i< arr.length; i++){
    if(temp < arr[i]){
      temp = arr[i]
    }
  }
  return temp
}

let getEvenElements = arr =>{
  let tempArr = []
  arr.forEach(number=>{
    if(number%2 == 0){
      tempArr.push(number)
    }
  })
  return tempArr
}

let getOddElements = arr =>{
  let tempArr = []
  arr.forEach(number=>{
    if(number%2 != 0 ){
      tempArr.push(number)
    }
  })
  return tempArr
}

let miniMaxSum = arr =>{
  return `${sumArr(arr)-maxNumber(arr)} ${sumArr(arr)-minNumber(arr)}`
}


console.log(sumArr(arrNumber))
console.log(sumArrExcept(arrNumber, 3))
console.log(minNumber(arrNumber))
console.log(maxNumber(arrNumber))
console.log(getEvenElements(arrNumber))
console.log(getOddElements(arrNumber))
console.log(miniMaxSum(arrNumber))