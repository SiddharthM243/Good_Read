import { Link } from 'react-router-dom'
const Category = (props) => {

    const { catId, catName } = props.data;

    return (
        <div className="col-sm-3">
            <Link to='/book'>
                <div className="card">
                    <img src="https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="btn btn-block">{catName}</h5>
                    </div>
                </div>
            </Link> 
        </div>
    );
};

export default Category;