

class Bank {
    name = "Subhra"
    #pin = "0010"

    getInfo(){
        console.log(this.#pin)
    }
}

const t = new Bank();

console.log(t.pin);
t.getInfo()
