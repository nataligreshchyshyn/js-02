//for (let i = 0; i < 100; i++) {
//    if (i === 0) {
//        continue;
//    }
//    if ( (i !== 0) && (i % 2 === 0) ) {
//       document.write(i);
//        document.write('<br>');
//    }
//}

//let i = 0;

//while (i < 100) {
//   console.log(i); 
//   i++
//}

//let a;
//do {
//   alert('Please enter a number');
//   a = parseFloat(prompt('Enter a')); 
//} while (isNaN(a));

let products = [];
products.push('Tesla Model X');//N0
products.push('Tesla Model 3');//N1
products.push('Tesla Model S');//N2

console.log(products.length);
products[3] = 'Chevy Camaro';
products[30] = 'Tesla Motors Roadster';
//console.log(products[3]);

//for (let i = 0; i < products.length; i++) {
//    console.log(products[i]);
//}

//products.forEach(console.log);

//products.forEach( function(el){
//    console.log(el)
//} );

products.forEach( el => console.log(el) );

//let teslaX = {};
//teslaX.make = 'Tesla';
//teslaX.model = 'X';
//teslaX.price = 100000;
//teslaX.run = function() {
//    console.log(`Car ${teslaX.make} ${teslaX.model} is running`);
//}

//teslaX.run();

//let chevyCamaro = {
//    make: 'Chevrolet',
//    model: 'Camaro',
//    price: 50000
//}

function run() {
    console.log(`Car ${this.make} ${this.model} is running`);
}

let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 100000;
teslaX.run = run;

teslaX.run();

let chevyCamaro = {
    make: 'Chevrolet',
    model: 'Camaro',
    price: 50000,
    run: run
};

chevyCamaro.run();

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.run = run;
    return this;
}

let hummer = new Car('GM', 'Hummer 1', 150000);
// let this = {}
hummer.run();

let hummer2 = Object.create(hummer);
hummer2.model = 'Hummer 2';
hummer2.price = 100000;
hummer2.run();

class SuperCar {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }
    run() {
        console.log(`Car ${this.make} ${this.model} is running`);
    }
}

let ferrari = new SuperCar('Ferrari', 'F430', 2000000);
ferrari.run();
