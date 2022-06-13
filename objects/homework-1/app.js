let wignebi = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN
    }
]; 
function readingStatus(books){
    for(let i = 0; i < books.length; i++){
        if(books[i].haveRead === true){
            console.log(books[i].author + " have read " + books[i].title  + " book")
         }else{
             console.log(books[i].author + " haven't read " + books[i].title + " book" + ' yet'  )
         }
    }
}
readingStatus(wignebi);