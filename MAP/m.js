

let obj = {
    name : "ABC",
    10:'number',
    true:'boolean'
}

let data = new Map([
    ['name','Subhra'],
    [10,'number map'],
    [true,'boolean']
])

console.log(obj.name)
console.log(data.get('name'))
//console.log(obj.10)  cannnot access number  so we have to use bracket notation
console.log(obj['10'])
console.log(data.get(10))
console.log(obj.true) // created this true as a string
console.log(data.get(true))