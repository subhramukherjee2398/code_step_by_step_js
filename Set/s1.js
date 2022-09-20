let data = new Set([1, 2, 3, 4, 5, 2, 1, 3, 5])
console.log(data)
console.log(data[0])

// Add values 

data.add("hello")
console.log(data)

//delete values

data.delete("hello")
console.log(data)

//convert array to set

let k = [10, 20, 30]
k = new Set(k)
console.log(k)

//convert set to array

let z = new Set([10, 20, {}, 30, 10, 10])
z = [...z]
console.log(z)