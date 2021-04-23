import React from 'react'

function Product(props) {
    const { title, image, description, price, category } = props;
    return (
        <div className="col-lg-4 col-md-4 mt-3">
            <div className="card h-100 d-flex align-items-center"  >

                <img src={image} className="card-img-top align-self-center" style={{ width: '200px', objectFit: "cover" }} alt="blabla" />

                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title">{title}</h5>
                    <h6>{category}</h6>
                    <p className="card-text">{description}</p>
                    <p className="text-dark font-weight-bold">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;
