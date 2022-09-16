const books = [
    {
        title: "Processes to startup a Fintech Company",
        description: "Fintech Startup Manual",
        number: 100,
        authour: "Damilola Aderinto",
        reading: false
    },
    {
        title: "Introduction to Software Testing",
        description: "Technology book",
        number: 150,
        authour: "Wasilat Braimah",
        reading: true
    },
    {
        title: "Introduction to Programming Language",
        description: "Programming",
        number: 200,
        authour: "Chibuzor Osifor",
        reading: false
    },
    {
        title: "Introduction to Product Management",
        description: "Product Management",
        number: 205,
        authour: "Ahmed Basit",
        reading: false
    }
];


console.log ("***********METHOD 1 OUTPUT*******************");
console.log ("*******************************************");

for(let i =0; i < books.length; i++){
    if(books[i].reading === true){
        console.log(books[i])
    }
}

console.log ("***********METHOD 2 OUTPUT*******************");
console.log ("*******************************************");


let booksReading = [];
for(let i =0; i < books.length; i++){
    if(books[i].reading === true){
        booksReading.push(books[i])
    }
}
console.log(booksReading);

console.log ("***********METHOD 3 OUTPUT*******************");
console.log ("*******************************************");

let booksReadingg = books.filter(function (e){
    return e.reading === true
})
console.log(booksReadingg)