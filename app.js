//book class
class Book {
    constructor(title,author,rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
}

class UI{
    static displayBooks(){
        const storedBooks = [{
            title : 'Aadujeevitham',
            author : 'Benyamin',
            rating : '4.5'
        },
        {
            title : 'Balyakalasaghi',
            author : 'Vaikam Mohammed Basheer',
            rating : '3.3'

        }];

        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));

        
    }
    
    static addBookToList(book){
        let list = document.getElementById('book-list')
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.rating}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(tr);
    }
    // static deleteItems(el){
    //     if(el.classList.contains('delete')){
    //         el.parentElement.parentElement.remove();
    //     }
    // }
    static showAlert(message,classColor){
        
        
            
            let div = document.createElement('div');
        div.className = `alert alert-${classColor}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#form-id')
        container.insertBefore(div, form)
        setTimeout(() => {document.querySelector('.alert').remove()},3000);
        
        
        
    }
}


// event display books
document.addEventListener('DOMContentLoaded',UI.displayBooks)

//add books
document.querySelector('#form-id').addEventListener('submit',(e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;
    const ratingDiv = document.getElementById('rating-div')
    
    
    if(title === '' || author === '' || rating === ''){
        
        UI.showAlert('please fill in all the form','danger');

    }else{
        const book = new Book(title,author,rating);
        console.log(book);
        UI.addBookToList(book)
        UI.showAlert('Book added','success')
    }
        
        
        // const p = document.createElement('p')
        // p.innerHTML = 'please give rating below 5'
        // p.className = "paradec"
        // ratingDiv.appendChild(p)

        
    


    
})

document.querySelector('#book-list').addEventListener('click',(e) => {
    console.log(e.target)
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
    // UI.deleteItems(e.target);
})
