//My Personal library
const books = 
{

        title: "Introduction to software testing",
        description: "Quality Assurance",
        number: 300,
        authour: "Wasilat",
        reading: false,
        toggleReadingStatus: function(){
            if (this.reading === true){
                this.reading = false;
            }
            else{
                this.reading = true;
            }
        }
    }
    
books.toggleReadingStatus();
console.log(books.reading);
