let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let num = []
let str = []
let bool = []
let obj = []
let und = []

arr.filter(item => {
   if (typeof item === 'number') {
      num.push(item)
   }
   if (typeof item === 'string') {
      str.push(item)
   }
   if (typeof item === 'object') {
      obj.push(item)
   }
   if (typeof item === 'boolean') {
      bool.push(item)
   }
   if (typeof item === 'undefined') {
      und.push(item)
   }
})
console.log(num)
console.log(str)
console.log(obj)
console.log(bool)
console.log(und)



let arr2 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22,3,3,3]
let numb = arr2.filter(item => typeof item === 'number')
if(numb.length >= 5){
   console.log('good');
} else{
   console.log('error');
}

console.log(numb);
