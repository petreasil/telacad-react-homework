import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../Redux/actions/action";
import Product from "./Product";

class Products extends Component {

  async componentDidMount() {
    await Promise.all([]);
    this.props.getProducts();
  }
  render() {
    const { currentDisplayProducts } = this.props;
    console.log('products', currentDisplayProducts);
    return (
      <div className="row mt-3">
        {currentDisplayProducts.map((product) => (
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
    );
  }
}
function mapStateToProps(state) {
  return {
    currentDisplayProducts: state.products.currentDisplayProducts,
  };
}
export default connect(mapStateToProps, { getProducts })(Products);
