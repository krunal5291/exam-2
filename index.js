let books = JSON.parse(localStorage.getItem('books')) ||[];




const bookmark=(e)=>{

    e.preventDefault();

    let book={
        img:document.getElementById("img").value,
        titel:document.getElementById("titel").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value

    }

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books))
}



document.getElementById("form").addEventListener("submit",bookmark )