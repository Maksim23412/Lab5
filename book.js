const Book = {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    pages: 432,

    getInfo: function() {
        return `Название: ${this.title}, автор: ${this.author}, год: ${this.year}, страниц: ${this.pages}`;
    }
};

// Вывод информации о книге
console.log("Информация о книге:");
console.log(Book.getInfo());

// Добавление нового свойства
Book.genre = "Фэнтези";

console.log("\nДобавленное свойство:");
console.log("Жанр:", Book.genre);

// Удаление существующего свойства
delete Book.year;

console.log("\nПроверка удалённого свойства:");
console.log("Год издания:", Book.year);

// Проверка наличия свойств через оператор in
console.log("\nПроверка оператора in:");
console.log("title" in Book);
console.log("year" in Book);
console.log("genre" in Book);

// Проверка через hasOwnProperty()
console.log("\nПроверка hasOwnProperty():");
console.log(Book.hasOwnProperty("title"));
console.log(Book.hasOwnProperty("year"));
console.log(Book.hasOwnProperty("genre"));

module.exports = Book;
