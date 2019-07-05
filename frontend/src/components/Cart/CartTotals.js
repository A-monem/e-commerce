import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CartTotals extends Component {
  render() {
    const { cartSubtotal, cartTax, cartTotal, cart, clearCart } = this.props.value;
    return (
            <div className="row">
              <div className="col-sm-8 col-md-10 mt-2 ml-sm-5 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>
                  <strong> $ {cartSubtotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>
                  <strong> $ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>
                  <strong> $ {cartTotal} </strong>
                </h5>
              </div>
            </div>
    );
  }
}

