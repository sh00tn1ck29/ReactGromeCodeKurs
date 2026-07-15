import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = filterText => {
    this.setState({ filterText });
  };

  handleInStockChange = inStockOnly => {
    this.setState({ inStockOnly });
  };

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    const filteredProducts = products.filter(product => {
      const nameMatches = product.name.toLowerCase().includes(filterText.toLowerCase());
      const stockMatches = !inStockOnly || product.stocked;
      return nameMatches && stockMatches;
    });

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockOnlyChange={this.handleInStockChange}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
