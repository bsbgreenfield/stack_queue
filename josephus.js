class Person {
    constructor(val) {
        this.val = val
        this.next = null
        this.dead = false
    }
}
class People {
    constructor(num, skip) {
        this.skip = skip
        this.size = 0;
        this.first = null
        this.last = null
        this.living = []
        for (let i = 1; i <= num; i++){
            let addedPerson = this.addPerson(i)
            this.living.push(addedPerson)
            this.size ++
            if (i == num) addedPerson.next = this.first
        }
    console.log(this.living)
    }

    addPerson(val){
        let newPerson = new Person(val)
        if (this.size == 0){
            this.first = newPerson
            this.last = newPerson
        }
       else{
        this.last.next = newPerson
        this.last = newPerson
       }
       return newPerson
    }
    killPerson(person){
        person.dead = true;
        let index = this.living.indexOf(person)
        this.living.splice(index, 1)
    }

    findSurvivor(){
        let currPerson = this.living[0]
        let placesToSkip = this.skip
        while (this.living.length > 1){
            while( placesToSkip > 0){
                if (!currPerson.dead){
                    placesToSkip --;
                    // if the counter gets to zero, break early before switiching to the next person
                    if (placesToSkip == 0) break;
                    // otherwise, let the next loop evaluate whether the person is alive or dead and increment based on that
                    currPerson = currPerson.next
                }
                else{
                    currPerson = currPerson.next
                    continue
                }
            }
            this.killPerson(currPerson)
            currPerson = currPerson.next
            placesToSkip = this.skip
        }
        console.log(...this.living)
    }
}

let p = new People(10, 3)
p.findSurvivor()