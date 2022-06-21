class Validator{   
    isEmail(Email){
        this.Email = Email
        if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email)){
            return true
        }
        return false
    }
    isDomain(domain){
        this.domain = domain
        if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(domain)){
            return true
        }
        return false
    }
    isDate(date){
        this.date = date
        if(/^\d{2}([./-])\d{2}\1\d{4}$/.test(date)){
            return true
        }
        return false
    }
    isPhone(num){
        this.num = num
        if(/^(\([0-9]{3}\) |[0-9]{2}-)[0-9]{2}-[0-9]{2}/.test(num)){
        return true
        }
        return false
    }
}
let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('(995) 55-55-55'));


