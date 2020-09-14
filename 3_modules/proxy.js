
const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в обьект нет`
    },

    set(target, prop, value) {
        if(value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Длинна должна быть больше двух символов. Сейчас ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator)

console.log(formProxy)