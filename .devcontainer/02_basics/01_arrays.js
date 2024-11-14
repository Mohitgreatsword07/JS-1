//  in javascript, array copy copy operation create shallow copies
//  shallow copy of an object is a copy whose properties share the same reference point as those of the source object from which the copy was mas made
//  (heap memory) 
// deep copy properties does not share the reference point
const myArr = [0,1,2,3,4]
myArr.push(6)
// console.log(myArr);
// myArr.unshift(7)
// myArr.shift()
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// mtlb ki simply jo array rehta wo string me convert ho jaata , aur square bracket hatt jaate
const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);





 


