let car = {
    year: 1999,
    manufacturer: 'Toyota',
    model: 'Crown',
    color: 'White',
    hp: 280
}

let car2 = Object.assign({}, car)
let car3 = Object.assign({}, car)

car2.color = 'Blue'
car2.manufacturer = 'Dodge'
car2.model = 'Viper'
car2.enginecapacity = '8.0L'
delete car2.hp

car3.manufacturer = 'Nissan'
car3.model = '350Z'
car3.hp = 306
car3.cylindercount = 6
delete car3.year

console.log(car)
console.log(car2)
console.log(car3)