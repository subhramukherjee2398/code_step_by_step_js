
let key = "address" // for dynamic
const obj = {
    name : "subhra",
    getData : function(){
        return `this is ${this.city}`
    },
    [key] : 'Noida'
}
obj.city = "kolkata"
console.log(obj.getData())