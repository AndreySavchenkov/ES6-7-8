const person = {
    age: 26,
    name: 'Irina',
    'country-live': 'Russia',
    print: () => 'Person',
    toString() {
        return Object
        .keys(this)
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ')
    }
}

console.log(person.toString())
console.log(person.print())