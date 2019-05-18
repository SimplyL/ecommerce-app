import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addProduct } from '../../modules/shoppingCart';

class AddToCartInput extends Component {
  state = {
    quantity: 1,
  };

  handleClick = () => {
    const { quantity } = this.state;
    const { id } = this.props;

    this.props.addProduct({ id, quantity });
  }

  handleChange = evt => this.setState({
    quantity: evt.target.value,
  });

  render() {
    const { quantity } = this.state;

    return (
      <>
        <input
          type="number"
          value={quantity}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add to cart</button>
      </>
    );
  }
};

AddToCartInput.propTypes = {
  id: PropTypes.string.isRequired,
  addProduct: PropTypes.func.isRequired,
}

export default connect(null, { addProduct })(AddToCartInput);
