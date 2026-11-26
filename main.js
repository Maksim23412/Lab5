const Book = require('./book');
const Student = require('./student');
const { Animal, Dog } = require('./animal');


console.log("========== ЗАДАНИЕ 1 ==========");

console.log(Book.getInfo());

Book.genre = "Фэнтези";
console.log("Жанр книги:", Book.genre);

delete Book.year;

console.log("Свойство year существует:", "year" in Book);
console.log("Свойство title существует:", Book.hasOwnProperty("title"));


console.log("\n========== ЗАДАНИЕ 2 ==========");

const student1 = new Student("Иван", "ИС-21", [80, 90, 75]);
const student2 = new Student("Анна", "ИС-22", [50, 55, 60]);

console.log(student1.name);
console.log("Средний балл:", student1.getAverage());
console.log("Сдал:", student1.isPassed());

console.log(student2.name);
console.log("Средний балл:", student2.getAverage());
console.log("Сдал:", student2.isPassed());

console.log(
    "Методы общие:",
    student1.getAverage === student2.getAverage
);


console.log("\n========== ЗАДАНИЕ 3 ==========");

const animal = new Animal("Кошка", "Мяу");
const dog = new Dog("Бобик");

animal.speak();
dog.speak();

console.log("Собака является Dog:", dog instanceof Dog);
console.log("Собака является Animal:", dog instanceof Animal);

console.log(
    "Прототип собаки:",
    Object.getPrototypeOf(dog) === Dog.prototype
);

console.log(
    "Наследование от Animal:",
    Object.getPrototypeOf(Dog.prototype) === Animal.prototype
);
