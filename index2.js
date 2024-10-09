// Определяем объект computer
let computer = {
    name: "Asus",
    model: "Rog Strix",
    date: "2023-01-15", // допустим, добавим дату
    capacity: "1024GB"
};

// Определяем объект phone
let phone = {
    name: "Samsung",
    model: "Galaxy S21",
    date: "2021-02-11", // также добавим дату
    capacity: "256GB"
};

// Создаем основной объект good
let good = {
    // Метод fullInfo возвращает информацию из объектов computer и phone
    fullInfo: function() {
        return `Компьютер: ${this.computer.name} ${this.computer.model}, 
        Дата: ${this.computer.date}, 
        Вместимость: ${this.computer.capacity} | 
        Телефон: ${this.phone.name} ${this.phone.model}, 
        Дата: ${this.phone.date}, 
        Вместимость: ${this.phone.capacity}`;
    },
    // Связываем объекты computer и phone с good
    computer: computer,
    phone: phone
};

// Выводим полную информацию в консоль
console.log(good.fullInfo());
