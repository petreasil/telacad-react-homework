import React, { Component } from 'react'
import { connect } from "react-redux";
import { getProducts } from "../Redux/actions/action";
import Product from './Product';

class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        console.log(this.props);
        const { products } = this.props;
        return (
            <div className="row mt-3">

                {products.map(product => (
                    <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        category={product.category}

                    />
                ))}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps, { getProducts })(Products);