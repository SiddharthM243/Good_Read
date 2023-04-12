import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
    const { title,image} = props.data;
    return (
        <>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <img src={image} className="card-img-top" alt="image" />
                        <h5 class="card-title">{title}</h5>
                        {/* <span class="card-title"><b>{author}</b></span> */}
                        {/* <p class="card-text">{description}</p>
                        <p>Rating: {rating}</p> */}
                        <Link to="/bookdetail" class="btn btn-dark btn-block">Show Details</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Book;