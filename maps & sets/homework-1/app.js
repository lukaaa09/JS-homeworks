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

    update(id, obj){
        if(arguments.length !== 2) throw new Error('need to provide 2 arguments')
        if(typeof id !== 'string') throw new Error('update method id argument isnt string')
        if(!this.map.has(id)) throw new Error('no item with this id to update')
        if(typeof obj !== 'object') throw new Error('2nd argument is not an object')

        let keyArr = Object.getOwnPropertyNames(obj)
        
        keyArr.forEach(key => {
            if(!this.map.get(id).hasOwnProperty(key)) throw new Error('not a valid object passed as argument')
        })
        
        let updatedUser = {...this.map.get(id), ...obj}
        this.validateObj(updatedUser)
        this.map.set(id, updatedUser)
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
