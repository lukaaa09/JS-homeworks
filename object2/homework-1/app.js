const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};
Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value: function(obj) {
        let objProperties = Object.getOwnPropertyNames(obj)
        for(let key of objProperties){
          if(typeof obj[key] !== 'object') this[key] = obj[key]
          else if(Array.isArray(obj[key])) this[key] = this[key].concat(obj[key])
          else this[key].mergeDeepRight(obj[key])
        }    

    },
    enumerable: false,
});
data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});
console.log(data)




