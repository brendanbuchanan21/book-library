

//to display the modal for book submission
const addNewBook = document.getElementById('add-book').addEventListener('click', function() {
    document.getElementById('book-modal').style.display = 'flex'; 
});

const deleteSubmission = document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('book-modal').style.display = 'none';
});
 

//develop the book function

function addBook(title, author, pages) {
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    

    newBook.innerHTML = `<h2>${title}</h2>
    <h4>${author}</h4>
    <p>Pages: ${pages}</p>
    <p>Read Book: <span class="read-status">No</span></p>
    <button class="status-button">Change Status</button>
    <button class="delete-button">Delete Book</button>`;

    document.getElementById('main-container').appendChild(newBook);

    newBook.querySelector('.delete-button').addEventListener('click', function() {
        newBook.remove();
    });

    newBook.querySelector('.status-button').addEventListener('click', function() {
        const statusSpan = newBook.querySelector('.read-status');
        if (statusSpan.textContent === 'No') {
            statusSpan.textContent = 'Read';
        } else {
            statusSpan.textContent = 'No';
        }
    });

};



//function that handles the submition of the book to the library

function handleBookSubmit() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;

    if(title && author && pages) {
        addBook(title, author, pages);
    } else {
        alert('Please fill out all fields!');
    }
//hide modal and reset form
    document.getElementById('book-modal').style.display = 'none';
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-pages').value = '';
};
   
    document.getElementById('submit-book').addEventListener('click', handleBookSubmit);


  
 