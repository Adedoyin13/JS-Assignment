console.log('Assignment');

// Question One

const numbers = [10, 20, 30, 40, 50]

const doubleFn = () => {
    const doubledNum = numbers.map((num) => num * 2)
    return doubledNum
}
console.log(doubleFn()); 


// The map() method is used to map through the array of numbers, so the parameter (num) which is representing individual elements in the array is assigned to it and used to multiply the elements in the array by two
// The map() method is used to map through the array of numbers, while using the callback function to execute the operation


// Question Two

const getUserName = () => {
    localStorage.setItem('userName', JSON.stringify({name: 'Rodiyat'}))

    const getName = JSON.parse(localStorage.getItem('userName'));

    console.log(getName);
    console.log(getName.name);
}

getUserName()

// The web storage API handles storing data by storing them in the user's browser for a short period of time, which is until the page is reloaded or the browser is closed
// The web storage API handles receiving data by calling the key of the data that is to be received.

// Question Three

class Car {
    constructor(maker, model, color, year) {
        this.maker = maker
        this.model = model
        this.color = color
        this.year = year
    }
    carDes () {
        console.log((`${this.maker} is the maker of ${this.color} ${this.model} in ${this.year}`));
    }
}

const carInfo = new Car ('Aliu', 'Lexus', 'Gray', '2018')
carInfo.carDes()

const carInfo1 = new Car ('Abdullah', 'BMW', 'Red', '2016')
const carInfo2 = new Car ('Naheem', 'Sedan', 'White', '2020')
const carInfo3 = new Car ('Soliu', 'Toyota', 'Black', '2010')
const carInfo4 = new Car ('Seyi', 'Lamborghini', 'Blue', '2022')

carInfo1.carDes();
carInfo2.carDes();
carInfo3.carDes();
carInfo4.carDes();



// Question Four

const employees = [
    {name : 'Naheem', salary : 300},
    {name : 'Soliu', salary : 250},
    {name : 'Aliu', salary : 200},
    {name : 'Abdullah', salary : 150},
    {name : 'Seyi', salary : 100},
]

const increaseSalary = () => {
    const updateSalary =  employees.map((employee) => ({name : employee.name, salary : employee.salary * 10 / 100 + employee.salary}))
    console.log(updateSalary);
}
increaseSalary()



// Question Five

const customerOrder = [
    {
        customerName : 'John',
        items : ['Laptop', ' Mouse', ' Keyboard']
    },
    {
        customerName : 'Sarah',
        items : ['Monitor', ' Headphones']
    },
    {
        customerName : 'Michael',
        items : ['Phone', ' Charger', ' Case']
    },
    {
        customerName : 'Anna',
        items : ['Tablet']
    }
]

customerOrder.forEach((customer) => {
    console.log(`customer: ${customer.customerName}`);
    console.log(`Items: ${customer.items}`);
})



// Question Six

const emailLabel = document.createElement('label')
emailLabel.textContent = 'Email: '

const emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.placeholder = 'ex@gmail.com'

const telLabel = document.createElement('label')
telLabel.textContent = 'Telephone No: '

const telInput = document.createElement('input')
telInput.type = 'tel'
telInput.placeholder = '08080910750'

const container = document.getElementById('myCon')

container.appendChild(emailLabel)
container.appendChild(emailInput)
container.appendChild(telLabel)
container.appendChild(telInput)


document.getElementById('addButton').addEventListener('click', function() {
    const fName = document.getElementById('inputFName').value;
    const lName = document.getElementById('inputLName').value;
    const inputE = document.getElementById('inputEmail').value;
    const inputNo = document.getElementById('inputTel').value;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = fName;
    cell2.textContent = lName;
    cell3.textContent = inputE;
    cell4.textContent = inputNo;

    document.getElementById('inputFName').value = '';
    document.getElementById('inputLName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputTel').value = '';
});


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr."
];

document.getElementById('quoteBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('displayQuote').textContent = randomQuote;
});


