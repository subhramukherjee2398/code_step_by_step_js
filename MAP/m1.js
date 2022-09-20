// acessing keys of map

let data = new Map([
    ['name','Subhra'],
    [10,'number map'],
    [true,'boolean']
])

console.log(data.keys())

// add new property

data.set('age',100)
data.set({},"this is a object")
data.set(()=>{},"this is an arraow function")

console.log(data.keys())

// acessing values of map

console.log(data.values())

//size

console.log(data.size)

//delete
data.delete('age')

console.log(data.keys())

//has

console.log(data.has('ksajs'))

//loop

data.forEach((a,b)=>{
    console.log(a) // values
    console.log(b) // keys
})

// for of

for([k,v] of data){
    console.log(k)
}