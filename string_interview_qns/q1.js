let str =  "Hello, How are you"

// in a  single array

console.log(str.split());
console.log([str])

// every character in a array

console.log(str.split(''))
console.log([...str])

// on behalf of space

console.log(str.split(" "))

// on behalf of 'a'

console.log(str.split('a'))

// replace any charcter

console.log(str.replace(",","!"))

// replace all H

console.log(str.replace(/H/g,"kkkkkkk"))

// get substring

 console.log(str.substring(6,10))

 // remove first letter
 console.log(str.substring(1,str.length))

 // remove last letter
 console.log((str.substring(0,str.length-1)))

 // access spefic charcter

console.log(str[0])


//reverse string

console.log(str.split("").reverse().join(""))