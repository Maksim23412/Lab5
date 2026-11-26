// Родительский конструктор Animal
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

// Метод родительского конструктора
Animal.prototype.speak = function() {
    console.log(`${this.name} издаёт звук: ${this.sound}`);
};

// Дочерний конструктор Dog
function Dog(name) {
    Animal.call(this, name, "Гав");
}

// Наследование прототипа Animal
Dog.prototype = Object.create(Animal.prototype);

// Восстанавливаем constructor
Dog.prototype.constructor = Dog;

// Переопределяем метод speak()
Dog.prototype.speak = function() {
    console.log(`${this.name} говорит: Гав!`);
};

// Создаём объекты
const animal = new Animal("Кошка", "Мяу");
const dog = new Dog("Бобик");

// Проверяем методы
console.log("Работа методов:");
animal.speak();
dog.speak();

// Проверяем наследование через instanceof
console.log("\nПроверка instanceof:");
console.log("dog instanceof Dog:", dog instanceof Dog);
console.log("dog instanceof Animal:", dog instanceof Animal);
console.log("animal instanceof Animal:", animal instanceof Animal);

// Проверяем цепочку прототипов
console.log("\nПроверка Object.getPrototypeOf:");
console.log(
    Object.getPrototypeOf(dog) === Dog.prototype
);
console.log(
    Object.getPrototypeOf(Dog.prototype) === Animal.prototype
);
