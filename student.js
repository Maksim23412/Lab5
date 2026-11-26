// Функция-конструктор Student
function Student(name, group, grades) {
    this.name = name;
    this.group = group;
    this.grades = grades;
}

// Метод для вычисления среднего балла
Student.prototype.getAverage = function() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
};

// Метод для проверки успеваемости
Student.prototype.isPassed = function() {
    return this.getAverage() >= 60;
};

// Создание экземпляров студентов
const student1 = new Student("Иван", "ИС-21", [80, 90, 75]);
const student2 = new Student("Анна", "ИС-22", [50, 55, 60]);
const student3 = new Student("Пётр", "ИС-21", [90, 85, 95]);

// Вывод информации о студентах
console.log("Информация о студентах:");

console.log(student1.name, "Средний балл:", student1.getAverage());
console.log("Сдал:", student1.isPassed());

console.log(student2.name, "Средний балл:", student2.getAverage());
console.log("Сдал:", student2.isPassed());

console.log(student3.name, "Средний балл:", student3.getAverage());
console.log("Сдал:", student3.isPassed());

// Проверка прототипа
console.log("\nПроверка методов в прототипе:");

console.log("Метод getAverage есть у объекта:", student1.hasOwnProperty("getAverage"));
console.log("Метод getAverage есть в прототипе:", Student.prototype.hasOwnProperty("getAverage"));

console.log("Методы используют одну функцию:",
    student1.getAverage === student2.getAverage);
