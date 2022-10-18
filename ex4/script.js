console.log("Hello World, I'm script.js!");

const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
   ]
const result1 = books.filter(checkAuthor1);
const result2 = books.filter(checkAuthor2);
console.log(result1);
console.log(result2);


//without George Orwell
function checkAuthor1(book) {
    return book.author != "George Orwell";
}


//Without Orwell and Melville
function checkAuthor2(book) {
    return book.author != "George Orwell" && book.author != "Herman Melville";
}

function changeColor() {
    document.getElementById("content").style.color = "blue";
}

function updateContent() {
    document.getElementById("content").innerHTML = "Bye-Bye World!";
}