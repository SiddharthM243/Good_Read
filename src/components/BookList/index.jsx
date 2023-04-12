import React from "react";
import BookData from "../../data/books";
import Book from "../BookList/Book";

const BookList = () => {


    return (
        <>
            <h2 className="text-center">All Books</h2>
            <div class="row">
                {
                    BookData.map((book) => <Book data={book} />)
                  
                }
            </div>



        </>

    )
}


export default BookList;