
let computer = {
    name: "Asus",
    model: "Rog Strix",
    date: "2023-01-15", 
    capacity: "1024GB"
};


let phone = {
    name: "Samsung",
    model: "Galaxy S21",
    date: "2021-02-11", 
    capacity: "256GB"
};

let good = {

    fullInfo: function() {
        return `Компьютер: ${this.computer.name} ${this.computer.model}, 
        Дата: ${this.computer.date}, 
        Вместимость: ${this.computer.capacity} | 
        Телефон: ${this.phone.name} ${this.phone.model}, 
        Дата: ${this.phone.date}, 
        Вместимость: ${this.phone.capacity}`;
    },
   
    computer: computer,
    phone: phone
};


console.log(good.fullInfo());
