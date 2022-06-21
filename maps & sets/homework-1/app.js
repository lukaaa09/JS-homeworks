class DB {

    constructor() {
        this.map = new Map()
        this.id = 0
    }

    checkigObj(person) {
        if (!person.hasOwnProperty('name') && typeof person.name !== 'string') {
            throw new Error("person object should have property name which is string")
        }
        if (!person.hasOwnProperty('age') && typeof person.age !== 'number') {
            throw new Error("person object should have property age which is number")
        }
        if (!person.hasOwnProperty('country') && typeof person.country !== 'string') {
            throw new Error("person object should have property country which is string")
        }
        if (!person.hasOwnProperty('salary') && typeof person.salary !== 'number') {
            throw new Error("person object should have property salary which is number")
        }
    }

    create(person) {
        this.checkingObj(person);
        this.id++
        this.map.set(this.id, person)
        return this.id

    }

    read(id) {
        if (!id && typeof id !== 'string') {
            throw new Error("warning message")
        }
        if (this.get.map(id)) return this.map.get(id);
        else return null;

    }

    readAll(){
        if(arguments.length > 0) throw new Error('readAll method has an unnecesarry parameter')
        let fullArr = []
        this.map.forEach((value, key) => {
            fullArr.push({
                id: key,
                ...value
            })
        })
        return fullArr
    }

    update(id, Obj) {
        if (typeof id !== 'string') {
            throw new TypeError("first parameter should be a string")
        }
        if (!this.map.has(id)) {
            throw new Error("non existing user!")
        }
        if (typeof Obj !== "object") {
            throw new Error("second parameter should be a string")
        }
        Object.assign(this.map.get(id), Obj)
    }
    delete(id) {
        if (!this.map.get(Obj.id)) {
            throw new Error("warning message");
        } else {
            this.map.delete(id);
            return true;
        }
    }
}

const db = new DB();
