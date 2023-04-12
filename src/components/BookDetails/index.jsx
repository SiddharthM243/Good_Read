import React from "react";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
    const { title,image,author,description,rating} = props.data;
    return (
        <>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <img src={image} className="card-img-top" alt="image" />
                        <h5 class="card-title">{title}</h5>
                        <span class="card-title"><b>{author}</b></span>
                        <p class="card-text">{description}</p>
                        <p>Rating: {rating}</p>
                        <Link to="/" class="btn btn-dark btn-block">Back</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default BookDetails;