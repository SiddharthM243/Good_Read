import React from "react";
import Navbar from "../../components/Navbar"
import BookDetails from "../../components/BookDetails";



const BookDetailPage = () => {


    return (
        <>
            <Navbar />
            <div className="container">
                <BookDetails />

            </div>
        </>
    )
}


export default BookDetailPage;