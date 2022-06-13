let wignebi = [ 
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
        get daysAgo(){
            let today = new Date();
            let year = (today - this.dateOfRead)/ (1000 * 60 * 60 * 24);
            return Math.round(year)
            
        }
         
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
        get daysAgo(){
            let today = new Date();
            let year = (today - this.dateOfRead)/ (1000 * 60 * 60 * 24);            
            return Math.round(year)
        }
    },
    {
        author: 'Jhon',
        title:  'The Hunger Games', 
        haveRead: false,
        dateOfRead: NaN,
        get daysAgo(){
            let today = new Date();
            let year = (today - this.dateOfRead)/ (1000 * 60 * 60 * 24);            
            return Math.round(year)
        }
    }
]; 
function readingStatus(books){
    for(let i = 0; i < books.length; i++){
        if(books[i].haveRead === true){
            console.log(books[i].author + " have read " + books[i].title + " book " + " " + books[i].daysAgo + " days ago")
         }else{
             console.log(books[i].author + " haven't read " +  " book "  + books[i].title + ' yet')
         }
    }
}
readingStatus(wignebi)